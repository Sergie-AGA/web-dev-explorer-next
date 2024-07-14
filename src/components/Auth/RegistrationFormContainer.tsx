"use client";

import { Button } from "@/components/ui/button";
import { RegistrationForm } from "./RegistrationForm";
import { useState } from "react";
import Link from "next/link";

export default function RegistrationFormContainer() {
  const [registeredEmail, setRegisteredEmail] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  function handleRegistration(email: string) {
    setRegisteredEmail(email);
    setIsRegistered(true);
  }

  if (!isRegistered) {
    return (
      <>
        <h2 className="mb-2">Sign up for a new KL Teams account</h2>
        <RegistrationForm handleRegistration={handleRegistration} />
      </>
    );
  } else {
    return (
      <>
        <h2 className="mb-2">Account successfully registered</h2>
        <p className="mb-4">
          Thank you for registering! We have sent a confirmation e-mail to{" "}
          {registeredEmail ? registeredEmail : "the provided e-mail"}. Please
          check your inbox for an activation link to complete your registration
          process. If you do not see our email shortly, be sure to check your
          spam or junk folder.
        </p>
        <Link href="/login">
          <Button>LOG IN</Button>
        </Link>
      </>
    );
  }
}
