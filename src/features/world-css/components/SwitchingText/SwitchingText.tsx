"use client";

import { useState, useEffect } from "react";
import "./switching-text.css";

interface ISwitcherTextProps {
  children: React.ReactNode[];
}

export default function SwitchingText({ children }: ISwitcherTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [children.length]);

  return (
    <div className="relative w-[100%] h-6">
      {children.map((child, index) => (
        <div
          key={index}
          className={`absolute left-[50%] switcher animate-slide-in transform -translate-x-1/2 ${
            index === currentIndex ? "visible" : "hidden"
          }`}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
