"use client";

import {
  IconBrandJavascript,
  IconFilter,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import MenuItem from "./MenuItem";
import { IconInfoSquare } from "@tabler/icons-react";
import { useState } from "react";
import { cn } from "@/utils/utils";
import AboutModal from "../../features/homepage/components/AboutModal";
import { modalType, useUIStore } from "@/store/useUIStore";

export default function GlobalMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useUIStore((state) => {
    return {
      openModal: state.openModal,
    };
  });

  function toggleMenu() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  function handleModal(value: modalType) {
    openModal(value);
  }

  return (
    <div className={cn(" rounded flex overflow-hidden duration-700 relative")}>
      <MenuItem
        handleClick={() => handleModal("filter")}
        text="Filters"
        className={cn(" duration-500 translate-x-0 ", {
          "relative translate-x-[300%] opacity-0": !isOpen,
        })}
      >
        <IconFilter />
      </MenuItem>

      <MenuItem
        handleClick={() => handleModal("tech")}
        text="Techs"
        className={cn(" duration-500 translate-x-0 ", {
          "relative translate-x-[200%] opacity-0": !isOpen,
        })}
      >
        <IconBrandJavascript />
      </MenuItem>

      <AboutModal>
        <div>
          <MenuItem
            text="About"
            className={cn(" duration-500 translate-x-0 ", {
              "relative translate-x-[100%] opacity-0": !isOpen,
            })}
          >
            <IconInfoSquare />
          </MenuItem>
        </div>
      </AboutModal>

      <MenuItem
        handleClick={() => toggleMenu()}
        className={cn("duration-200 delay-0 relative z-20", {
          "rounded-[50%]  delay-300 duration-300": !isOpen,
        })}
      >
        {isOpen ? <IconX /> : <IconMenu2 />}
      </MenuItem>
    </div>
  );
}
