import NewsList from "@/app/_components/NewsList";
import Pagination from "@/app/_components/Pagination";
import SearchField from "@/app/_components/SearchField";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import { getNewsList } from "@/app/_libs/microcms";

type Props = {
  searchParams: { q: string };
};

export default async function Page({ searchParams }: Props) {
  console.log(searchParams);
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    q: searchParams.q,
  });
  return (
    <div>
      <SearchField />
      <NewsList news={news} />
    </div>
  );
}
