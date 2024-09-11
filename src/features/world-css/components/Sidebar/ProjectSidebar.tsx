"use client";

import ProjectSidebarItem from "./ProjectSidebarItem";
import { cn } from "@/utils/utils";
import { componentData } from "../componentData";

interface IProjectSidebar {
  className?: string;
}

export default function ProjectSidebar({ className }: IProjectSidebar) {
  return (
    <aside
      className={cn(
        "flex flex-col h-view h-screen bg-cyan-900 relative z-10 shadow-xl",
        className
      )}
    >
      {componentData.map((component) => {
        return (
          <ProjectSidebarItem key={component.value} section={component.title}>
            <component.icon size="30" className="md:hidden" />
            <component.icon size="40" className="hidden md:block" />
          </ProjectSidebarItem>
        );
      })}
    </aside>
  );
}
