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
} from "@tabler/icons-react";

const items = [
  { title: "Basic Form", id: "basic-form", icon: IconFileDescription },
  { title: "Quiz", id: "quiz-survey", icon: IconChecklist },
  { title: "Scored Survey", id: "scored-survey", icon: IconStar },
];

export default function FormExampleSidebar() {
  const handleClick = (id: string) => {
    console.log(`Clicked on ${id}`);
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
                          "flex items-center w-full cursor-pointer"
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
