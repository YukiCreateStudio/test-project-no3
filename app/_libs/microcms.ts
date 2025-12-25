export type NewsType = {
  id: string;
  title: string;
  category: {
    name: string;
  };
  publishedAt: string;
  createdAt: string;
};

export type MemberType = {
  id: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
  name: string;
  position: string;
  profile: string;
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

export const memberData: { contents: MemberType[] } = {
  contents: [
    {
      id: "1",
      image: {
        url: "/img-member1.jpg",
        width: 240,
        height: 240,
      },
      name: "yuki",
      position: "CEO",
      profile: "aho",
    },
    {
      id: "2",
      image: {
        url: "/img-member2.jpg",
        width: 240,
        height: 240,
      },
      name: "akiko",
      position: "COO",
      profile: "最高の妻",
    },
    {
      id: "3",
      image: {
        url: "/img-member3.jpg",
        width: 240,
        height: 240,
      },
      name: "aoi",
      position: "COO",
      profile: "最高の息子",
    },
  ],
};
