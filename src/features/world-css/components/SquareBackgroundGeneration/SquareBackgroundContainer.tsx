"use client";

import { useState } from "react";
import SquareBackgroundGeneration from "./SquareBackgroundGeneration";
import { Slider } from "@/components/ShadcnUi/Slider";
import { Checkbox } from "@/components/ShadcnUi/Checkbox";
import { cn } from "@/utils/utils";

export default function SquareBackgroundContainer() {
  const [isRandomSize, setIsRandomSize] = useState(true);
  const [size, setSize] = useState(50);

  const handleSliderChange = (value: number[]) => {
    setSize(value[0]);
  };

  const handleCheckboxChange = (value: boolean) => {
    setIsRandomSize(value);
  };

  return (
    <section>
      <div className="flex flex-col gap-4">
        <h3 className="h5 mb-4">Icon Background Generator</h3>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            checked={isRandomSize}
            onCheckedChange={handleCheckboxChange}
          />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Random Size
          </label>
        </div>
        <div
          className={cn("flex flex-col gap-4", {
            "opacity-50 pointer-events-none": isRandomSize,
          })}
        >
          <span>Square Size: {size}</span>
          <Slider
            defaultValue={[size]}
            max={165}
            min={35}
            step={1}
            onValueChange={handleSliderChange}
          />
        </div>
      </div>
      <SquareBackgroundGeneration size={size} isRandomSize={isRandomSize} />
    </section>
  );
}
