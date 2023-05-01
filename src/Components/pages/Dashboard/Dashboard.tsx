import React, { useState } from "react";
import styles from "../pages.module.scss";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedPage } from "./DashboardSlice";
import { RootState } from "Redux/store";

type DashboardProps = {};
type CatType = {
  page: string;
  url: string;
};

const CAT_TYPE: CatType[] = [
  { page: "Image Cropper", url: "imagecropper" },
  { page: "Drag And Drop", url: "draganddrop" },
  { page: "Pagination", url: "pagination" },
  { page: "Color Generator", url: "colorgenerator" },
  { page: "CRUD", url: "crud" },
];

const Dashboard: React.FC<DashboardProps> = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const selectedPage = useSelector(
    (state: RootState) => state.dashboard.selectedPage
  );

  const [selectedCat, setSelectedCat] = useState(CAT_TYPE);

  const handleButtonClick = (cat: CatType) => {
    dispatch(setSelectedPage(cat.page));
    router.push(`/${cat.url}`);
  };

  return (
    <div className={styles.tagsAlignment}>
      <h2>TAGS</h2>
      <div className={styles.row}>
        {selectedCat?.map((cat, index) => {
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
