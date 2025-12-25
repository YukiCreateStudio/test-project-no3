import CategoryTag from "@/app/_component/CategoryTag";
import NewsList from "@/app/_component/NewsList";
import { getCategoryDetail, getNewsList } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
};

export default async function Page({ params }: Props) {
  const category = await getCategoryDetail(params.id).catch(notFound);
  const { contents: news } = await getNewsList({
    filters: `category[equals]${category.id}`,
  });
  console.log("news:", news);
  return (
    <>
      <CategoryTag category={category} />
      の一覧
      <NewsList news={news} />
    </>
  );
}
