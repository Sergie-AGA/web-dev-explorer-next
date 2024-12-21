"use client";

import { useState } from "react";
import { cn } from "@/utils/utils";
import { Button } from "../ShadcnUi/Button";

interface ITabsProps {
  tabData: ITab[];
  initialTab?: string;
}

interface ITab {
  value: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

export default function ButtonTabs({ tabData, initialTab }: ITabsProps) {
  const [activeTab, setActiveTab] = useState(initialTab || tabData[0].value);

  const handleButtonClick = (value: string) => {
    setActiveTab(value);
  };

  return (
    <>
      {tabData?.length && (
        <div>
          <div className="flex gap-4 duration-300">
            {tabData.map((tab) => (
              <Button
                variant={
                  activeTab == tab.value ? "secondaryActive" : "secondary"
                }
                className={cn(
                  "text-xs sm:text-sm py-0.5 sm:py-1 px-2 sm:px-3 flex items-center gap-2"
                )}
                key={tab.value}
                onClick={() => handleButtonClick(tab.value)}
              >
                {tab.icon}
                {tab.title}
              </Button>
            ))}
          </div>
          {activeTab}
          {tabData.map((tab) => (
            <div
              className="content-section py-4"
              key={tab.value}
              style={{ display: activeTab === tab.value ? "block" : "none" }}
            >
              {tab.content}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
