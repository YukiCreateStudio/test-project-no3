"use client";

import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";
import { useState } from "react";
import classNames from "classnames";
import { tree } from "next/dist/build/templates/app-page";

export default function Menu() {
  const [isOpen, setOpen] = useState(false);
  const open = () => setOpen(true);
  const close = () => setOpen(false);

  return (
    <div>
      <nav className={classNames(styles.nav, isOpen && styles.open)}>
        <ul className={styles.items}>
          <li>
            <Link className={styles.item} href="/news" onClick={close}>
              ニュース
            </Link>
          </li>
          <li>
            <Link className={styles.item} href="/members" onClick={close}>
              メンバー
            </Link>
          </li>
          <li>
            <Link className={styles.item} href="/contact" onClick={close}>
              お問い合わせ
            </Link>
          </li>
        </ul>
        <button className={classNames(styles.button,styles.close)}
        onClick={close}>
          <Image
            src="/close.svg"
            alt=""
            width={24}
            height={24}
            priority
          />
        </button>
      </nav>
      <button className={styles.button} onClick={open}>
        <Image
          className={styles.image}
          src="/menu.svg"
          alt=""
          width={24}
          height={24}
          priority
        />
      </button>
    </div>
  );
}
