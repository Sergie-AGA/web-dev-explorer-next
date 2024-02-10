import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface TechBadgeProps {
  title: string;
  onClick?: () => void | undefined;
  className?: string;
}

export default function TechBadge({
  title,
  onClick,
  className,
}: TechBadgeProps) {
  return (
    <Link
      href={`?tech=${title}`}
      className={cn(
        "cursor-pointer py-1 px-2 rounded-md bg-cyan-950",
        className
      )}
      onClick={onClick}
    >
      {title}
    </Link>
  );
}
