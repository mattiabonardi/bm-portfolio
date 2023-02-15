import styles from "../styles/components/Header.module.css";
import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "./Icon";
import { useRouter } from "next/router";

export const Header: React.FC = () => {
  const [active, setActive] = useState(false);
  const { pathname, push } = useRouter();

  const activeLinkClasses = [styles.selected, styles.menuItem].join(" ");

  const changePage = (path: string) => {
    push(path).then(() => {
      setActive(!active);
    });
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <Link className={styles.logo} href="/">
          BM.
        </Link>
      </div>
      <nav className={active ? styles.menu + " " + styles.active : styles.menu}>
        <a
          className={pathname == "/" ? activeLinkClasses : styles.menuItem}
          onClick={() => changePage("/")}
        >
          HOME
        </a>
        <a
          className={pathname == "/about" ? activeLinkClasses : styles.menuItem}
          onClick={() => changePage("/about")}
        >
          ABOUT
        </a>
        <a
          className={pathname == "/works" ? activeLinkClasses : styles.menuItem}
          onClick={() => changePage("/works")}
        >
          WORKS
        </a>
      </nav>
      <div className={styles.menuButton}>
        <Icon
          iconName={active ? "close" : "menu"}
          size="40"
          onClickEvent={() => {
            setActive(!active);
          }}
        ></Icon>
      </div>
    </header>
  );
};
