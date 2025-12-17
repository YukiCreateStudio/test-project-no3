import NewsList from "../_components/NewsList";
import Pagination from "../_components/Pagination";
import { NEWS_LIST_LIMIT } from "../_constants";
import { getNewsList } from "../_libs/microcms";

export default async function Page() {
  const { contents: data, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });
  return (
    <>
      <NewsList news={data} />
      <Pagination totalCount={totalCount} />
    </>
  );
}
