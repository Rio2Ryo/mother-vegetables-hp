import { NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'

// Node.jsランタイムを明示的に指定
export const runtime = 'nodejs'

export async function GET() {
  try {
    // publicフォルダのファイルパスを指定
    const filePath = join(process.cwd(), 'public', 'mvt_coin_32×32.svg')

    // ファイルを読み込み（SVGはテキストファイルなので文字列として読み込む）
    const fileContent = await readFile(filePath, 'utf-8')

    // レスポンスを作成（Content-Dispositionヘッダーを付与してダウンロードさせる）
    return new NextResponse(fileContent, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Content-Disposition': 'attachment; filename="mvt_coin_32x32.svg"',
      },
    })
  } catch (error) {
    console.error('File download error:', error)
    return NextResponse.json(
      { error: 'File not found' },
      { status: 404 }
    )
  }
}
