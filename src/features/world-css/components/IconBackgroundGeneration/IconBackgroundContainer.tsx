"use client";

import { useState } from "react";
import IconBackgroundGeneration from "./IconBackgroundGeneration";
import { Slider } from "@/components/Shadcn-ui/slider";

export default function IconBackgroundContainer() {
  const [size, setSize] = useState(20);

  const handleSliderChange = (value: number[]) => {
    setSize(value[0]);
  };

  return (
    <section>
      <div className="flex flex-col gap-4">
        <h3 className="h5 mb-4">Icon Background Generator</h3>
        <span>Icon Size: {size}</span>
        <Slider
          defaultValue={[size]}
          max={100}
          step={1}
          onValueChange={handleSliderChange}
        />
      </div>
      <IconBackgroundGeneration size={size} />
    </section>
  );
}
