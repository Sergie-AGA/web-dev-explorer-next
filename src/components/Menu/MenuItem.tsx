import { cn } from "@/lib/utils";
import { useState } from "react";

interface IItemProps {
  handleClick?: () => void;
  children: React.ReactNode;
  text?: string;
  className?: string;
}

export default function MenuItem({
  handleClick,
  text,
  className,
  children,
}: IItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  function handleHover(value: boolean) {
    setIsHovered(value);
  }

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      className={cn(
        " flex  cursor-pointer bg-cyan-600 hover:bg-cyan-700 outline-none group",
        className
      )}
    >
      <div className="w-11 h-11 flex flex-col items-center justify-center  duration-200">
        <div
          className={cn(
            "active:scale-75 duration-200 group-active:scale-75",
            { "translate-y-2": text },
            { "translate-y-0": isHovered }
          )}
        >
          {children}
        </div>
        <span
          className={cn("text-[10px] leading-4 opacity-0 duration-100", {
            "opacity-1": isHovered,
          })}
        >
          {text}
        </span>
      </div>
    </button>
  );
}
