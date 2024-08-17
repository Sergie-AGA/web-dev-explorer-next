"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/utils";

interface IDisplayListing {
  data: IDisplayItem[];
}

interface IDisplayItem {
  title: string;
  value: string;
  component: React.ComponentType;
}

export default function DisplayListing({ data }: IDisplayListing) {
  const [activeComponent, setActiveComponent] = useState(data[0].value);

  function handleActiveComponent(item: IDisplayItem["value"]) {
    setActiveComponent(item);
  }

  const ActiveComponent = data.find(
    (item) => item.value === activeComponent
  )?.component;

  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {data.map((item) => {
          return (
            <Button
              onClick={() => handleActiveComponent(item.value)}
              variant="custom"
              className={cn("bg-neutral-800 hover:bg-neutral-900", {
                "bg-neutral-900": activeComponent === item.value,
              })}
              key={item.value}
            >
              {item.title}
            </Button>
          );
        })}
      </div>
      <div className="bg-neutral-950 py-4 px-8 rounded-lg">
        {ActiveComponent && <ActiveComponent />}
      </div>
    </section>
  );
}
