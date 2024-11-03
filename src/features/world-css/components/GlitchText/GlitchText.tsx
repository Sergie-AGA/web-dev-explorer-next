"use client";

import "./glitch.css";
import { cn } from "@/utils/utils";
import GlitchLetter from "./GlitchLetter";

interface IGlitchTextProps {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  text: string;
  className?: string;
  fixed?: boolean;
}

const GlitchText: React.FC<IGlitchTextProps> = ({
  tag: Tag,
  text,
  className,
  fixed = true,
}) => {
  const textArray = text.split("");

  return (
    <Tag className={cn(className, "flex ")} data-testid="glitch-text">
      {textArray.map((letter, index) => (
        <GlitchLetter
          key={index}
          letter={letter}
          fixed={fixed}
          uniqueID={`key-${index}`}
          className={className}
        />
      ))}
    </Tag>
  );
};

export default GlitchText;
