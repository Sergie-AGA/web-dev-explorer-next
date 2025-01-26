// FormWrapper.tsx
"use client";

import { SidebarProvider } from "@/components/ShadcnUi/Sidebar";
import FormSidebar from "../FormSidebar/FormSidebar";
import FormArea from "../FormArea/FormArea";
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useState } from "react";
import { useFormBuilderStore } from "../../store/formStore";
import FormTopBar from "../FormTopBar/FormTopBar";

export default function FormWrapper() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const addElement = useFormBuilderStore((state) => state.addElement);

  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const handleDrop = (event: any) => {
    if (event.over?.id === "form-area" && activeId) {
      const randomDate = Date.now();
      const id = `${activeId}-${randomDate}`;

      const element = {
        id,
        type: activeId,
        name: id,
        title: `New ${activeId.charAt(0).toUpperCase() + activeId.slice(1)}`,
      };
      addElement(element);
    }
    setActiveId(null);
  };

  return (
    <div className="flex">
      <SidebarProvider>
        <DndContext
          sensors={sensors}
          onDragStart={(event) => setActiveId(event.active.id as string)}
          onDragEnd={handleDrop}
          onDragCancel={() => setActiveId(null)}
        >
          <FormSidebar activeId={activeId} />
          <main className="flex-1 min-h-screen flex flex-col relative overflow-hidden">
            <FormTopBar />
            <FormArea />
          </main>
        </DndContext>
      </SidebarProvider>
    </div>
  );
}
