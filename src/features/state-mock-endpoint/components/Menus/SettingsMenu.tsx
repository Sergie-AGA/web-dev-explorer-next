"use client";

import BlurredText from "@/components/Global/Blur/BlurredText";
import { Button } from "@/components/ui/button";
import { useUserContext } from "../../context/UserContext";

interface ISettingsMenuProps {
  children: React.ReactNode;
}

export default function SettingsMenu({ children }: ISettingsMenuProps) {
  const { existingUser, updateUser } = useUserContext();

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        User ID:
        <BlurredText
          text={existingUser}
          from="right"
          className="w-[80%]"
          hasToggle={true}
        />
      </div>
      <div className="flex items-center gap-4 flex-wrap">
        <Button variant="secondary">Change User</Button>
        <Button variant="secondary">Delete User from Browser cookies</Button>
        <Button variant="destructive">Delete User and all related data</Button>
      </div>
    </section>
  );
}
