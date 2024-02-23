"use client";
import { cn } from "@/lib/utils";
import { IconX } from "@tabler/icons-react";
import { useState } from "react";

interface ILocalModal {
  hasOverlay?: Boolean;
  children: React.ReactNode;
  startOpen?: Boolean;
  persistent?: Boolean;
}

export default function LocalModal({
  hasOverlay = true,
  children,
  startOpen = false,
  persistent = false,
}: ILocalModal) {
  const [isOpen, setIsOpen] = useState(startOpen);

  function closeModal() {
    if (!persistent) {
      setIsOpen(false);
    }
  }

  return (
    <>
      {isOpen && (
        <div
          onClick={() => closeModal()}
          className={cn("fixed inset-0 z-[1000] bg-black/80", {
            "bg-transparent pointer-events-none": !hasOverlay,
          })}
        >
          <section
            onClick={(e) => e.stopPropagation()}
            className="fixed left-[50%] top-[50%] z-[100] grid translate-x-[-50%] translate-y-[-50%] gap-4 border border-neutral-200 bg-white p-6 shadow-lg duration-200  sm:rounded-lg dark:border-neutral-800 dark:bg-neutral-950 w-[90%] md:w-[80%] max-w-[800px]"
          >
            {!persistent && (
              <button
                onClick={() => closeModal()}
                className="absolute top-4 right-4"
              >
                <IconX className="cursor-pointer" size="16" />
              </button>
            )}
            {children}
          </section>
        </div>
      )}
    </>
  );
}
