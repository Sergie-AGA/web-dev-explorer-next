import { useState } from "react";
import GameRules from "../GameRules";
import StarterSelection from "./StarterSelection";

export default function Onboarding() {
  const [instructionsSeen, setInstructionsSeen] = useState(false);
  function dismissRules() {
    setInstructionsSeen(true);
  }

  return (
    <section>
      {instructionsSeen ? (
        <StarterSelection />
      ) : (
        <>
          <h2 className="m-auto text-center h3 mb-4">
            Welcome to &quot;Gotta Catch &apos;Em All!&quot;
          </h2>
          <GameRules onDismiss={dismissRules} />
        </>
      )}
    </section>
  );
}
