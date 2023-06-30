import React, { useState } from "react";
import styles from "../../layout.module.scss";
import buttonsData from "../../../Components/mock/buttons.json";
import { useRouter } from "next/router";

type CatType = {
  page: string;
  url: string;
};

export default function Header() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestedButtons, setSuggestedButtons] = useState<CatType[]>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearchValue(value);
    const filteredButtons = buttonsData.filter((button: CatType) =>
      button.page.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestedButtons(filteredButtons);
    setShowSuggestions(filteredButtons.length > 0);
  };

  const handleSuggestionClick = (cat: CatType) => {
    setSearchValue(cat.page);
    router.push(`/${cat.url}`);
  };

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
            value={searchValue}
            onChange={handleSearchChange}
          />
          {showSuggestions && (
            <div className={styles.suggestions}>
              {suggestedButtons.map((cat: CatType, index: number) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(cat)}
                  className={styles.suggestionButton}
                >
                  {cat.page}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
