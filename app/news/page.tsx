import NewsList from "../_component/NewsList";
import { NEWS_LIST_LIMIT } from "../_constants";
import { getNewsList } from "../_libs/microcms";

export default async function Page() {
  const news = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    offset: 0,
  });
  return (
    <>
      <NewsList news={news.contents} />
    </>
  );
}
