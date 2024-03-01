"use client";
import { useState } from "react";

import { IconChevronRight, IconEdit, IconTrash } from "@tabler/icons-react";

interface ITaskItemProps {
  title: string;
  date: string;
}

export default function TaskItem({ title, date }: ITaskItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleAccordion() {}

  return (
    <li>
      <div className="py-2 px-4 flex gap-4 items-center bg-neutral-900 rounded overflow-hidden justify-between cursor-pointer">
        <div className="flex gap-4 items-center">
          <IconChevronRight className="cursor-pointer" />
          <div>
            <h3 className="text-[16px] font-bold mb-1 leading-4">{title}</h3>
            <p className="text-sm text-neutral-400">{date}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <IconEdit className="cursor-pointer" />
          <IconTrash className="cursor-pointer" />
        </div>
      </div>
    </li>
  );
}
