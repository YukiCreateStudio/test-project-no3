import NewsList from "../_component/NewsList";
import Pagination from "../_component/Pagination";
import SearchField from "../_component/SearchField";
import { NEWS_LIST_LIMIT } from "../_constants";
import { getNewsList } from "../_libs/microcms";

export default async function Page() {
  const { contents: data,totalCount} = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    offset:0,
  });
  return (
    <>
      <SearchField/>
      <NewsList news={data} />
      <Pagination totalCount={totalCount}/>
    </>
  );
}
