import { CategoryType } from "@/app/_libs/microcms";
import styles from "./index.module.css";

type Props = {
  category: CategoryType;
};

export default function CategoryTag({ category }: Props) {
  return <span className={styles.tag}>{category.name}</span>;
}
