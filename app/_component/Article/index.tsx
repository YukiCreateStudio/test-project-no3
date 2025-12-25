import { NewsType } from "@/app/_libs/microcms";
import styles from "./index.module.css";
import Link from "next/link";
import CategoryTag from "../CategoryTag";
import DateTag from "../DateTag";
import Image from "next/image";

type Props = {
  data: NewsType;
};

export default function Article({ data }: Props) {
  // console.log("data", data);
  return (
    <>
      <main>
        <h1 className={styles.title}>{data.title}</h1>
        <p className={styles.description}>{data.description}</p>
        <div className={styles.meta}>
          <Link href={`/news/category/${data.category.id}`}>
            <CategoryTag category={data.category} />
          </Link>
          <DateTag date={data.publishedAt ?? data.createdAt} />
        </div>
        {data.thumbnail && (
          <Image
            className={styles.thumbnail}
            src={data.thumbnail.url}
            alt=""
            width={data.thumbnail.width}
            height={data.thumbnail.height}
          />
        )}
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: data.contents }}
        />
      </main>
    </>
  );
}
