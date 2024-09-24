import React, { useState } from "react";

interface RandomColourTextProps {
  text: string;
}

const RandomColourText: React.FC<RandomColourTextProps> = ({ text }) => {
  const [colors, setColors] = useState<string[]>(
    new Array(text.length).fill("")
  );

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleMouseEnter = (index: number) => {
    const newColors = [...colors];
    newColors[index] = getRandomColor();
    setColors(newColors);
  };

  return (
    <h3>
      {text.split("").map((char, index) => (
        <span
          key={index}
          style={{ color: colors[index], transition: "color 0.3s ease-in-out" }}
          className="h3"
          onMouseEnter={() => handleMouseEnter(index)}
        >
          {char}
        </span>
      ))}
    </h3>
  );
};

export default RandomColourText;
