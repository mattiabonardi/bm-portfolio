import { Header } from "../../components/Header";
import styles from "../../styles/pages/Work.module.css";
import { workData } from "../../assets/works";
import { WorkData } from "../../types/work";
import Image from "next/image";
import "animate.css";

export default function Work(props: { data: WorkData }) {
  return (
    <>
      <Header></Header>
      <div className={styles.backContainer}></div>
      <div className={styles.container}>
        <h2 className={styles.title}>{props.data.title}</h2>
        <p className={styles.text}>{props.data.content.intro}</p>
        <div className={styles.tecnologies}>
          {props.data.mainTecnologies.map((t, index) => {
            return (
              <Image
                key={index}
                alt={t}
                src={"/icons/" + t + ".svg"}
                width="50"
                height="50"
              />
            );
          })}
        </div>
        <h3 className={styles.subtitle}>Goal</h3>
        <p className={styles.text}>{props.data.content.goal}</p>
        <h3 className={styles.subtitle}>Architecture</h3>
        <p className={styles.text}>{props.data.content.architecture}</p>
        <h3 className={styles.subtitle}>Problems</h3>
        <p className={styles.text}>{props.data.content.problems}</p>
        <h3 className={styles.subtitle}>Tecnologies</h3>
        <div className={styles.allTecnologies}>
          {props.data.content.tecnologies.map((t, index) => {
            return (
              <Image
                key={index}
                alt={t}
                src={"/icons/" + t + ".svg"}
                width="50"
                height="50"
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { id } = context.params;
  const data = workData.find((el) => {
    const link = el.links.find((link) => {
      return link.icon == "info";
    });
    return el.id == id && link;
  });
  if (data) {
    return {
      props: {
        data,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
}
