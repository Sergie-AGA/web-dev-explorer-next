"use client";
import { useState } from "react";

import { Input } from "@/components/ShadcnUi/Input";
import { Label } from "@radix-ui/react-label";
import NeonText from "./NeonText";
import { Switch } from "@/components/ShadcnUi/Switch";

export default function NeonTextContainer() {
  const [neonText, setNeonText] = useState("This is the neon text effect");
  const [isFlickering, setIsFlickering] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNeonText(e.target.value);
  };

  function handleToggleFlicker() {
    setIsFlickering(!isFlickering);
  }

  return (
    <section className="flex flex-col gap-4 py-8 max-w-[100%] w-[600px]">
      <div className="p-4 rounded-md self-center">
        <NeonText tag="h3" text={neonText} flickerEffect={isFlickering} />
      </div>
      <div className="flex flex-col justify-start gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="neonText">Type your Neon Text: </Label>
          <Input
            className="w-[100%]"
            type="text"
            id="neonText"
            value={neonText}
            onChange={handleInputChange}
            placeholder="Neon Text"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id="flicker-effect"
            checked={isFlickering}
            onCheckedChange={handleToggleFlicker}
          />
          <Label htmlFor="flicker-effect">Flicker effect</Label>
        </div>
      </div>
    </section>
  );
}
