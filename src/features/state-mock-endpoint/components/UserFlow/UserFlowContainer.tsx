"use client";

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SelectUser from "./SelectUser";

export default function UserFlowContainer() {
  const [existingUser, setExistingUser] = useState("");

  return (
    <section>
      <div>
        <SelectUser />
      </div>
      <div></div>
    </section>
  );
}
