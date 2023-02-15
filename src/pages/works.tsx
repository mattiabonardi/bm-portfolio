import styles from "../styles/pages/Works.module.css";
import Image from "next/image";
import { Icon } from "../components/Icon";
import { WorkData } from "../types/work";
import { workData } from "../assets/works";

export default function Works() {
  let delay = 500;

  return (
    <>
      <div className={styles.backContainer}></div>
      <div className={styles.container}>
        {workData.map((e: WorkData, index) => {
          const workSummaryProps = {
            ...e,
            delay,
          };
          delay += 100;
          return <WorkSummary key={index} {...workSummaryProps} />;
        })}
      </div>
    </>
  );
}

interface WorkSummaryProps extends WorkData {
  delay: number;
}

export const WorkSummary: React.FC<WorkSummaryProps> = (props) => {
  return (
    <div
      className={styles.section}
      style={{
        animation: "fadein 1s forwards " + props.delay + "ms",
        WebkitAnimation: "fadein 1s forwards " + props.delay + "ms",
        MozAnimation: "fadein 1s forwards " + props.delay + "ms",
      }}
    >
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
