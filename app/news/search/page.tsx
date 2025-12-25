import NewsList from "@/app/_component/NewsList";
import SearchField from "@/app/_component/SearchField";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import { getNewsList } from "@/app/_libs/microcms";

type Props = {
  params?: string;
  searchParams: { q?: string };
};

export default async function Page({ params, searchParams }: Props) {
  console.log("params:", params, "searchParams.q:", searchParams.q);
  const { contents: news } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    q: searchParams.q,
  });
  return (
    <>
      <SearchField />
      <NewsList news={news} />
    </>
  );
}
