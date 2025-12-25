import Article from "@/app/_component/Article";
import { getNewsDetail } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    dk?: string;
  };
};

export default async function Page({ params, searchParams }: Props) {
  console.log("searchParams:", searchParams.dk);
  const data = await getNewsDetail(params.slug, {
    draftKey: searchParams.dk,
  }).catch(notFound);
  // console.log("data:", data);
  return (
    <>
      <Article data={data} />
    </>
  );
}
