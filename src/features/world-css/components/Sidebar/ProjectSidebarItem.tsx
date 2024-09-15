"use client";

import { cn } from "@/utils/utils";
import { TComponentType, TSectionType } from "../../store/useUIChange";

interface IModalSidebarItemProps {
  children: React.ReactNode;
  sectionTitle: string;
  isActive: boolean;
  handleChange: () => void;
}

export default function ProjectSidebarItem({
  children,
  sectionTitle,
  isActive,
  handleChange,
}: IModalSidebarItemProps) {
  return (
    <button
      onClick={() => {
        handleChange();
      }}
      className={cn(
        "flex items-center gap-2 uppercase px-1 md:px-2 py-2 duration-300 bg-transparent hover:bg-cyan-800 pr-4 md:pr-8",
        { "bg-cyan-800 pointer-events-none": isActive }
      )}
    >
      <div
        className={cn("translate-x-0 group-hover:translate-y-0 duration-300", {
          "translate-x-4": isActive,
        })}
      >
        {children}
      </div>
      <span
        className={cn(
          "translate-x-0 text-2xs md:text-sm duration-300 uppercase font-bold",
          {
            "translate-x-4": isActive,
          }
        )}
      >
        {sectionTitle}
      </span>
    </button>
  );
}
