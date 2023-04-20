import React, { useState } from "react";
import styles from "../pages.module.scss";
import { useRouter } from "next/router";

type DashboardProps = {};

const CAT_TYPE: string[] = [
  "Pagination",
  "Slider",
  "Form",
  "Nextjs",
  "Firebase",
  "Chart",
  "Redux",
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
        {selectedCat?.map((cat: string, index: number) => {
          return (
            <button
              key={index}
              onClick={() => router.push(`/${cat.toLowerCase()}`)}
            >
              <b>{cat}</b>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
