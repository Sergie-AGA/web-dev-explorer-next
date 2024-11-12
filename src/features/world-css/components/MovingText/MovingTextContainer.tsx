"use client";

import { useState } from "react";
import { Input } from "@/components/ShadcnUi/Input";
import { Label } from "@radix-ui/react-label";
import MovingText from "./MovingText";

export default function NeonTextContainer() {
  const [text, setText] = useState("This is the Moving Text effect");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <section className="flex flex-col gap-4 py-8 max-w-[100%] w-[600px]">
      <div className="p-4 rounded-md self-center" data-testid="moving-text">
        <MovingText text={text} />
      </div>
      <div className="flex flex-col justify-start gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="neonText">
            Type your Text and hover/tap over the text above to move it away:
          </Label>
          <Input
            className="w-[100%]"
            type="text"
            id="neonText"
            value={text}
            onChange={handleInputChange}
            placeholder="Neon Text"
          />
        </div>
      </div>
    </section>
  );
}
