"use client";

import { cn } from "@/utils/utils";

interface IModalSidebarItemProps {
  children: React.ReactNode;
  sectionTitle: string;
  isActive: boolean;
  isSubSidebar?: boolean;
  elID: string;
  handleChange: () => void;
}

export default function ProjectSidebarItem({
  children,
  sectionTitle,
  isActive,
  isSubSidebar = false,
  elID,
  handleChange,
}: IModalSidebarItemProps) {
  const isSmallText = sectionTitle.length > 8;

  return (
    <button
      onClick={() => {
        handleChange();
      }}
      className={cn(
        "flex items-center gap-2 uppercase px-1 md:px-2 py-2 duration-300 bg-transparent hover:bg-cyan-800",
        { "bg-cyan-800 pointer-events-none": isActive },
        { "pr-4 md:pr-8": !isSubSidebar },
        { "flex-col items-center shadow-sm": isSubSidebar }
      )}
      data-testid={`sidebar-${elID}`}
    >
      <div
        className={cn("translate-x-0 group-hover:translate-y-0 duration-300", {
          "translate-x-4": isActive && !isSubSidebar,
          "scale-110": isActive && isSubSidebar,
        })}
      >
        {children}
      </div>
      <span
        className={cn(
          "translate-x-0 text-2xs md:text-sm duration-300 uppercase font-bold",
          {
            "translate-x-4": isActive && !isSubSidebar,
            "md:text-xs": isSmallText,
            "text-xs": isSubSidebar,
          }
        )}
      >
        {sectionTitle}
      </span>
    </button>
  );
}
