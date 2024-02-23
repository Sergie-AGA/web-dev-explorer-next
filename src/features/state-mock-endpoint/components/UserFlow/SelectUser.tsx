import { Button } from "@/components/ui/button";
import { IconUserCheck, IconUserPlus } from "@tabler/icons-react";

interface ISelectUserProps {
  handleSelection: (type: "new" | "existing") => void;
}

export default function SelectUser({ handleSelection }: ISelectUserProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-[20px] text-center">No User ID Found</h2>
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
    </div>
  );
}
