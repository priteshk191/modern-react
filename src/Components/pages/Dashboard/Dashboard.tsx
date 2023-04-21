import React, { useState } from "react";
import styles from "../pages.module.scss";
import { useRouter } from "next/router";

type DashboardProps = {};
type CatType = {
  page: string;
  url: string;
};

const CAT_TYPE: CatType[] = [
  { page: "Image Cropper", url: "imagecropper" },
  { page: "Drag And Drop", url: "draganddrop" },
];

const Dashboard: React.FC<DashboardProps> = () => {
  const router = useRouter();
  const [inputText, setInputText] = useState("");
  const [selectedCat, setSelectedCat] = useState(CAT_TYPE);

  // const handleSearch = (e: any) => {
  //   var lowerCase = e.target.value.toLowerCase();
  //   setInputText(lowerCase);
  //   const filteredData = selectedCat.filter((tag) => {
  //     if (tag === e.target.value) {
  //       return tag;
  //     }
  //   });
  // };
  return (
    <div className={styles.tagsAlignment}>
      <h2>TAGS</h2>
      <div className={styles.row}>
        {selectedCat?.map((cat, index) => {
          return (
            <button key={index} onClick={() => router.push(`/${cat?.url}`)}>
              <b>{cat?.page}</b>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
