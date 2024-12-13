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
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

export default function FormTopBar({ className }: { className?: string }) {
  const pathname = usePathname();

  const isExamplePage = pathname.includes("form-examples");

  return (
    <nav
      className={cn(
        "p-2 flex gap-4 justify-between items-center bg-sidebar shadow-xs",
        className
      )}
    >
      <SidebarTrigger />
      <div className="flex gap-4 items-center">
        <Button asChild>
          <Link href={isExamplePage ? "./form-builder" : "./form-examples"}>
            {isExamplePage ? "Form Builder" : "Form Examples"}
          </Link>
        </Button>
        <Popover>
          <PopoverTrigger>
            <Button asChild size="icon">
              <IconFileInfo className="p-1" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[500px] max-w-[90vw]">
            {isExamplePage ? (
              "hey"
            ) : (
              <>
                <h3 className="text-xl text-center">Form Builder Info</h3>
                <ul>
                  <li className="list-disc list-inside">
                    Drag and Drop items on the left to add a new element to the
                    form
                  </li>
                  <li className="list-disc list-inside">
                    Click on an element to edit it
                  </li>
                  <li className="list-disc list-inside">
                    Press "Complete" to view the JSON being used in the form,
                    which can be used by developers to generate a similar form
                    with Survey JS
                  </li>
                </ul>
              </>
            )}
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
}
