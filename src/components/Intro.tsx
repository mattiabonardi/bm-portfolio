import { useEffect, useState } from "react";
import styles from "../styles/components/Intro.module.css";

interface IntroProps {}

export const Intro: React.FC<IntroProps> = () => {
  const [display, setDisplay] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      //setDisplay(false);
    }, 5000);
  }, []);

  if (display) {
    return (
      <>
        <div className={styles.wrapper}>
          <h2 className={styles.subtitle}>Welcome to</h2>
          <h1 className={styles.title}>BM Portfolio</h1>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};
