import { cn } from "@/lib/utils";

interface IBlurredTextProps {
  text: string;
  from?: "left" | "right";
  className?: string;
}

export default function BlurredText({
  text,
  from = "left",
  className,
}: IBlurredTextProps) {
  const origin =
    from == "left" ? "left-0 right-[unset]" : "left-[unset] right-0";

  return (
    <div>
      <span className="h-[100%] relative">
        {text}
        <span
          className={cn(
            "absolute top-0 left-0 w-[100%] h-[100%] blur-[2px] bg-white",
            origin,
            className
          )}
        ></span>
      </span>
    </div>
  );
}
