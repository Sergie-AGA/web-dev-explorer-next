"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ITabsProps {
  tabData: ITabs[];
  initialTab?: string;
  children: React.ReactNode;
}

interface ITabs {
  value: string;
  title: string;
}

export default function SimpleTabs({
  tabData,
  initialTab,
  children,
}: ITabsProps) {
  return (
    <>
      {tabData?.length && (
        <Tabs defaultValue={initialTab || tabData[0].value}>
          <TabsList className="duration-300">
            {tabData.map((tab, index) => (
              <TabsTrigger
                className="text-xs sm:text-sm py-0.5 sm:py-1 px-2 sm:px-3"
                key={index}
                value={tab.value}
              >
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabData.map((tab, index) => (
            <TabsContent className="py-4" key={tab.value} value={tab.value}>
              {Array.isArray(children) && children[index]}
            </TabsContent>
          ))}
        </Tabs>
      )}
    </>
  );
}
