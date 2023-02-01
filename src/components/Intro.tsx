import { useEffect } from "react";
import { useIntroContext } from "../context/intro";
import styles from "../styles/components/Intro.module.css";

export const Intro: React.FC = () => {
  const { introAlreadyLoaded, setIntroAlreadyLoaded } = useIntroContext();

  useEffect(() => {
    setTimeout(() => {
      setIntroAlreadyLoaded(true);
    }, 4500);
  }, []);

  if (!introAlreadyLoaded) {
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
