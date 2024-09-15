"use client";

import ProjectSidebarItem from "./ProjectSidebarItem";
import { cn } from "@/utils/utils";
import { componentData } from "../componentData";
import {
  TComponentType,
  TSectionType,
  useSidebarStore,
} from "../../store/useUIChange";

interface IProjectSidebar {
  className?: string;
}

export default function ProjectSidebar({ className }: IProjectSidebar) {
  const {
    activeSection,
    changeActiveSection,
    activeComponent,
    changeActiveComponent,
  } = useSidebarStore((state) => {
    return {
      activeSection: state.activeSection,
      changeActiveSection: state.changeActiveSection,
      activeComponent: state.activeComponent,
      changeActiveComponent: state.changeActiveComponent,
    };
  });

  return (
    <aside
      className={cn(
        "flex h-view h-screen bg-cyan-900 relative z-10 shadow-xl relative z-10",
        className
      )}
    >
      <section className="flex flex-col w-[180px]">
        {componentData.map((component) => (
          <ProjectSidebarItem
            key={component.value}
            isActive={activeSection == component.value}
            sectionTitle={component.title}
            handleChange={() => changeActiveSection(component.value)}
          >
            <component.icon size="30" className="md:hidden" />
            <component.icon size="40" className="hidden md:block" />
          </ProjectSidebarItem>
        ))}
      </section>

      <section className="flex flex-col bg-cyan-700 shadow-md w-[180px]">
        {componentData
          .filter((section) => section.value === activeSection)
          .map((section) =>
            section.components.map((subComponent) => (
              <ProjectSidebarItem
                key={subComponent.value}
                isActive={activeComponent === subComponent.value}
                sectionTitle={subComponent.title}
                handleChange={() => changeActiveComponent(subComponent.value)}
              >
                {subComponent.icon && (
                  <>
                    <subComponent.icon size="30" className="md:hidden" />
                    <subComponent.icon size="40" className="hidden md:block" />
                  </>
                )}
              </ProjectSidebarItem>
            ))
          )}
      </section>
    </aside>
  );
}
