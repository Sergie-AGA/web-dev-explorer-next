"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ShadcnUi/Sidebar";
import Link from "next/link";
import { cn } from "@/utils/utils";
import {
  IconFileDescription,
  IconChecklist,
  IconStar,
  TablerIconsProps,
} from "@tabler/icons-react";
import { TFormExampleKey } from "./formExamples";

const items: {
  title: string;
  id: TFormExampleKey;
  icon: React.ComponentType<TablerIconsProps>;
}[] = [
  { title: "Basic Form", id: "basicSurvey", icon: IconFileDescription },
  { title: "Quiz", id: "quizSurvey", icon: IconChecklist },
  { title: "Scored Survey", id: "scoredSurvey", icon: IconStar },
];

interface IFormExampleSidebarProps {
  activeForm: TFormExampleKey;
  onClick: (id: TFormExampleKey) => void;
}

export default function FormExampleSidebar({
  activeForm,
  onClick,
}: IFormExampleSidebarProps) {
  const handleClick = (id: TFormExampleKey) => {
    onClick(id);
  };

  return (
    <>
      <Sidebar className="bg-card shadow-sm">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="flex items-center gap-4 h-[40px] mb-2">
              <Link href="/">
                <img
                  src="/Logo.svg"
                  alt="Project Logo"
                  className="w-12 h-12 mr-3"
                />
              </Link>
              <h1 className="text-center text-lg font-bold">Form Examples</h1>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton asChild>
                      <div
                        className={cn(
                          "flex items-center w-full cursor-pointer",
                          { "bg-primary": activeForm == item.id }
                        )}
                        onClick={() => handleClick(item.id)}
                      >
                        <item.icon size={20} className="mr-2" />
                        {item.title}
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </>
  );
}
