import React, { ReactNode } from "react";
import styles from "../layout.module.scss";
import Header from "./Header/Header";
import Dashboard from "@/Components/pages/Dashboard/Dashboard";

function BaseLayout({ children }: any) {
  return (
    <div className={styles.container}>
      <Header />
      {children?.type?.name !== "Dashboard" && <Dashboard />}
      <div>{children}</div>
    </div>
  );
}

export default BaseLayout;
