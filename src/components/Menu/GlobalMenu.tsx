"use client";

import {
  IconBrandJavascript,
  IconFilter,
  IconMenu2,
  IconUserCircle,
  IconX,
} from "@tabler/icons-react";
import MenuItem from "./MenuItem";
import { IconInfoSquare } from "@tabler/icons-react";
import { useState } from "react";
import { cn } from "@/utils/utils";
import AboutModal from "../../features/homepage/components/AboutModal/AboutModal";
import { modalType, useUIStore } from "@/features/homepage/store/useUIStore";
import Link from "next/link";

export default function GlobalMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useUIStore((state) => ({
    openModal: state.openModal,
  }));

  function toggleMenu() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  function handleModal(value: modalType) {
    openModal(value);
  }

  return (
    <div className={cn("rounded flex overflow-hidden duration-700 relative")}>
      <MenuItem
        handleClick={() => handleModal("filter")}
        text="Filters"
        className={cn(" duration-500 translate-x-0 ", {
          "relative translate-x-[400%] opacity-0": !isOpen,
        })}
      >
        <IconFilter data-testid="menu-filters" />
      </MenuItem>

      <MenuItem
        handleClick={() => handleModal("tech")}
        text="Techs"
        className={cn(" duration-500 translate-x-0 ", {
          "relative translate-x-[300%] opacity-0": !isOpen,
        })}
      >
        <IconBrandJavascript data-testid="menu-techs" />
      </MenuItem>

      <AboutModal>
        <div>
          <MenuItem
            text="About"
            className={cn(" duration-500 translate-x-0 ", {
              "relative translate-x-[200%] opacity-0": !isOpen,
            })}
          >
            <IconInfoSquare data-testid="menu-about" />
          </MenuItem>
        </div>
      </AboutModal>

      <MenuItem
        text="Account"
        className={cn(" duration-500 translate-x-0 ", {
          "relative translate-x-[100%] opacity-0": !isOpen,
        })}
      >
        <Link href="/account">
          <IconUserCircle />
        </Link>
      </MenuItem>

      <MenuItem
        handleClick={() => toggleMenu()}
        className={cn("duration-200 delay-0 relative z-20", {
          "rounded-[50%] delay-300 duration-300": !isOpen,
        })}
        data-testid="menu-toggle"
      >
        {isOpen ? (
          <IconX data-testid="icon-close" />
        ) : (
          <IconMenu2 data-testid="icon-menu" />
        )}
      </MenuItem>
    </div>
  );
}
