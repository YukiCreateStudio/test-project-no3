import Image from "next/image";
import styles from "./page.module.css";
import { getMembersList } from "../_libs/microcms";
import { MEMBERS_LIST_LIMIT } from "../_constants";

// const data = {
//   contents: [
//     {
//       id: "1",
//       image: {
//         url: "/img-member1.jpg",
//         width: "240",
//         height: "240",
//       },
//       name: "デイビッド・チャン",
//       position: "CEO",
//       profile: "適当人間",
//     },
//     {
//       id: "2",
//       image: {
//         url: "/img-member2.jpg",
//         width: "240",
//         height: "240",
//       },
//       name: "優樹",
//       position: "CEE",
//       profile: "適当人間2",
//     },
//     {
//       id:"3",
//       image:{
//         url:"/img-member3.jpg",
//         width:"240",
//         height:"240",
//       },
//       name:"亜貴子",
//       position:"社長",
//       profile:"適当です",
//     }
//   ],
// };

export default async function Page() {
  const data = await getMembersList({
    limit: MEMBERS_LIST_LIMIT,
  });
  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>メンバーが登録されていません。</p>
      ) : (
        <ul className={styles.items}>
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
                <dd className={styles.position}>{member.position}</dd>
                <dd className={styles.profile}>{member.profile}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
