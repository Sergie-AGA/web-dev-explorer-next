import { cn } from "@/utils/utils";

interface IGlitchLetterProps {
  letter: string;
  className?: string;
  uniqueID: string;
  fixed?: boolean;
}

export default function GlitchLetter({
  letter,
  className,
  uniqueID,
  fixed = true,
}: IGlitchLetterProps) {
  const addGlitch = () => {
    const element = document.querySelector(`#${uniqueID}`);
    if (element) {
      element.classList.toggle("glitch");
    }
    const randomTime = Math.floor(Math.random() * 2000) + 1000;
    setTimeout(removeGlitch, randomTime);
  };
  const removeGlitch = () => {
    const element = document.querySelector(`#${uniqueID}`);
    if (element) {
      element.classList.toggle("glitch");
    }
    const randomTime = Math.floor(Math.random() * 8000) + 4000;
    setTimeout(addGlitch, randomTime);
  };

  if (!fixed && typeof window !== "undefined") {
    addGlitch();
  }

  return (
    <div id={uniqueID} className="glitch-container min-w-[10px]">
      <span
        aria-hidden="true"
        className={cn(className, "font-mono let1 shadow-letter")}
      >
        {letter}
      </span>
      <span className={cn(className, "font-mono")}>{letter}</span>
      <span
        aria-hidden="true"
        className={cn(className, "font-mono let2 shadow-letter")}
      >
        {letter}
      </span>
    </div>
  );
}
