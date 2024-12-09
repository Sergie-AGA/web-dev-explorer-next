"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ShadcnUi/Tabs";
import { cn } from "@/utils/utils";

interface ITabsProps {
  tabData: ITabs[];
  initialTab?: string;
  children: React.ReactNode;
  className?: string;
}

interface ITabs {
  value: string;
  title: string;
}

/**
 * SimpleTabs provides a tabbed interface allowing users to switch between different content sections. Each tab is customizable, with optional initial selection and styling.
 *
 * ```javascript
 * import SimpleTabs from "@/components/Tabs/SimpleTabs";
 *
 * <SimpleTabs
 *   tabData={[
 *     { value: "tab1", title: "Tab 1" },
 *     { value: "tab2", title: "Tab 2" }
 *   ]}
 *   initialTab="tab1"
 *   className="custom-tabs"
 * >
 *   <div>Content for Tab 1</div>
 *   <div>Content for Tab 2</div>
 * </SimpleTabs>
 * ```
 */
export default function SimpleTabs({
  tabData,
  initialTab,
  children,
  className,
}: ITabsProps) {
  return (
    <>
      {tabData?.length && (
        <Tabs
          className="flex flex-col items-center"
          defaultValue={initialTab || tabData[0].value}
        >
          <TabsList className={cn("duration-300", className)}>
            {tabData.map((tab, index) => (
              <TabsTrigger
                className="text-xs sm:text-sm py-0.5 sm:py-1 px-2 sm:px-3"
                key={index}
                value={tab.value}
                data-testid={`tab-test-${index}`}
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
