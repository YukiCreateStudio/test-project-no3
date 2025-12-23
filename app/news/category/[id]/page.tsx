import NewsList from "@/app/_component/NewsList";
import { getNewsList } from "@/app/_libs/microcms";

type Props = {
  params: { id: string };
};

export default async function Page({ params }: Props) {
  const { contents: news } = await getNewsList({
    filters: `category[equals]${params.id}`,
  });
  return (
    <>
      <NewsList news={news} />
    </>
  );
}
