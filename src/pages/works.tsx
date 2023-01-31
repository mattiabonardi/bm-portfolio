import styles from "../styles/pages/Works.module.css";
import Image from "next/image";
import { Icon } from "../components/Icon";
import { WorkData } from "../types/work";
import { workData } from "../assets/works";
import { useRouter } from "next/router";

export default function Works() {
  return (
    <>
      <div className={styles.backContainer}></div>
      <div className={styles.container}>
        {workData.map((e, index) => {
          return <WorkSummary key={index} {...e} />;
        })}
      </div>
    </>
  );
}

export const WorkSummary: React.FC<WorkData> = (props) => {
  const router = useRouter();

  return (
    <div className={styles.section}>
      <h2 className={styles.title}>{props.title}</h2>
      <div className={styles.tecnologies}>
        {props.mainTecnologies.map((t, index) => {
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
      <p className={styles.abstract}>{props.abstract}</p>
      <div className={styles.links}>
        {props.links.map((link, index) => {
          return (
            <Icon
              key={index}
              iconName={link.icon}
              size="25"
              onClickEvent={link.onClick}
            ></Icon>
          );
        })}
      </div>
    </div>
  );
};
