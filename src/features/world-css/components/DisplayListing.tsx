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

  return (
    <section>
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {data.map((item) => {
          return (
            <Button
              onClick={() => handleActiveComponent(item.value)}
              variant="secondary"
              className={cn({
                "bg-red-900": activeComponent === item.value,
              })}
              key={item.value}
            >
              {item.title}
            </Button>
          );
        })}
      </div>
      <div></div>
    </section>
  );
}
