"use client";

import LocalModal from "@/components/Modals/LocalModal/LocalModal";
import Dashboard from "@/features/state-mock-endpoint/components/Dashboard/Dashboard";
import UserFlowContainer from "@/features/state-mock-endpoint/components/UserFlow/UserFlowContainer";
import { useState } from "react";
import { useUserContext } from "@/features/state-mock-endpoint/context/UserContext";

export default function StateMockEndpoint() {
  const { existingUser, updateUser } = useUserContext();

  const [isOpen, setIsOpen] = useState(true);

  function setUser(userID: string) {
    updateUser(userID);
    setIsOpen(false);
  }

  return (
    <>
      {isOpen && (
        <LocalModal startOpen={true} persistent={true}>
          <UserFlowContainer setUser={setUser} />
        </LocalModal>
      )}
      {existingUser ? (
        <Dashboard userID={existingUser} />
      ) : (
        <p className="text-center">Validating user...</p>
      )}
    </>
  );
}
