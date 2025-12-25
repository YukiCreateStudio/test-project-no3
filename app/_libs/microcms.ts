import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
  MicroCMSContentId,
} from "microcms-js-sdk";

export type CategoryType = {
  name: string;
} & MicroCMSListContent;

export type NewsType = {
  title: string;
  description: string;
  contents: string;
  thumbnail?: MicroCMSImage;
  category: CategoryType;
} & MicroCMSListContent;

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

//microCMSのクライアント設定
if (!process.env.MICROCMS_DOMAIN) {
  throw new Error("MICROCMS_DOMAIN is required");
}
if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}
const client = createClient({
  serviceDomain: process.env.MICROCMS_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// NewsListデータ取得
export const getNewsList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<NewsType>({
    endpoint: "news",
    queries,
  });
  return listData;
};

// CategoryListデータ取得
export const getCategoryDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const listData = await client.getListDetail<CategoryType>({
    endpoint: "categories",
    contentId,
    queries,
  });
  return listData;
};

// NewsDetailデータ取得
export const getNewsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const listData = await client.getListDetail<NewsType>({
    endpoint: "news",
    contentId,
    queries,
  });
  // console.log("listData:",listData)
  return listData;
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
