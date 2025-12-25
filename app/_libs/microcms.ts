export type NewsType = {
  id: string;
  title: string;
  category: {
    name: string;
  };
  publishedAt: string;
  createdAt: string;
};

export const data: { contents: NewsType[] } = {
  contents: [
    {
      id: "1",
      title: "渋谷にオフィスを移転しました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2025/12/25",
      createdAt: "2025/12/25",
    },
    {
      id: "2",
      title: "当社CEOが業界リーダーTOP３０に選出されました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2025/12/24",
      createdAt: "2025/12/24",
    },
    {
      id: "3",
      title: "これはテスト記事です",
      category: {
        name: "更新情報",
      },
      publishedAt: "2025/12/23",
      createdAt: "2025/12/23",
    },
  ],
};
