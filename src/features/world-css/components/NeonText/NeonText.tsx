import { cn } from "@/utils/utils";
import "./neon.css";

interface INeonTextProps {
  text: string;
  flickerEffect?: boolean;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
}

/**
 * Renders text with a neon effect, optionally adding a flicker effect. The component tag can be customized for various headings or paragraph text.
 *
 * ```javascript
 * import NeonText from "@/features/world-css/components/NeonText/NeonText";
 *
 * <NeonText tag="h1" text="Neon Glowing Text" flickerEffect={true} />
 * ```
 */

export default function NeonText({
  tag = "h1",
  text,
  flickerEffect = false,
}: INeonTextProps) {
  const Tag = tag;

  return (
    <Tag
      className={cn("neonText p-3 rounded text-center", {
        "neon-flicker": flickerEffect,
      })}
    >
      {text}
    </Tag>
  );
}
