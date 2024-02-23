"use client";

import LocalModal from "@/components/Modals/LocalModal/LocalModal";
import UserFlowContainer from "@/features/state-mock-endpoint/components/UserFlow/UserFlowContainer";
import { useState } from "react";

export default function StateMockEndpoint() {
  const [existingUser, setExistingUser] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  function setUser(userID: string) {
    setExistingUser(userID);
    setIsOpen(false);
  }

  return (
    <>
      {isOpen && (
        <LocalModal startOpen={true} persistent={true}>
          <UserFlowContainer setUser={setUser} />
        </LocalModal>
      )}
      {existingUser ? 1 : <p className="text-center">Validating user...</p>}
    </>
  );
}
