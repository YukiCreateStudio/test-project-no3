import Article from "@/app/_component/Article";
import { getNewsDetail } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  // console.log("params.slug:", params.slug);
  const data = await getNewsDetail(params.slug).catch(notFound);
  return (
    <>
      <Article data={data} />
    </>
  );
}
