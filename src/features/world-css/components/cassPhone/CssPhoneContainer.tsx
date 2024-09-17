"use client";

import React, { useState } from "react";
import CssPhone from "./CssPhone";
import { Input } from "@/components/ui/input";
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
    <div className="flex flex-col gap-8 items-center py-8">
      <CssPhone sentMessages={messages} />

      <div className="flex gap-4 w-full max-w-[600px]">
        <div className="flex flex-col flex-1">
          <Label htmlFor="userMessage">User Message</Label>
          <Input
            type="text"
            id="userMessage"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            placeholder="Type a message..."
          />
          <button
            onClick={addUserMessage}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
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
          />
          <button
            onClick={addBotMessage}
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md"
          >
            Send Bot Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default CssPhoneContainer;
