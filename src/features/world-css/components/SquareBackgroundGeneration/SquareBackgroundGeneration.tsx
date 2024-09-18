"use client";

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type Square = {
  id: string;
  posXOrigin: number;
  posYOrigin: number;
  sizeOrigin: number;
  rotation: number;
  duration: number;
  opacity: number;
  posDestination: number;
  color: string;
  fadeout: number;
  eraseDiv: number;
};

const generateRandomColor = (): string => {
  const hueR = Math.floor(Math.random() * 255);
  const hueG = Math.floor(Math.random() * 255);
  const hueB = Math.floor(Math.random() * 255);
  return `rgb(${hueR},${hueG},${hueB})`;
};

const generateRandomPosition = (): {
  posXOrigin: number;
  posYOrigin: number;
} => {
  const posXOrigin = Math.floor(Math.random() * 100);
  const posYOrigin = Math.floor(Math.random() * 80) + 10;
  return { posXOrigin, posYOrigin };
};

const generateRandomSize = (): number => {
  return Math.floor(Math.random() * 130) + 35;
};

const generateRandomAnimationParams = (): {
  rotation: number;
  duration: number;
  opacity: number;
  posDestination: number;
} => {
  const rotation = Math.random() * 720 - 360;
  const duration = Math.floor(Math.random() * 6) + 4;
  const opacity = 0;
  const posDestination = Math.floor(Math.random() * 50);
  return { rotation, duration, opacity, posDestination };
};

export default function SquareBackgroundGeneration() {
  const [squares, setSquares] = useState<Square[]>([]);

  useEffect(() => {
    const addSquare = () => {
      if (squares.length <= 10) {
        const newSquare = createNewSquare();
        setSquares((prevSquares) => [...prevSquares, newSquare]);

        setTimeout(() => {
          const element = document.getElementById(`square-${newSquare.id}`);
          if (element) {
            element.style.transform = `translateY(-${newSquare.posDestination}rem) rotate(${newSquare.rotation}deg)`;
            element.style.opacity = "1";
          }
        }, 100);

        setTimeout(() => {
          const element = document.getElementById(`square-${newSquare.id}`);
          if (element) {
            element.style.opacity = "0";
          }
        }, newSquare.fadeout);

        setTimeout(() => {
          removeSquare(newSquare.id);
        }, newSquare.eraseDiv);
      }
    };

    // Spawn new squares at random intervals
    const spawnInterval = setInterval(() => {
      addSquare();
    }, Math.floor(Math.random() * 2000) + 1000);

    return () => {
      clearInterval(spawnInterval);
    };
  }, [squares]);

  const createNewSquare = (): Square => {
    const id = uuidv4();
    const { posXOrigin, posYOrigin } = generateRandomPosition();
    const sizeOrigin = generateRandomSize();
    const { rotation, duration, opacity, posDestination } =
      generateRandomAnimationParams();
    const color = generateRandomColor();

    const fadeout = duration * 500;
    const eraseDiv = duration * 1000;

    return {
      id,
      posXOrigin,
      posYOrigin,
      sizeOrigin,
      rotation,
      duration,
      opacity,
      posDestination,
      color,
      fadeout,
      eraseDiv,
    };
  };

  const removeSquare = (id: string) => {
    setSquares((prevSquares) =>
      prevSquares.filter((square) => square.id !== id)
    );
  };

  return (
    <div>
      {squares.map((square) => (
        <div
          key={square.id}
          id={`square-${square.id}`}
          className="rounded-md"
          style={{
            width: `${square.sizeOrigin}px`,
            height: `${square.sizeOrigin}px`,
            border: "solid 2px",
            borderColor: square.color,
            boxShadow: `0 0 4px 2px ${square.color}`,
            opacity: 1,
            position: "fixed",
            top: `${square.posYOrigin}%`,
            left: `${square.posXOrigin}%`,
            zIndex: 10,
            transition: `transform ${square.duration}s, opacity ${square.duration}s`,
          }}
        ></div>
      ))}
    </div>
  );
}
