"use client";

import { useEffect, useState } from "react";
import SelectUser from "./SelectUser";
import NewUser from "./NewUser";

interface IFlowProps {
  setUser: (id: string) => void;
}

export type FlowTypes = "new" | "existing" | "none";

export default function UserFlowContainer({ setUser }: IFlowProps) {
  const [existingUsers, setExistingUsers] = useState<string[]>([]);

  useEffect(() => {
    const existingUserIds = JSON.parse(
      document.cookie
        .split("; ")
        .find((row) => row.startsWith("StateMockEndpointUserIds="))
        ?.split("=")[1] || "[]"
    );

    setExistingUsers(existingUserIds);
  }, []);

  function handleSetUser(userID: string) {
    setExistingUsers((prevUsers) => {
      const updatedUsers = [...prevUsers, userID];

      document.cookie = `StateMockEndpointUserIds=${JSON.stringify(
        updatedUsers
      )}; path=/`;

      setUser(userID);

      return updatedUsers;
    });
  }

  const [flowType, setFlowType] = useState<FlowTypes>("none");

  function handleSelection(type: FlowTypes) {
    setFlowType(type);
  }

  const flowTypeComponents = {
    new: <NewUser handleSelection={handleSelection} setUser={handleSetUser} />,
    existing: <div />,
    none: <SelectUser handleSelection={handleSelection} />,
  };

  const SelectedComponent = flowTypeComponents[flowType as FlowTypes];

  return <section>{SelectedComponent}</section>;
}
