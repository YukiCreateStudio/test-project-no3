import NewsList from "../_component/NewsList";
import { data } from "../_libs/microcms";

export default function Page() {
  console.log("data.contents:",data.contents);
  return (
    <>
      <NewsList news={data.contents} />
    </>
  );
}
