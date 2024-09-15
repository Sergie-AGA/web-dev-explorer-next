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
    activeSidebar,
    changeActiveSidebar,
    activeComponent,
    changeActiveComponent,
  } = useSidebarStore((state) => ({
    activeSection: state.activeSection,
    changeActiveSection: state.changeActiveSection,
    activeSidebar: state.activeSidebar,
    changeActiveSidebar: state.changeActiveSidebar,
    activeComponent: state.activeComponent,
    changeActiveComponent: state.changeActiveComponent,
  }));

  return (
    <aside className={cn("flex h-screen shadow-xl relative", className)}>
      <section className="flex flex-col w-[180px] z-40 relative bg-cyan-900">
        {componentData.map((component) => (
          <ProjectSidebarItem
            key={component.value}
            isActive={activeSidebar === component.value}
            sectionTitle={component.title}
            handleChange={() => changeActiveSidebar(component.value)}
          >
            <component.icon size="30" className="md:hidden" />
            <component.icon size="40" className="hidden md:block" />
          </ProjectSidebarItem>
        ))}
      </section>

      <section className="w-[180px] h-full relative z-10">
        {componentData.map((section) => (
          <div
            key={section.value}
            className={cn(
              "w-[180px] flex flex-col absolute left-0 top-0 w-full h-full bg-cyan-700 shadow-md transition-transform duration-500",
              {
                "translate-x-0 z-30": activeSidebar === section.value,
                "translate-x-[-180px] z-10": activeSidebar !== section.value,
              }
            )}
          >
            {section.components.map((subComponent) => (
              <ProjectSidebarItem
                key={subComponent.value}
                isActive={activeComponent === subComponent.value}
                sectionTitle={subComponent.title}
                handleChange={() => {
                  changeActiveSection(activeSidebar);
                  changeActiveComponent(subComponent.value);
                }}
              >
                {subComponent.icon && (
                  <>
                    <subComponent.icon size="30" className="md:hidden" />
                    <subComponent.icon size="40" className="hidden md:block" />
                  </>
                )}
              </ProjectSidebarItem>
            ))}
          </div>
        ))}
      </section>
    </aside>
  );
}
