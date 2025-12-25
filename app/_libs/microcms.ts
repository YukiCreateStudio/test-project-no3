import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSClient,
  MicroCMSImage,
  MicroCMSListContent,
  MicroCMSQueries,
} from "microcms-js-sdk";

// microcmsのクライアント設定
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

export type News = {
  title: string;
  category: {
    id: string;
    name: string;
  };
  thumbnail: MicroCMSImage;
  description: string;
  contents: string;
} & MicroCMSListContent;

export type CategoryType = {
  name: string;
};

export type MemberType = {
  id: string;
  image: {
    url: string;
    width: number;
    height: number;
  } & MicroCMSImage;
  name: string;
  position: string;
  profile: string;
};

// メンバーデータ所得
export const getMembersList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<MemberType>({
    endpoint: "members",
    queries,
  });
  return listData;
};

// ニュースデータ取得
export const getNewsList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<News>({
    endpoint: "news",
    queries,
  });
  // console.log(listData);
  return listData;
};

export const getNewsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<News>({
    endpoint: "news",
    contentId,
    queries,
  });
  // console.log("detailData:", detailData);
  return detailData;
};

export const getCategoryDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<CategoryType>({
    endpoint: "categories",
    contentId,
    queries,
  });
  console.log("detailData:", detailData);
  return detailData;
};
