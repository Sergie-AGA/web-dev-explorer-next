"use client";

import { SidebarTrigger } from "@/components/ShadcnUi/Sidebar";
import { cn } from "@/utils/utils";
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
    </nav>
  );
}
