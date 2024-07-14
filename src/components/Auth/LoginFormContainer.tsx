"use client";
import { LoginForm } from "./LoginForm";
import LoginProviders from "./LoginProviders";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginFormContainer() {
  const [provider, setProvider] = useState("");

  const handleProviderSelect = (selectedProvider: string) => {
    setProvider(selectedProvider);
  };

  const handleReturn = () => {
    setProvider("");
  };

  if (provider === "randomteams") {
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
  } else {
    return (
      <>
        <LoginProviders onProviderSelect={handleProviderSelect} />
      </>
    );
  }
}
