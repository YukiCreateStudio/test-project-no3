"use client";

import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";
import { useState } from "react";
import classNames from "classnames";

export default function Menu() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const open = () => {
    setOpen(true);
    // console.log(isOpen);
  };
  const close = () => setOpen(false);

  return (
    <>
      <nav className={classNames(styles.nav, isOpen && styles.open)}>
        <ul className={styles.items}>
          <li>
            <Link href="/news" onClick={close}>ニュース</Link>
          </li>
          <li className={styles.item}>
            <Link href="/members" onClick={close}>メンバー</Link>
          </li>
          <li className={styles.item}>
            <Link href="/contacts" onClick={close}>お問い合わせ</Link>
          </li>
        </ul>
        <button
          className={classNames(styles.button, styles.close)}
          onClick={close}
        >
          <Image src="/close.svg" alt="" width={24} height={24} priority />
        </button>
      </nav>
      <button className={styles.button} onClick={open}>
        <Image src="/menu.svg" alt="" width={24} height={24} priority />
      </button>
    </>
  );
}
