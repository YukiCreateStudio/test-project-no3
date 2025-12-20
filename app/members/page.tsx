import Image from "next/image";
import { MemberType } from "../_libs/microcms";
import styles from "./page.module.css";

const data: { contents: MemberType[] } = {
  contents: [
    {
      id: "1",
      image: {
        url: "/img-member1.jpg",
        width: 240,
        height: 240,
      },
      name: "aoi",
      position: "CEO",
      profile: "最高のちび",
    },{
      id:"2",
      image:{
        url:"/img-member2.jpg",
        width:240,
        height:240,
      },
      name:"akiko",
      position:"mama",
      profile:"最高の妻",
    },
  ],
};

export default function Page() {

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
