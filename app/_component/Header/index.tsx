import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";
import Menu from "../Menu";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <Link href={"/"} className={styles.logoLink}>
          <Image
            className={styles.logo}
            src="/logo.svg"
            alt="logo"
            width={341}
            height={109}
          />
        </Link>
        <Menu/>
      </header>
    </>
  );
}
