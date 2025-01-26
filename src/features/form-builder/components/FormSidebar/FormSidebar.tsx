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
import { useDraggable, DragOverlay } from "@dnd-kit/core";
import Link from "next/link";
import { cn } from "@/utils/utils";
import {
  IconLetterT,
  IconCheckbox,
  IconCircleDot,
  IconSelector,
  IconFileDescription,
  IconCalendar,
  IconListNumbers,
} from "@tabler/icons-react";

const items = [
  { title: "Text", id: "text", icon: IconLetterT },
  { title: "Checkbox", id: "checkbox", icon: IconCheckbox },
  { title: "Radio", id: "radiogroup", icon: IconCircleDot },
  { title: "Dropdown", id: "dropdown", icon: IconSelector },
  { title: "Textarea", id: "comment", icon: IconFileDescription },
];

function DraggableItem({
  id,
  title,
  Icon,
}: {
  id: string;
  title: string;
  Icon: any;
}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const style = {
    transform: `translate3d(${transform?.x ?? 0}px, ${transform?.y ?? 0}px, 0)`,
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="flex items-center w-full font-bold cursor-grab"
    >
      <Icon size={20} className="mr-2" />
      {title}
    </div>
  );
}

export default function FormsSidebar({
  activeId,
}: {
  activeId: string | null;
}) {
  const activeItem = items.find((item) => item.id === activeId);

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
              <h1 className="text-center text-lg font-bold">Form Builder</h1>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton asChild>
                      <div className={cn("flex items-center w-full")}>
                        <DraggableItem
                          id={item.id}
                          title={item.title}
                          Icon={item.icon}
                        />
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <DragOverlay>
        {activeItem && (
          <div className="font-bold bg-card text-card-foreground p-2 rounded shadow flex items-center">
            <activeItem.icon size={20} className="mr-2" />
            {activeItem.title}
          </div>
        )}
      </DragOverlay>
    </>
  );
}
