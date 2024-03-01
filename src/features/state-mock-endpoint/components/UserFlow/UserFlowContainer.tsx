"use client";

import { useEffect, useState } from "react";
import SelectUser from "./SelectUser";
import NewUser from "./NewUser";
import ExistingUser from "./ExistingUser";

interface IFlowProps {
  setUser: (id: string) => void;
}

export type FlowTypes = "new" | "existing" | "none";

export default function UserFlowContainer({ setUser }: IFlowProps) {
  const [existingUsers, setExistingUsers] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const existingUserIds = JSON.parse(
      document.cookie
        .split("; ")
        .find((row) => row.startsWith("StateMockEndpointUserIds="))
        ?.split("=")[1] || "[]"
    );

    setExistingUsers(existingUserIds);
    setIsLoaded(true);
    setUser(existingUserIds[0]);
  }, []);

  function handleSetUser(userID: string) {
    if (!existingUsers.includes(userID)) {
      setExistingUsers((prevUsers) => {
        const updatedUsers = [...prevUsers, userID];

        document.cookie = `StateMockEndpointUserIds=${JSON.stringify(
          updatedUsers
        )}; path=/`;

        return updatedUsers;
      });
    }
    setUser(userID);
  }

  const [flowType, setFlowType] = useState<FlowTypes>("none");

  function handleSelection(type: FlowTypes) {
    setFlowType(type);
  }

  const flowTypeComponents = {
    new: <NewUser handleSelection={handleSelection} setUser={handleSetUser} />,
    existing: (
      <ExistingUser
        setUser={handleSetUser}
        existingUsers={existingUsers}
        handleSelection={handleSelection}
      />
    ),
    none: (
      <SelectUser
        isLoaded={isLoaded}
        existingUsers={existingUsers}
        handleSelection={handleSelection}
      />
    ),
  };

  const SelectedComponent = flowTypeComponents[flowType as FlowTypes];

  return <section>{SelectedComponent}</section>;
}
