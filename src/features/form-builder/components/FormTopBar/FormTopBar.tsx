"use client";

import { Button } from "@/components/ShadcnUi/Button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ShadcnUi/Popover";
import { SidebarTrigger } from "@/components/ShadcnUi/Sidebar";
import { cn } from "@/utils/utils";
import { IconFileInfo } from "@tabler/icons-react";
import * as React from "react";

export default function FormTopBar({ className }: { className?: string }) {
  return (
    <nav
      className={cn(
        "p-2 flex gap-4 justify-between items-center bg-sidebar shadow-xs",
        className
      )}
    >
      <SidebarTrigger />
      <div>
        <Popover>
          <PopoverTrigger>
            <Button size="icon">
              <IconFileInfo />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[500px] max-w-[90vw]">
            <h3 className="text-xl text-center">Info</h3>
            <ul>
              <li className="list-disc list-inside">
                Drag and Drop items on the left to add a new element to the form
              </li>
              <li className="list-disc list-inside">
                Click on an element to edit it
              </li>
              <li className="list-disc list-inside">
                Press "Complete" to view the JSON being used in the form, which
                can be used by developers to generate a similar form with Survey
                JS
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
}
