import { Header } from "../components/Header";
import { Icon } from "../components/Icon";
import styles from "../styles/pages/Index.module.css";

export default function Home() {
  return (
    <>
      <Header></Header>
      <div className={styles.titleWrapper}>
        <h2 className={styles.subtitle}>I'm Mattia, a full stack</h2>
        <h1 className={styles.title}>DEVELOPER</h1>
      </div>
      <footer className={styles.footer}>
        <span className={styles.social}>
          <Icon
            iconName="instagram"
            size="20"
            onClickEvent={toInstagram}
          ></Icon>
        </span>
        <span className={styles.social}>
          <Icon iconName="github" size="20" onClickEvent={toGitHub}></Icon>
        </span>
        <span className={styles.social}>
          <Icon iconName="linkedin" size="20" onClickEvent={toLinkedin}></Icon>
        </span>
        <span className={styles.social}>
          <Icon iconName="mail" size="20" onClickEvent={toMail}></Icon>
        </span>
      </footer>
    </>
  );
}

const toLinkedin = () =>
  window.open(
    "https://www.linkedin.com/in/mattia-bonardi-099b02235/",
    "_blank"
  );
const toInstagram = () =>
  window.open("https://www.instagram.com/mattiaabonardi/", "_blank");
const toGitHub = () =>
  window.open("https://github.com/mattiabonardi", "_blank");
const toMail = () => window.open("mailto:mattiabonardi99@gmail.com");
