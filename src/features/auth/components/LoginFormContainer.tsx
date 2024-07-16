"use client";
import { LoginForm } from "./LoginForm";
import LoginProviders from "./LoginProviders";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GuestLogin from "./GuestLogin";

export default function LoginFormContainer() {
  const [provider, setProvider] = useState("");

  const handleProviderSelect = (selectedProvider: string) => {
    setProvider(selectedProvider);
  };

  const handleReturn = () => {
    setProvider("");
  };

  if (provider === "webdevexplorer") {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm returnAction={handleReturn} />
        </CardContent>
      </Card>
    );
  } else if (provider === "guest") {
    return <GuestLogin returnAction={handleReturn} />;
  } else {
    return (
      <>
        <LoginProviders onProviderSelect={handleProviderSelect} />
      </>
    );
  }
}
