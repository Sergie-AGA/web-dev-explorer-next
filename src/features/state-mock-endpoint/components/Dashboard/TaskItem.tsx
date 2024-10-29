"use client";
import { useState } from "react";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { cn } from "@/utils/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ItemAccordion";
import CodeBlock from "@/components/CodeBlock/CodeBlock";

export interface ITaskItemProps {
  title: string;
  date: string;
  header: {};
  body: {};
  response: {};
  handleEdit: () => void;
  handleDelete: () => void;
}

export default function TaskItem({
  title,
  date,
  header,
  body,
  response,
  handleEdit,
  handleDelete,
}: ITaskItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleAccordion() {
    setIsOpen((prev) => !prev);
  }

  return (
    <Accordion type="single" collapsible onValueChange={toggleAccordion}>
      <AccordionItem value="item-1" className="overflow-hidden rounded">
        <AccordionTrigger
          className={cn(
            "py-2 px-4 gap-4 items-center bg-neutral-900 overflow-hidden cursor-pointer relative z-10 duration-500",
            { rounded: !isOpen }
          )}
        >
          <div className="flex justify-between items-center gap-4 flex-1">
            <div className="flex flex-col gap-1 items-start">
              <h3 className="text-[1rem] font-bold mb-1 leading-4">{title}</h3>
              <p className="text-sm text-neutral-400">{date}</p>
            </div>
            <div className="flex gap-4">
              <IconEdit
                onClick={(e) => {
                  e.stopPropagation();
                  handleEdit();
                }}
                className="cursor-pointer"
              />
              <IconTrash
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete();
                }}
                className="cursor-pointer"
              />
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent
          className={cn("bg-neutral-800 p-4 duration-500 flex flex-col gap-4")}
        >
          <Accordion type="single" collapsible onValueChange={toggleAccordion}>
            <AccordionItem value="child-1" className="overflow-hidden rounded">
              <AccordionTrigger>Requisition Header</AccordionTrigger>
              <AccordionContent
                className={cn(
                  "bg-neutral-800 p-4 duration-500 flex flex-col gap-4"
                )}
              >
                <CodeBlock code={header} />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="child-2" className="overflow-hidden rounded">
              <AccordionTrigger>Requisition Body</AccordionTrigger>
              <AccordionContent
                className={cn(
                  "bg-neutral-800 p-4 duration-500 flex flex-col gap-4"
                )}
              >
                <CodeBlock code={body} />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="child-3" className="overflow-hidden rounded">
              <AccordionTrigger>Requisition Response</AccordionTrigger>
              <AccordionContent
                className={cn(
                  "bg-neutral-800 p-4 duration-500 flex flex-col gap-4"
                )}
              >
                <CodeBlock code={response} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
