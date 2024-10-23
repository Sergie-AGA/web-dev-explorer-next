import React from "react";
import {
  ToggleGroup as TG,
  ToggleGroupItem,
} from "@/components/Shadcn-ui/toggle-group";

interface IToggleGroupProps {
  onClick: (value: string) => void;
  values: string[];
}

export default function ToggleGroup({ onClick, values }: IToggleGroupProps) {
  const handleItemClick = (value: string) => {
    onClick(value);
  };

  return (
    <TG type="single">
      {values.map((value) => (
        <ToggleGroupItem
          key={value}
          value={value}
          onClick={() => handleItemClick(value)}
        >
          {value}
        </ToggleGroupItem>
      ))}
    </TG>
  );
}
