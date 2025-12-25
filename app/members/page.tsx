import Image from "next/image";
import { memberData } from "../_libs/microcms";
import styles from "./page.module.css";

export default function Page() {
  console.log(memberData.contents);
  // memberData.contents=[]
  return (
    <>
      {memberData.contents.length === 0 ? (
        <p className={styles.text}>メンバーが登録されていません</p>
      ) : (
        <ul>
          {memberData.contents.map((member) => (
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
    </>
  );
}
