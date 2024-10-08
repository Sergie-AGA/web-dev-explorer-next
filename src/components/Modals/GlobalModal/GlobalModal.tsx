"use client";
import { cn } from "@/utils/utils";
import { useUIStore } from "@/store/useUIStore";
import { IconX } from "@tabler/icons-react";

import TechModal from "@/features/homepage/components/TechModal";
import FilterModal from "@/features/homepage/components/FilterModal";
import { Suspense } from "react";

interface IGlobalModal {
  hasOverlay?: Boolean;
}

export default function GlobalModal({ hasOverlay = true }: IGlobalModal) {
  const { isOpen, modalType, toggleModal } = useUIStore((state) => {
    return {
      isOpen: state.globalModal.isOpen,
      modalType: state.globalModal.type,
      openModal: state.openModal,
      toggleModal: state.toggleModal,
    };
  });

  function handleClick(e: React.MouseEvent) {
    toggleModal();
  }

  const modalsMap = {
    filter: FilterModal,
    tech: TechModal,
  };

  const ModalComponent = modalsMap[modalType];

  return (
    <>
      {isOpen && (
        <div
          onClick={handleClick}
          className={cn("fixed inset-0 z-[1000] bg-black/80", {
            "bg-transparent pointer-events-none": !hasOverlay,
          })}
        >
          <section
            onClick={(e) => e.stopPropagation()}
            className="fixed left-[50%] top-[50%] z-[100] grid translate-x-[-50%] translate-y-[-50%] gap-4 border border-neutral-200 bg-white p-6 shadow-lg duration-200 sm:rounded-lg dark:border-neutral-800 dark:bg-neutral-950 w-[90%] md:w-[80%] max-w-[800px]"
          >
            <button onClick={handleClick} className="absolute top-4 right-4">
              <IconX className="cursor-pointer" size="16" />
            </button>
            <Suspense>{<ModalComponent />}</Suspense>
          </section>
        </div>
      )}
    </>
  );
}
