/**
 * LogiMoPro 配送リスト スクレイパー
 * 
 * 配送一覧ページから「配送先氏名」と「お問合せ番号」を取得し、
 * 新規データのみ .txt ファイルに保存する（差分取得方式）
 */

require('dotenv').config();
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const notifier = require('node-notifier');

// ─── 設定 ───────────────────────────────────────
const CONFIG = {
  logimopro: {
    loginUrl: 'https://app.logimopro.jp/LogiMoPro/login/login.html',
    shippingListUrl: 'https://app.logimopro.jp/LogiMoPro/shipping/list.html',
    email: process.env.LOGIMOPRO_EMAIL,
    password: process.env.LOGIMOPRO_PASSWORD,
  },
  // テーブルの列番号 (0-indexed)
  columns: {
    recipientName: 6,   // 7列目 = 配送先氏名
    trackingNumber: 9,  // 10列目 = お問合せ番号
  },
  // 出力ファイル
  outputDir: path.join(require('os').homedir(), 'Desktop', 'scraper', 'output'),
  // 取得済みデータの記録ファイル
  historyFile: path.join(__dirname, 'history.json'),
};


// ─── 取得済みデータの管理 ────────────────────────
function loadHistory() {
  try {
    if (fs.existsSync(CONFIG.historyFile)) {
      const data = JSON.parse(fs.readFileSync(CONFIG.historyFile, 'utf-8'));
      return new Set(data);
    }
  } catch (error) {
    console.log('⚠️ 履歴ファイルの読み込みに失敗。新規作成します。');
  }
  return new Set();
}

function saveHistory(historySet) {
  fs.writeFileSync(CONFIG.historyFile, JSON.stringify([...historySet], null, 2), 'utf-8');
}

// レコードの一意キーを生成（氏名＋追跡番号の組み合わせ）
function makeKey(item) {
  return `${item.recipientName}::${item.trackingNumber}`;
}


// ─── LogiMoPro スクレイピング ──────────────────────
async function scrapeLogiMoPro() {
  console.log('🚀 ブラウザを起動中...');
  const isHeadless = process.argv.includes('--headless');
  const browser = await chromium.launch({
    headless: isHeadless,
  });

  const page = await browser.newPage();

  try {
    // 1. ログインページへ移動
    console.log('📄 ログインページに移動中...');
    await page.goto(CONFIG.logimopro.loginUrl, { waitUntil: 'networkidle' });

    // 2. ログイン情報を入力
    console.log('🔑 ログイン中...');

    const emailSelector = 'input[type="email"], input[type="text"], input[name="loginId"], input[name="email"], #loginId, #email';
    await page.waitForSelector(emailSelector, { timeout: 10000 });
    const emailInput = await page.$(emailSelector);
    await emailInput.fill(CONFIG.logimopro.email);

    const passwordSelector = 'input[type="password"], input[name="password"], #password';
    await page.waitForSelector(passwordSelector, { timeout: 10000 });
    const passwordInput = await page.$(passwordSelector);
    await passwordInput.fill(CONFIG.logimopro.password);

    const loginButtonSelector = 'button[type="submit"], input[type="submit"], button:has-text("ログイン"), .btn-login, #loginBtn';
    await page.waitForSelector(loginButtonSelector, { timeout: 10000 });
    await page.click(loginButtonSelector);

    await page.waitForNavigation({ waitUntil: 'networkidle', timeout: 30000 }).catch(() => {
      console.log('⚠️ ナビゲーション待機タイムアウト（ページが既に遷移済みの可能性）');
    });

    console.log('✅ ログイン完了');

    // 3. 配送一覧ページへ移動
    console.log('📦 配送一覧ページに移動中...');
    await page.goto(CONFIG.logimopro.shippingListUrl, { waitUntil: 'networkidle', timeout: 30000 });

    // テーブルが表示されるまで待機
    await page.waitForSelector('#table1 tbody tr', { timeout: 30000 });
    // Knockout.js のデータバインドが完了するまで少し待つ
    await page.waitForTimeout(3000);

    // 4. テーブルからデータを取得
    console.log('📊 テーブルデータを取得中...');
    const data = await page.evaluate((cols) => {
      const rows = document.querySelectorAll('#table1 tbody tr');
      const results = [];

      rows.forEach((row) => {
        const cells = row.querySelectorAll('td');
        if (cells.length > Math.max(cols.recipientName, cols.trackingNumber)) {
          const name = cells[cols.recipientName]?.textContent?.trim() || '';
          const tracking = cells[cols.trackingNumber]?.textContent?.trim() || '';

          if (name && tracking) {
            results.push({
              recipientName: name,
              trackingNumber: tracking,
            });
          }
        }
      });

      return results;
    }, CONFIG.columns);

    console.log(`✅ ${data.length} 件のデータをページから取得しました`);
    return data;

  } catch (error) {
    await page.screenshot({ path: 'error-screenshot.png' });
    console.error('❌ スクレイピング中にエラーが発生しました:', error.message);
    console.error('📸 エラー時のスクリーンショットを error-screenshot.png に保存しました');
    throw error;
  } finally {
    await browser.close();
    console.log('🔒 ブラウザを閉じました');
  }
}


