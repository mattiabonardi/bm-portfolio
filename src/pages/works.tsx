import { Header } from "../components/Header";
import styles from "../styles/pages/Works.module.css";
import Image from "next/image";
import { Icon } from "../components/Icon";

export default function Works() {
  return (
    <>
      <Header></Header>
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
  return (
    <div className={styles.section}>
      <header className={styles.sectionHeader}>
        <h2 className={styles.title}>{props.title}</h2>
        <Icon
          iconName="github"
          size="25"
          onClickEvent={() => window.open(props.github, "_blank")}
        ></Icon>
      </header>
      <div className={styles.abstract}>{props.abstract}</div>
      <div className={styles.tecnologies}>
        {props.tecnologies.map((t, index) => {
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
  );
};

interface WorkData {
  title: string;
  abstract: string;
  tecnologies: string[];
  github: string;
  demo: boolean;
}

const workData: WorkData[] = [
  {
    title: "Tic Tac Toe 3D",
    abstract:
      "Tic Tac Toe DDD reproduces tic tac toe game in 3D mode. The project is based on Next.js written in Typescript, HTML and CSS. The UI is created using Mui Components.",
    github: "https://github.com/mattiabonardi/tictactoe-ddd/",
    tecnologies: ["typescript", "react", "three"],
    demo: true
  },
  {
    title: "Smeup No Code",
    abstract:
      "Smeup NC is a Figma plugin which allows to generate Smeup UI DSL from Figma design file. The plugin is provided with Smeup Figma components library. Users can create interface mockups and in the end exports the relative DSL.",
    github: "https://github.com/mattiabonardi/smeup-nc/",
    tecnologies: ["typescript", "react", "vite"],
    demo: true
  },
];
