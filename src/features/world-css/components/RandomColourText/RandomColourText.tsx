import React, { useState } from "react";

interface RandomColourTextProps {
  text: string;
}

/**
 * Renders text with each character changing to a random color on hover. Colors are reset for each hover interaction, creating a dynamic color effect for each letter.
 *
 * ```javascript
 * import RandomColourText from "@/features/world-css/components/RandomColourText/RandomColourText";
 *
 * <RandomColourText text="Colorful Text!" />
 * ```
 */

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
          data-testid="random-colour-char"
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
