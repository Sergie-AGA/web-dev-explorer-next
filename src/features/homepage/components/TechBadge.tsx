"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { IconX } from "@tabler/icons-react";

interface TechBadgeProps {
  title: string;
  removable?: boolean;
  isLink?: boolean;
  onClick?: (() => void) | undefined;
  className?: string;
}

export default function TechBadge({
  title,
  onClick,
  className,
  removable = false,
}: TechBadgeProps) {
  return (
    <>
      <div
        className={cn(
          "cursor-pointer py-1 px-2 rounded-md bg-cyan-950 inline-flex items-center gap-2",
          className
        )}
        onClick={!removable ? onClick : undefined}
      >
        {title}
        {removable && (
          <IconX
            size="18"
            onClick={onClick}
            className="rounded-[50%] active:scale-90"
          />
        )}
      </div>
    </>
  );
}
