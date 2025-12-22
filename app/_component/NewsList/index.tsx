import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";
import { News } from "@/app/_libs/microcms";
import CategoryTag from "../CategoryTag";
import DateTag from "../DateTag";

type Props = {
  news: News[];
};

export default function NewsList({ news }: Props) {
  return (
    <>
      <ul>
        {news.map((article) => (
          <li key={article.id} className={styles.list}>
            <Link href={`/news/${article.id}`} className={styles.link}>
              {article.thumbnail ? (
                <Image
                  className={styles.image}
                  src={article.thumbnail.url}
                  alt=""
                  width={article.thumbnail.width}
                  height={article.thumbnail.height}
                />
              ) : (
                <Image
                  className={styles.image}
                  src="/no-image.png"
                  alt="no-image"
                  width={1200}
                  height={630}
                />
              )}
              <dl>
                <dt className={styles.title}>{article.title}</dt>
                <dd className={styles.meta}>
                  <CategoryTag category={article.category} />
                  <DateTag date={article.publishedAt ?? article.createdAt} />
                </dd>
              </dl>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
