import { Button } from "@/components/ShadcnUi/Button";
import { IconUserCheck, IconUserPlus } from "@tabler/icons-react";

interface ISelectUserProps {
  handleSelection: (type: "new" | "existing") => void;
  existingUsers: string[];
  isLoaded: boolean;
}

export default function SelectUser({
  handleSelection,
  existingUsers,
  isLoaded,
}: ISelectUserProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-[1.25rem] text-center">
        {isLoaded
          ? existingUsers.length
            ? "One or more user IDs detected"
            : "No User ID Found"
          : "Checking Users..."}
      </h2>
      {isLoaded && (
        <>
          <p className="text-neutral-400">Select an option:</p>
          <div className="flex gap-2">
            <Button
              onClick={() => handleSelection("new")}
              variant={"secondary"}
              className="flex gap-2"
            >
              <IconUserPlus />
              New User
            </Button>
            <Button
              onClick={() => handleSelection("existing")}
              variant={"secondary"}
              className="flex gap-2"
            >
              <IconUserCheck /> Existing User
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
