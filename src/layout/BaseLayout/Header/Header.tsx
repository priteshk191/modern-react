import React, { useState, useRef, ChangeEvent } from "react";
import styles from "../../layout.module.scss";
import buttonsData from "../../../Components/mock/buttons.json";
import { useRouter } from "next/router";
import useOutsideClick from "@/Components/common/useOutsideClick";

type CatType = {
  page: string;
  url: string;
};

export default function Header() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestedButtons, setSuggestedButtons] = useState<CatType[]>([]);
  const [insideSuggestions, setInsideSuggestions] = useState(false);
  const searchRef = useRef<HTMLInputElement | null>(null);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
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

  const handleOutsideClick = () => {
    if (!insideSuggestions) {
      setShowSuggestions(false);
    }
    setInsideSuggestions(false);
  };

  useOutsideClick(searchRef, handleOutsideClick);

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
            placeholder="Search your tool"
            value={searchValue}
            onChange={handleSearchChange}
            ref={searchRef}
          />
          {showSuggestions && (
            <div
              className={styles.suggestions}
              onMouseDown={() => setInsideSuggestions(true)}
            >
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
