import styles from "../styles/components/Header.module.css";
import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "./Icon";

export const Header: React.FC = () => {
  const [active, setActive] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <Link className={styles.logo} href="/">
          BM.
        </Link>
      </div>
      <nav className={active ? styles.menu + " " + styles.active : styles.menu}>
        <Link className={styles.menuItem} href="/">
          HOME
        </Link>
        <Link className={styles.menuItem} href="/about">
          ABOUT
        </Link>
        <Link className={styles.menuItem} href="/works">
          WORKS
        </Link>
      </nav>
      <div className={styles.menuButton}>
        <Icon
          iconName={active ? "close" : "menu"}
          size="40"
          onClickEvent={() => {
            console.log("event", active);
            setActive(!active);
          }}
        ></Icon>
      </div>
    </header>
  );
};
