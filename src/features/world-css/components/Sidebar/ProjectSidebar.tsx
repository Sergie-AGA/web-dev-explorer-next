"use client";

import ProjectSidebarItem from "./ProjectSidebarItem";
import { cn } from "@/utils/utils";
import { componentData } from "../componentData";
import { useSidebarStore } from "../../store/useUIChange";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface IProjectSidebar {
  className?: string;
}

export default function ProjectSidebar({ className }: IProjectSidebar) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(true);

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

  function handleSidebarChange() {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  }

  return (
    <aside
      className={cn(
        "flex flex-col h-screen shadow-xl fixed lg:relative left-0 z-20 translate-x-[-100%] lg:translate-x-0 duration-500",
        { "translate-x-0": isMobileSidebarOpen },
        className
      )}
    >
      <div className="flex justify-between lg:justify-center items-center gap-4 px-2 py-1 bg-cyan-900 shadow-lg z-50">
        <Link href="/">
          <Image
            src="/Logo.svg"
            width={20}
            height={20}
            alt="Project Logo"
            className="w-12 h-12 mr-3"
          />
        </Link>
        <IconX
          size="22"
          onClick={handleSidebarChange}
          className={cn(
            "lg:hidden cursor-pointer z-40 hover:bg-cyan-800 rounded-full",
            {
              "rotate-[180deg]": isMobileSidebarOpen,
            }
          )}
        />
        <IconMenu2
          size="30"
          onClick={handleSidebarChange}
          className={cn(
            "lg:hidden fixed top-4 right-0 cursor-pointer z-40 bg-cyan-900 hover:bg-cyan-800 rounded-full duration-300 translate-x-[40px] p-1",
            {
              "opacity-0 translate-x-[-20px]": isMobileSidebarOpen,
            }
          )}
        />
      </div>
      <div className="flex grow">
        <section className="flex flex-col w-[180px] z-40 relative bg-cyan-900 shadow-lg">
          {componentData.map((component) => (
            <ProjectSidebarItem
              key={component.value}
              isActive={activeSidebar === component.value}
              sectionTitle={component.title}
              handleChange={() => changeActiveSidebar(component.value)}
            >
              <component.icon size="30" className="md:hidden" />
              <component.icon size="34" className="hidden md:block" />
            </ProjectSidebarItem>
          ))}
        </section>

        <section className="w-[100px] h-full relative z-10">
          {componentData.map((section) => (
            <div
              key={section.value}
              className={cn(
                "w-[180px] flex flex-col absolute left-0 top-0 w-full h-full bg-cyan-700 shadow-md transition-transform duration-500",
                {
                  "translate-x-0 z-30": activeSidebar === section.value,
                  "translate-x-[-100px] z-10": activeSidebar !== section.value,
                }
              )}
            >
              {section.components.map((subComponent) => (
                <ProjectSidebarItem
                  key={subComponent.value}
                  isActive={activeComponent === subComponent.value}
                  sectionTitle={subComponent.title}
                  isSubSidebar={true}
                  handleChange={() => {
                    changeActiveSection(activeSidebar);
                    changeActiveComponent(subComponent.value);
                  }}
                >
                  {subComponent.icon && (
                    <>
                      <subComponent.icon size="30" className="md:hidden" />
                      <subComponent.icon
                        size="34"
                        className="hidden md:block"
                      />
                    </>
                  )}
                </ProjectSidebarItem>
              ))}
            </div>
          ))}
        </section>
      </div>
    </aside>
  );
}
