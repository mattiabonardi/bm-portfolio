import { printToConsole } from "bm-signature";
import { useEffect } from "react";
import { useIntroContext } from "../context/intro";
import styles from "../styles/components/Intro.module.css";
import { LoadingBar } from "./LoadingBar";

export const Intro: React.FC = () => {
  const { introAlreadyLoaded, setIntroAlreadyLoaded } = useIntroContext();

  useEffect(() => {
    if (!introAlreadyLoaded) {
      setTimeout(() => {
        setIntroAlreadyLoaded(true);
      }, 4500);
      // print signature to console
      printToConsole();
    }
  }, []);

  if (!introAlreadyLoaded) {
    return (
      <>
        <div className={styles.wrapper}>
          <h2 className={styles.subtitle}>Welcome to</h2>
          <h1 className={styles.title}>BM Portfolio</h1>
          <LoadingBar></LoadingBar>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};
