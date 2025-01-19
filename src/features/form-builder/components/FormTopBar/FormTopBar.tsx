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
              <>
                <h3 className="text-xl text-center">Form Examples Info</h3>
                <ul>
                  <li className="list-disc list-inside">
                    Select an example form to see how Survey JS handles
                    different types of data
                  </li>
                  <li className="list-disc list-inside">
                    Quizzes rely on a property defining an alternative to be the
                    correct one
                  </li>
                  <li className="list-disc list-inside">
                    Scored Surveys attribute a score to each alternative and
                    rely on custom logic to define the final score
                  </li>
                </ul>
              </>
            ) : (
              <>
                <h3 className="text-xl text-center">Form Builder Info</h3>
                <ul>
                  <li className="list-disc list-inside">
                    Drag and Drop items on the left to add a new element to the
                    form
                  </li>
                  <li className="list-disc list-inside">
                    Click on the title of an element to edit it
                  </li>
                  <li className="list-disc list-inside">
                    Press "Complete" to view the JSON being used in the form,
                    which can be used by developers to generate a similar form
                    with Survey JS
                  </li>
                  <li className="list-disc list-inside">
                    This builder only allows limited implementations of Survey
                    JS not covering all of its features
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
