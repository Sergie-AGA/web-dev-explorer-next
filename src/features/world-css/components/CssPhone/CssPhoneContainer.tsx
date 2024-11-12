"use client";

import React, { useState } from "react";
import CssPhone from "./CssPhone";
import { Input } from "@/components/ShadcnUi/Input";
import { Label } from "@radix-ui/react-label";

const CssPhoneContainer = () => {
  const [userMessage, setUserMessage] = useState("");
  const [botMessage, setBotMessage] = useState("");
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>(
    []
  );

  const addUserMessage = () => {
    if (userMessage.trim()) {
      setMessages([...messages, { text: userMessage, sender: "user" }]);
      setUserMessage("");
    }
  };

  const addBotMessage = () => {
    if (botMessage.trim()) {
      setMessages([...messages, { text: botMessage, sender: "bot" }]);
      setBotMessage("");
    }
  };

  return (
    <section className="flex flex-col gap-8 items-center pt-8 pb-16">
      <CssPhone sentMessages={messages} />

      <div className="flex flex-col lg:flex-row gap-4 w-full max-w-[600px]">
        <div className="flex flex-col flex-1">
          <Label htmlFor="userMessage">User Message</Label>
          <Input
            type="text"
            id="userMessage"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            placeholder="Type a message..."
            data-testid="user-input"
          />
          <button
            onClick={addUserMessage}
            className="mt-2 px-4 py-2 bg-cyan-700 text-white rounded-md"
            data-testid="user-button"
          >
            Send User Message
          </button>
        </div>

        <div className="flex flex-col flex-1">
          <Label htmlFor="botMessage">Bot Message</Label>
          <Input
            type="text"
            id="botMessage"
            value={botMessage}
            onChange={(e) => setBotMessage(e.target.value)}
            placeholder="Type a message..."
            data-testid="bot-input"
          />
          <button
            onClick={addBotMessage}
            className="mt-2 px-4 py-2 bg-teal-700 text-white rounded-md"
            data-testid="bot-button"
          >
            Send Bot Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default CssPhoneContainer;
