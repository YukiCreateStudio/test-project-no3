import Link from "next/link";
import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
  href: string;
};

export default function ButtonLink({ children, href }: Props) {
  return (
    <>
      <Link href={href} className={styles.button}>{children}</Link>
    </>
  );
}
