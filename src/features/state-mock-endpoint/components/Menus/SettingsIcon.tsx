"use client";

import IconButton from "@/components/Buttons/IconButton";
import LocalModal from "@/components/Modals/LocalModal/LocalModal";
import { IconSettings } from "@tabler/icons-react";
import { useState } from "react";
import SettingsMenu from "./SettingsMenu";

export default function SettingsIcon() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <IconButton onClick={openModal}>
        <IconSettings />
      </IconButton>
      {isOpen && (
        <LocalModal
          startOpen={isOpen}
          persistent={false}
          closeModal={closeModal}
        >
          <SettingsMenu closeModal={closeModal} />
        </LocalModal>
      )}
    </>
  );
}
