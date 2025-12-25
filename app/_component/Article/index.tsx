import { News } from "@/app/_libs/microcms";
import styles from "./index.module.css";
import CategoryTag from "../CategoryTag";
import DateTag from "../DateTag";
import Image from "next/image";
import Link from "next/link";

type Props = {
  data: News;
};

export default function Article({ data }: Props) {
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
            src={data.thumbnail.url}
            alt=""
            width={data.thumbnail.width}
            height={data.thumbnail.height}
            className={styles.thumbnail}
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
