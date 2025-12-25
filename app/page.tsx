import Image from "next/image";
import styles from "./page.module.css";
import NewsList from "./_component/NewsList";
import { getNewsList } from "./_libs/microcms";
import ButtonLink from "./_component/ButtonLink";
import { TOP_NEWS_LIMIT } from "./_constants";

export default async function Home() {
  const {contents:news} = await getNewsList({
    limit: TOP_NEWS_LIMIT,
    offset: 0,
  });
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
          <p className={styles.description}>
            私たちは市場をリードしているグローバルテックカンパニーです。
          </p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
        />
      </section>
      <section className={styles.news}>
        <h2 className="newsTitle">News</h2>
        <NewsList news={news} />
        <div className={styles.newsLink}>
          <ButtonLink href={`/news`}>もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
