export interface NewsItem {
  id: number
  text: {
    JP: string
    EN: string
  }
  date: string
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    text: {
      JP: 'MOTHER VEGETABLESトークンのプレセール開始日が決定しました',
      EN: 'MOTHER VEGETABLES Token presale start date has been announced'
    },
    date: '2025-01-15'
  },
  {
    id: 2,
    text: {
      JP: '新しいホワイトペーパーV2.0を公開しました',
      EN: 'New Whitepaper V2.0 has been released'
    },
    date: '2025-01-10'
  },
  {
    id: 3,
    text: {
      JP: '公式コミュニティサーバーがオープンしました',
      EN: 'Official community server is now open'
    },
    date: '2025-01-05'
  }
]
