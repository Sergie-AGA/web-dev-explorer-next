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

/**
 * The GlitchText component renders text with a glitch effect, allowing customization of the text tag, glitch behavior, and additional styles. Each letter is rendered individually to achieve the glitch effect.
 *
 * ```javascript
 * import GlitchText from "@/features/world-css/components/GlitchText/GlitchText";
 *
 * <GlitchText tag="h1" text="Glitchy Text" fixed={true} className="custom-class" />
 * ```
 */

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
