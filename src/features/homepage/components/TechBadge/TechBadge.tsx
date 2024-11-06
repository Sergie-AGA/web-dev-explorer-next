import React from "react";
import { cn } from "@/utils/utils";
import { IconX } from "@tabler/icons-react";

interface TechBadgeProps {
  title: string;
  removable?: boolean;
  isLink?: boolean;
  onClick?: (() => void) | undefined;
  className?: string;
}

const TechBadge = React.forwardRef<HTMLSpanElement, TechBadgeProps>(
  ({ title, onClick, className, removable = false, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "cursor-pointer py-1 px-2 rounded-md bg-cyan-950 inline-flex items-center gap-2",
          className
        )}
        onClick={!removable ? onClick : undefined}
        {...props}
      >
        {title}
        {removable && (
          <IconX
            size="18"
            onClick={onClick}
            data-testid="remove-icon"
            className="rounded-[50%] active:scale-90"
          />
        )}
      </span>
    );
  }
);

TechBadge.displayName = "TechBadge";

export default TechBadge;
