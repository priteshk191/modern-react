import React, { useState } from "react";
import { useRouter } from "next/router";
import { RootState } from "Redux/store";
import styles from "../pages.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedPage } from "./DashboardSlice";

type DashboardProps = {};
type CatType = {
  page: string;
  url: string;
};

const CAT_TYPE: CatType[] = [
  { page: "Image Cropper", url: "imagecropper" },
  { page: "Drag And Drop", url: "draganddrop" },
  { page: "Pagination", url: "pagination" },
  { page: "Gradient Generator", url: "colorgenerator" },
  { page: "To-Do List", url: "todo" },
];

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
        {CAT_TYPE?.map((cat, index) => {
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
