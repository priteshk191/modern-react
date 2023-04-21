import React from "react";
import styles from "../layout.module.scss";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return <div className={styles.pageAlignment}> {children}</div>;
};

export default PageLayout;
