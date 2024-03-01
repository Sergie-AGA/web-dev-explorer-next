"use client";

import BlurredText from "@/components/Global/Blur/BlurredText";
import { Button } from "@/components/ui/button";
import { useUserContext } from "../../context/UserContext";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

type DeletionMapType = "local" | "permanent" | "loading" | "reset" | "none";

type DeletionMap = {
  [key in DeletionMapType]: JSX.Element;
};
interface ISettingsMenu {
  closeModal: () => void;
}

export default function SettingsMenu({ closeModal }: ISettingsMenu) {
  const { existingUser, updateUser, toggleUserModal } = useUserContext();
  const [dangerousAction, setDangerousAction] =
    useState<DeletionMapType>("none");

  function handleDeletion(type: DeletionMapType) {
    setDangerousAction("local");
  }

  async function handleDeleteCookies() {
    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 10);

    const existingUserIds = await JSON.parse(
      document.cookie
        .split("; ")
        .find((row) => row.startsWith("StateMockEndpointUserIds="))
        ?.split("=")[1] || "[]"
    );

    const updatedUsers = existingUserIds.filter(
      (id: string) => id !== existingUser
    );

    document.cookie = `StateMockEndpointUserIds=${JSON.stringify(
      updatedUsers
    )}; expires=${expirationDate.toUTCString()}; path=/`;
  }

  function deleteCookies() {
    setDangerousAction("loading");
    handleDeleteCookies();
    updateUser("");
    setDangerousAction("reset");

    setTimeout(() => {
      closeModal();
      toggleUserModal(true);
    }, 3000);
  }

  const deletionMap = {
    local: (
      <p className="flex flex-col gap-4">
        <span>
          This action will permanently remove the saved user from the
          browser&apos;s cookies, but keep the data in the database. You can
          still see the data by manually typing this ID on the user selection
          screen.
        </span>
        <div className="flex items-center gap-4">
          <Button onClick={deleteCookies} variant="destructive">
            Confirm Data Deletion
          </Button>
          <Button onClick={() => setDangerousAction("none")} variant="outline">
            Cancel
          </Button>
        </div>
      </p>
    ),
    loading: <p>Deletion in progress...</p>,
    reset: (
      <p>Deletion operation executed successfully. Restarting application...</p>
    ),
    none: (
      <p className="text-neutral-700 font-bold">
        Deleting data is a permanent action. Proceed with caution...
      </p>
    ),
  } as DeletionMap;

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        User ID:
        <BlurredText
          text={existingUser}
          from="right"
          className="via-neutral-950 to-neutral-950"
          hasToggle={true}
        />
      </div>
      <div className="flex items-center gap-4 flex-wrap">
        <Button onClick={() => toggleUserModal(true)} variant="secondary">
          Change User
        </Button>
        <Button onClick={() => handleDeletion("local")} variant="secondary">
          Delete User from Browser cookies
        </Button>
        <Button variant="secondary">Delete User and all related data</Button>
      </div>
      <Separator />
      <div className="min-h-[30px]">{deletionMap[dangerousAction]}</div>
    </section>
  );
}
