import React, { ReactNode } from "react";
import styles from "./layout.module.scss";
import Header from "./Header/Header";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Header />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
