import React, { useState } from "react";

interface MovingTextProps {
  text: string;
}

const MovingText: React.FC<MovingTextProps> = ({ text }) => {
  const [positions, setPositions] = useState<{ x: number; y: number }[]>(
    new Array(text.length).fill({ x: 0, y: 0 })
  );

  const handleMouseEnter = (index: number) => {
    const newPositions = [...positions];
    newPositions[index] = {
      x: Math.random() * 1000 - 500,
      y: Math.random() * 1000 - 500,
    };
    setPositions(newPositions);

    setTimeout(() => {
      setPositions((prevPositions) => {
        const resetPositions = [...prevPositions];
        resetPositions[index] = { x: 0, y: 0 };
        return resetPositions;
      });
    }, 500);
  };

  return (
    <h3>
      {text.split("").map((char, index) => (
        <span
          key={index}
          style={{
            display: "inline-block",
            transition: "transform 0.2s ease-in-out",
            transform: `translate(${positions[index]?.x}px, ${positions[index]?.y}px)`,
          }}
          className="h3"
          onMouseEnter={() => handleMouseEnter(index)}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h3>
  );
};

export default MovingText;
