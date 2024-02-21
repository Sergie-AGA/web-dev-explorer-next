"use client";

import { useState } from "react";
import SelectUser from "./SelectUser";
import { v4 as uuidv4 } from "uuid";

export default function UserFlow() {
  const [existingUser, setExistingUser] = useState("");

  return (
    <section className="fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] bg-neutral-900 rounded p-4  w-[90%] max-width-container">
      <div>
        <SelectUser />
      </div>
      <div></div>
    </section>
  );
}
