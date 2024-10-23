"use client";

import SearchInput from "@/components/Global/Form/SearchInput";
import { Button } from "@/components/Shadcn-ui/button";
import { Separator } from "@/components/Shadcn-ui/separator";
import { useState } from "react";
import { FlowTypes } from "./UserFlowContainer";
import { IconArrowBackUp } from "@tabler/icons-react";

interface ISelectUserProps {
  setUser: (id: string) => void;
  handleSelection: (type: FlowTypes) => void;
  existingUsers: string[];
}

export default function NewUser({
  existingUsers,
  handleSelection,
  setUser,
}: ISelectUserProps) {
  const [searchID, setSearchID] = useState("");

  function handleSearch(searchID: string) {
    setSearchID(searchID);
  }

  return (
    <div className="flex flex-col gap-4">
      <div>
        <Button
          onClick={() => handleSelection("none")}
          variant="link"
          className="flex items-center gap-2 px-0"
        >
          <IconArrowBackUp />
          Back to user selection
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="text-neutral-100 text-lg mb-4">Search for an ID</h4>
        <div className="flex gap-4 flex-col md:flex-row">
          <div className="flex-1">
            <SearchInput
              placeholder="Search ID"
              searchValue={searchID}
              handleSearch={handleSearch}
            />
          </div>
          <p className="text-neutral-400 flex-1">
            This will force your ID to be what you specify, regardless of
            whether it exists or not.
          </p>
        </div>
        <Button
          variant="secondary"
          disabled={!searchID || searchID.length > 50}
          onClick={() => setUser(searchID)}
          className="self-start"
        >
          Apply
        </Button>
        {searchID.length > 50 && (
          <p className="text-red-400">Id&apos;s cannot be over 50 characters</p>
        )}
      </div>

      <Separator />

      {existingUsers.length && (
        <div>
          <h4 className="text-neutral-100 text-lg mb-4">
            Select from IDs found
          </h4>
          <ul className="flex justify-between flex-wrap gap-4">
            {existingUsers.map((existingUser, index) => {
              return (
                <li
                  onClick={() => setUser(existingUser)}
                  key={index}
                  className="cursor-pointer hover:underline"
                >
                  {existingUser}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
