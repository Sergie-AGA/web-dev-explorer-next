import { Button } from "@/components/ShadcnUi/Button";
import { IconArrowBackUp, IconCircleArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { FlowTypes } from "./UserFlowContainer";

interface ISelectUserProps {
  handleSelection: (type: FlowTypes) => void;
  setUser: (id: string) => void;
}

export default function NewUser({
  handleSelection,
  setUser,
}: ISelectUserProps) {
  const newUserID = uuidv4();

  return (
    <div className="flex flex-col gap-4">
      <div className="text-center">
        <h2 className="text-[1.25rem]">New User ID generated:</h2>
        <span className="text-2xl">{newUserID}</span>
      </div>
      <ul>
        <li className="list-disc list-inside">
          This ID is used to identify you in every new task you create and it is
          the only way to fetch the data again. Please understand that this
          application offers no additional ways to protect your tasks and your
          data, so do not use this feature for data sensitive tasks.
        </li>
        <li className="list-disc list-inside">
          The ID will be stored in your browser&apos;s cookies for better User
          Experience but you may want to take note of it for further use on
          different browsers.
        </li>
      </ul>
      <Link href="/privacy" className="flex items-center gap-2 underline">
        <IconCircleArrowRight />
        See complete terms of use and data policy
      </Link>
      <div className="mt-4 flex gap-4 justify-center">
        <Button onClick={() => setUser(newUserID)} variant="secondary">
          I Understand. Save ID and Continue
        </Button>
        <Button
          onClick={() => handleSelection("none")}
          variant="link"
          className="flex items-center gap-2 px-0"
        >
          <IconArrowBackUp />
          Back to user selection
        </Button>
      </div>
    </div>
  );
}
