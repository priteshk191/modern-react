import React, { useState, useEffect } from "react";
import styles from "./colorGenerator.module.scss";

const ColorGenerator = () => {
  const [color1, setColor1] = useState("#8A99DB");
  const [color2, setColor2] = useState("#C56DA9");
  const [gradient, setGradient] = useState("");
  const [intervalId, setIntervalId] = useState<number | undefined>(undefined);

  const setGradientBackground = () => {
    setGradient(`linear-gradient(to right, ${color1}, ${color2})`);
  };

  const generateRandomColor = (): string => {
    return `#${((Math.random() * 0xffffff) << 0).toString(16)}`;
  };

  const generateRandomGradient = () => {
    setColor1(generateRandomColor());
    setColor2(generateRandomColor());
  };

  const startAutoGradient = () => {
    if (!intervalId) {
      const id = window.setInterval(generateRandomGradient, 2000);
      setIntervalId(id);
    }
  };

  const stopAutoGradient = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(undefined);
    }
  };

  useEffect(() => {
    setGradientBackground();
  }, [color1, color2]);

  return (
    <div className={styles.colorWrapper}>
      <span>{gradient}</span>
      <div
        id="gradient"
        style={{ background: gradient }}
        className={styles.colorBackground}
      >
        {/* <h1>JUST ENTER A COLOR!</h1> */}
        {/* <h2>linear-gradient background</h2> */}
        <input
          className="color1"
          type="color"
          name="color1"
          value={color1}
          onChange={(e) => setColor1(e.target.value)}
        />
        <input
          className="color2"
          type="color"
          name="color2"
          value={color2}
          onChange={(e) => setColor2(e.target.value)}
        />
        {/* <button onClick={generateRandomGradient}>random</button>
        <button onClick={startAutoGradient}>Auto</button>
        <button onMouseDown={stopAutoGradient}>Stop</button> */}
      </div>
    </div>
  );
};

export default ColorGenerator;
