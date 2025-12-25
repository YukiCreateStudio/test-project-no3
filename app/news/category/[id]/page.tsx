import CategoryTag from "@/app/_component/CategoryTag";
import NewsList from "@/app/_component/NewsList";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import { getCategoryDetail, getNewsList } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  // console.log(params.id);
  const category = await getCategoryDetail(params.id).catch(notFound);
  const { contents: news } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    filters: `category[equals]${category.id}`,
  });
  return (
    <>
      <CategoryTag category={category} />
      の一覧
      <NewsList news={news} />
    </>
  );
}
