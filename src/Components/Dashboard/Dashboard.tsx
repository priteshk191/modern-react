import React, { useState } from "react";
import styles from "./dashboard.module.scss";
import { useRouter } from "next/router";

type DashboardProps = {
  // Define any props for your component here
};

const CAT_TYPE: string[] = [
  "Pagination",
  "Slider",
  "Form",
  "Nextjs",
  "Firebase",
  "Chart",
  "Redux",
];

const Dashboard: React.FC<DashboardProps> = (props) => {
  const [selectedCat, setSelectedCat] = useState(CAT_TYPE);
  const [inputText, setInputText] = useState("");

  const router = useRouter();

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
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>My React</h1>
        </div>
        <nav className={styles.nav}>
          <div className={styles.search}>
            <input
              type="text"
              name="text"
              // value={inputText}
              className="input"
              placeholder="kuch to search karle"
              // onChange={handleSearch}
            />
            <button>
              <i className="fa fa-search"></i>
            </button>
          </div>
          <ul className={styles.menu}>
            <li>
              <a href="#"> Home</a>
            </li>
          </ul>
        </nav>
      </header>
      <div>
        <h2>TAGS</h2>
        <div className={styles.row}>
          {selectedCat?.map((cat: string, index: number) => {
            return (
              <button key={index} onClick={() => router.push(`/${cat.toLowerCase()}`)}>
                <b>{cat}</b>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
