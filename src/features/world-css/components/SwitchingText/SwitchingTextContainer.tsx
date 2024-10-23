"use client";

import { useState } from "react";
import { Input } from "@/components/Shadcn-ui/input";
import { Button } from "@/components/Shadcn-ui/button";
import { IconX } from "@tabler/icons-react";
import SwitchingText from "./SwitchingText";
import { cn } from "@/utils/utils";

export default function NeonTextContainer() {
  const [messages, setMessages] = useState<string[]>([
    "This is the Switching Text Effect",
    "Add or remove items in the input field",
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() !== "" && messages.length < 5) {
      setMessages((prevMessages) => [...prevMessages, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleRemoveMessage = (index: number) => {
    setMessages((prevMessages) => prevMessages.filter((_, i) => i !== index));
  };

  return (
    <section className="flex flex-col gap-4 py-8 max-w-[100%] w-[600px]">
      <div className="p-4 rounded-md self-center w-[100%] ">
        {messages.length > 0 ? (
          <SwitchingText key={messages.join("")}>
            {messages.map((message, index) => (
              <p key={index}>{message}</p>
            ))}
          </SwitchingText>
        ) : (
          <p className="min-h-[24px]"></p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label>
          Add up to 5 messages:
          {inputValue.length == 50 && (
            <span className="ml-2 text-red-400">50 characters limit</span>
          )}
        </label>
        <form
          className={cn("flex gap-2", {
            "pointer-events-none opacity-50": messages.length == 5,
          })}
          onSubmit={handleSendMessage}
        >
          <Input
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Add a new message"
            maxLength={50}
          />
          <Button variant="secondary" type="submit">
            Add
          </Button>
        </form>
      </div>
      <ul className="mt-4 flex flex-col gap-2">
        <p>Message List:</p>
        {messages.length > 0
          ? messages.map((message, index) => (
              <li
                key={index}
                className="flex items-center justify-between py-1 px-2 bg-cyan-900 rounded-md"
              >
                <span>{message}</span>
                <IconX
                  className="cursor-pointer text-white"
                  onClick={() => handleRemoveMessage(index)}
                />
              </li>
            ))
          : "No items"}
      </ul>
    </section>
  );
}
