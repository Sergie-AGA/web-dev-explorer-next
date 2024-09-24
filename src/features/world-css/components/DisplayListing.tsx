"use client";

import { componentData } from "@/features/world-css/components/componentData";
import { useSidebarStore } from "../store/useUIChange";

export default function DisplayListing() {
  const { activeSection, activeComponent } = useSidebarStore((state) => ({
    activeSection: state.activeSection,
    activeComponent: state.activeComponent,
  }));

  const section = componentData.find((sec) => sec.value === activeSection);

  const ComponentToRender =
    section?.components.find((comp) => comp.value === activeComponent)
      ?.component || null;

  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col items-center lg:p-4">
        {ComponentToRender ? (
          <ComponentToRender />
        ) : (
          <p>No component available</p>
        )}
      </div>
    </section>
  );
}
