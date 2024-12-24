import { useState } from "react";
import LoginProviders from "./LoginProviders";
import { useAtom } from "jotai";
import { loginOptionAtom } from "../store/useAuthStore";
import GuestLogin from "./GuestLogin";
import LoginForm from "./LoginForm";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ShadcnUi/Card";

export default function LoginFormContainer() {
  const [provider, setProvider] = useState("");
  const [, setLoginOption] = useAtom(loginOptionAtom);

  const handleProviderSelect = (selectedProvider: string) => {
    setProvider(selectedProvider);

    if (selectedProvider === "webdevexplorer") {
      setLoginOption("webdevexplorer");
    } else if (selectedProvider === "guest") {
      setLoginOption("guest");
    }
  };

  const handleReturn = () => {
    setProvider("");
    setLoginOption("webdevexplorer");
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
