import { cn } from "@/utils/utils";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { useState } from "react";

interface IBlurredTextProps {
  text: string;
  from?: "left" | "right";
  className?: string;
  hasToggle?: Boolean;
}

export default function BlurredText({
  text,
  from = "left",
  hasToggle = false,
  className,
}: IBlurredTextProps) {
  const origin =
    from == "left" ? "left-0 right-[unset]" : "left-[unset] right-0";
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible((prev) => !prev);
  }

  return (
    <div className="flex gap-4">
      <span className="h-[100%] relative">
        {text}
        <span
          className={cn(
            "absolute top-0 left-0 w-[100%] h-[100%] blur-[2px] bg-white",
            origin,
            className,
            { "bg-transparent": isVisible }
          )}
        ></span>
      </span>
      {hasToggle && (
        <>
          <button onClick={handleClick}>
            {isVisible ? <IconEye /> : <IconEyeOff />}
          </button>
        </>
      )}
    </div>
  );
}
