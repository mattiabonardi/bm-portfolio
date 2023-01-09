import styles from "../styles/components/Header.module.css";
import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "./Icon";

export const Header: React.FC = () => {
  const [active, setActive] = useState(false);
  const [menuClasses, setMenuClasses] = useState(styles.menu);
  const [menuIconName, setMenuIconName] = useState("close");

  if (active) {
    setMenuClasses(styles.menu + " " + styles.active);
    setMenuIconName("menu");
  }

  const menuToggle = () => {
    if (active) {
      // close menu
      setActive(false);
      setMenuClasses(styles.menu + " " + styles.active);
      setMenuIconName("menu");
    } else {
      // open menu
      setActive(true);
      setMenuClasses(styles.menu);
      setMenuIconName("close");
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logoWrapper}>
          <Link className={styles.logo} href="/">
            BM.
          </Link>
        </div>
        <div className={menuClasses}>
          <Link className={styles.menuItem} href="/">
            HOME
          </Link>
          <Link className={styles.menuItem} href="/about">
            ABOUT
          </Link>
          <Link className={styles.menuItem} href="/works">
            WORKS
          </Link>
        </div>
        <div className={styles.menuButtonWrapper}>
          <Icon
            iconName={menuIconName}
            size="40"
            onClickEvent={menuToggle}
          ></Icon>
        </div>
      </nav>
    </header>
  );
};
