import NewsList from "../_components/NewsLinst";
import { getNewsList } from "../_libs/microcms";

export default async function Page() {
  const { contents: data } = await getNewsList({
    limit: 10,
  });
  return (
    <>
      <NewsList news={data} />
    </>
  );
}
