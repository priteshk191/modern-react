import React from "react";
import styles from "../layout.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>My React</h1>
      </div>
      <nav className={styles.nav}>
        <div className={styles.search}>
          <input
            type="text"
            name="text"
            className="input"
            placeholder="kuch to search karle"
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
  );
}
