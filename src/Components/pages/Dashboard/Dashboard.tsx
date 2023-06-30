import React, { useState } from "react";
import { useRouter } from "next/router";
import { RootState } from "Redux/store";
import styles from "../pages.module.scss";
import buttonsData from "../../mock/buttons.json";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedPage } from "./DashboardSlice";

type DashboardProps = {};
type CatType = {
  page: string;
  url: string;
};

const Dashboard: React.FC<DashboardProps> = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const selectedPage = useSelector(
    (state: RootState) => state.dashboard.selectedPage
  );
  const handleButtonClick = (cat: CatType) => {
    dispatch(setSelectedPage(cat.page));
    router.push(`/${cat.url}`);
  };

  return (
    <div className={styles.tagsAlignment}>
      <h2>TAGS</h2>
      <div className={styles.row}>
        {buttonsData?.map((cat, index) => {
          return (
            <button
              key={index}
              onClick={() => handleButtonClick(cat)}
              className={cat.page === selectedPage ? styles.activeButton : ""}
            >
              <b>{cat.page}</b>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
