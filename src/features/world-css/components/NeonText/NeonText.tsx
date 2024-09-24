import { cn } from "@/utils/utils";
import "./neon.css";

interface INeonTitleProps {
  text: string;
  flickerEffect?: boolean;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
}

export default function NeonTitle({
  tag = "h1",
  text,
  flickerEffect = false,
}: INeonTitleProps) {
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
