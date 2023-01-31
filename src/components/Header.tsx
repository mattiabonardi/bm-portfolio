import styles from "../styles/components/Header.module.css";
import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "./Icon";
import { useRouter } from "next/router";

export const Header: React.FC = () => {
  const [active, setActive] = useState(false);
 const {pathname} = useRouter();

 const activeLinkClasses = [styles.selected, styles.menuItem].join(" ");

  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <Link className={styles.logo} href="/">
          BM.
        </Link>
      </div>
      <nav className={active ? styles.menu + " " + styles.active : styles.menu}>
        <Link className={pathname == "/" ? activeLinkClasses : styles.menuItem} href="/">
          HOME
        </Link>
        <Link className={pathname == "/about" ? activeLinkClasses : styles.menuItem} href="/about">
          ABOUT
        </Link>
        <Link className={pathname == "/works" ? activeLinkClasses : styles.menuItem} href="/works">
          WORKS
        </Link>
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
