import Image from "next/image";
import styles from "./page.module.css";
import { getMembersList } from "../_libs/microcms";
import { MEMBER_LIST_LIMIT } from "../_constants";

export default async function Page() {
  const data = await getMembersList({
    limit: MEMBER_LIST_LIMIT,
  });
  console.log(data);
  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.message}>メンバーがいません</p>
      ) : (
        <ul>
          {data.contents.map((member) => (
            <li key={member.id} className={styles.list}>
              <Image
                className={styles.image}
                src={member.image.url}
                alt=""
                width={member.image.width}
                height={member.image.height}
              />
              <dl>
                <dt className={styles.name}>{member.name}</dt>
                <dt className={styles.position}>{member.position}</dt>
                <dt className={styles.profile}>{member.profile}</dt>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
