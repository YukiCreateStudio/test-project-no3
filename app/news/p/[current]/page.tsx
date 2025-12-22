import NewsList from "@/app/_component/NewsList"
import Pagination from "@/app/_component/Pagination"
import { NEWS_LIST_LIMIT } from "@/app/_constants"
import { getNewsList } from "@/app/_libs/microcms"
import { notFound } from "next/navigation"

type Props = {
  params:{
    current:string
  }
}

export default async function Page({params}:Props) {
  console.log("params:",params)
  const current = parseInt(params.current,10)
  console.log("current:",current)
  const {contents:news,totalCount} = await getNewsList({
    limit:NEWS_LIST_LIMIT,
    offset:NEWS_LIST_LIMIT*(current-1),
  }).catch(notFound)
  console.log("totalCount:",totalCount)
  return (
    <>
      <NewsList news={news}/>
      <Pagination totalCount={totalCount} current={current}/>
    </>
  );
}
