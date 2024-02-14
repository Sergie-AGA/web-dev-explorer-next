"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useURLState } from "@/hooks/useURLState";

interface TechBadgeProps {
  title: string;
  isLink?: boolean;
  onClick?: () => void | undefined;
  className?: string;
}

export default function TechBadge({
  title,
  onClick,
  className,
}: TechBadgeProps) {
  function handleNavigate() {
    // router.push();
  }

  return (
    <>
      <div
        className={cn(
          "cursor-pointer py-1 px-2 rounded-md bg-cyan-950",
          className
        )}
        onClick={onClick || handleNavigate}
      >
        {title}
      </div>
    </>
  );
}
