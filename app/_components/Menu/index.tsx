import Link from "next/link";
import styles from "./index.module.css";

export default function Menu() {
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <Link href="/news">ニュース</Link>
          </li>
          <li className={styles.item}>
            <Link href="/members">メンバー</Link>
          </li>
          <li className={styles.item}>
            <Link href="/contacts">お問い合わせ</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
