import { NEWS_LIST_LIMIT } from "@/app/_constants";
import Link from "next/link";
import styles from "./index.module.css";
import classNames from "classnames";

type Props = {
  totalCount: number;
  current?: number;
};

export default function Pagination({ current=1, totalCount }: Props) {
  const pages = Array.from(
    { length: Math.ceil(totalCount / NEWS_LIST_LIMIT) },
    (_, i) => i + 1
  );

  return (
    <nav>
      <ul className={styles.container}>
        {pages.map((p) => (
          <li key={p} className={styles.list}>
            {current !== p?(
              <Link href={`/news/p/${p}`} className={styles.item}>{p}</Link>
            ):(
              <span className={classNames(styles.current,styles.item)}>{p}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
