"use client";
import { useState } from "react";

import GlitchText from "./GlitchText";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

export default function GlitchTextContainer() {
  const [glitchText, setGlitchText] = useState(
    "This is the glitch text effect"
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGlitchText(e.target.value);
  };

  return (
    <section className="flex flex-col gap-4 py-8 max-w-[100%] w-[600px]">
      <div className="bg-neutral-900 p-4 rounded-md self-center">
        <GlitchText
          className="text-3xl flex-wrap min-h-[36px]"
          tag="h3"
          text={glitchText}
          fixed={false}
        />
      </div>
      <div className="flex flex-col justify-start gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="glitchText">Type your Glitch Text: </Label>
          <Input
            className="w-[100%]"
            type="text"
            id="glitchText"
            value={glitchText}
            onChange={handleInputChange}
            placeholder="Glitch Text"
          />
        </div>
      </div>
    </section>
  );
}
