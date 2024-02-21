import { Button } from "@/components/ui/button";
import { IconUserCheck, IconUserPlus } from "@tabler/icons-react";

export default function SelectUser() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-[20px] text-center">No User ID Found</h2>
      <p>Select an option:</p>
      <div className="flex gap-2">
        <Button variant={"secondary"} className="flex gap-2">
          <IconUserPlus />
          New User
        </Button>
        <Button variant={"secondary"} className="flex gap-2">
          <IconUserCheck /> Existing User
        </Button>
      </div>
    </div>
  );
}