// ─── 新規データのフィルタリング ──────────────────
function filterNewData(allData, history) {
  const newData = allData.filter((item) => !history.has(makeKey(item)));
  return newData;
}


// ─── .txt ファイルに保存 ────────────────────────
function saveToTextFile(data) {
  if (data.length === 0) {
    console.log('📭 新しいデータはありません。ファイルは作成しません。');
    return null;
  }

  // output ディレクトリを作成
  if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true });
  }

  // 日時をファイル名に含める
  const now = new Date();
  const timestamp = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}_${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}${String(now.getSeconds()).padStart(2, '0')}`;
  const fileName = `配送データ_${timestamp}.txt`;
  const filePath = path.join(CONFIG.outputDir, fileName);

  // テキスト内容を作成
  const lines = [];
  lines.push('配送先氏名\tお問合せ番号');
  lines.push('─────────────────────────────────');

  data.forEach((item) => {
    lines.push(`${item.recipientName}\t${item.trackingNumber}`);
  });

  lines.push('');
  lines.push(`取得日時: ${now.toLocaleString('ja-JP')}`);
  lines.push(`新規件数: ${data.length} 件`);

  fs.writeFileSync(filePath, lines.join('\n'), 'utf-8');
  console.log(`📄 保存完了: ${filePath}`);

  // Windows デスクトップ通知
  showNotification(data.length, filePath);

  return filePath;
}



// ─── Windows デスクトップ通知 ────────────────────
function showNotification(count, filePath) {
  const { exec } = require('child_process');
  const title = 'LogiMoPro スクレイパー';
  const message = `新しい配送データが ${count} 件見つかりました！ 保存先: ${path.basename(filePath)}`;
  const scriptPath = path.join(__dirname, 'notify.vbs');

  const cmd = `cscript //Nologo "${scriptPath}" "${title}" "${message}"`;

  exec(cmd, { timeout: 10000 }, (err) => {
    if (err) {
      console.log('⚠️ デスクトップ通知の送信に失敗しました:', err.message);
    } else {
      console.log('🔔 デスクトップ通知を送信しました');
    }
  });
}


// ─── メイン処理 ──────────────────────────────────
async function main() {
  console.log('========================================');
  console.log('  LogiMoPro → TXT スクレイパー（差分取得）');
  console.log('========================================\n');

  if (!CONFIG.logimopro.email || !CONFIG.logimopro.password) {
    console.error('❌ .env に LOGIMOPRO_EMAIL / LOGIMOPRO_PASSWORD が設定されていません');
    process.exit(1);
  }

  try {
    // Step 1: 取得済みデータの履歴を読み込み
    const history = loadHistory();
    console.log(`📚 取得済みデータ: ${history.size} 件\n`);

    // Step 2: LogiMoPro からデータ取得
    const allData = await scrapeLogiMoPro();

    // Step 3: 新規データのみフィルタリング
    const newData = filterNewData(allData, history);
    console.log(`🆕 新規データ: ${newData.length} 件 / 全 ${allData.length} 件`);

    if (newData.length > 0) {
      console.log('\n--- 新規データ一覧 ---');
      newData.forEach((item, i) => {
        console.log(`  ${i + 1}. 配送先: ${item.recipientName} | 追跡番号: ${item.trackingNumber}`);
      });
      console.log('---\n');
    }

    // Step 4: .txt ファイルに保存（新規データのみ）
    saveToTextFile(newData);

    // Step 5: 履歴を更新（全データを記録）
    allData.forEach((item) => history.add(makeKey(item)));
    saveHistory(history);
    console.log(`💾 履歴を更新しました（合計: ${history.size} 件）`);

    console.log('\n🎉 すべての処理が正常に完了しました！');
  } catch (error) {
    console.error('\n❌ エラーが発生しました:', error.message);
    process.exit(1);
  }
}

main();
