"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../../../components/ui/button";
import useAsync from "@/hooks/useAsync";
import { useAuth } from "../hooks/useAuth";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IconHelpHexagon } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ActionButton } from "@/components/Buttons/ActionButton/ActionButton";
import { useQueryRedirect } from "@/hooks/useQueryRedirect";

interface IGuestLoginProps {
  returnAction: () => void;
}

export default function GuestLogin({ returnAction }: IGuestLoginProps) {
  const { listUsers, register, login } = useAuth();
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [registrationError, setRegistrationError] = useState("");
  const queryRedirect = useQueryRedirect();

  const {
    data: userList,
    error,
    loading,
    execute: refetchUserList,
  } = useAsync(() => listUsers!(), []);

  useEffect(() => {
    refetchUserList();
  }, [isRegistering]);

  async function handleGuestAccountCreation() {
    setIsPending(true);
    setRegistrationError("");
    try {
      await register({ username });
      setIsRegistering(false);
      refetchUserList();
    } catch (error) {
      console.error("Error creating guest account:", error);
      setRegistrationError(
        "An error has occurred. You might be attempting to register an existing guest account"
      );
    } finally {
      setIsPending(false);
    }
  }

  async function handleGuestAccountLogin(username: string) {
    await login({ username });
    queryRedirect("/account");
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex flew-row items-center justify-center gap-4">
          <CardTitle className="text-center">Guest Login</CardTitle>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon">
                <IconHelpHexagon className="cursor-pointer hover:text-red" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <p>
                With a guest account your data will be saved inside your browser
                without a password (using Indexed DB) and cannot be accessed on
                different devices.
              </p>
              <br />
              <p>
                Depending on your browser, this feature may not work properly.
                Please use Chromium based browsers for optimum results.
              </p>
              <br />
              <p>
                Some features still allow you to later create an account and
                move your data to it.
              </p>
            </PopoverContent>
          </Popover>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {isRegistering ? (
          <div>
            <div className="flex flex-col mb-4 gap-2">
              <Label htmlFor="username">Choose a Username</Label>
              <Input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {registrationError && (
                <p className="text-red-500">{registrationError}</p>
              )}
            </div>
            <div className="flex gap-4 justify-end">
              <Button variant="ghost" onClick={() => setIsRegistering(false)}>
                Cancel
              </Button>
              <ActionButton
                onClick={handleGuestAccountCreation}
                classes="w-full font-bold"
                type="submit"
                isLoading={isPending}
                text="Register guest account"
              />
            </div>
          </div>
        ) : loading ? (
          <p>Loading User accounts...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <div className="flex flex-col gap-4">
            {userList ? (
              <div>
                <p>
                  Existing users found. Please select a user or create a new
                  one:
                </p>
                <ul className="flex gap-4 flex-wrap py-2">
                  {userList.map((user, key) => {
                    return (
                      <li
                        key={key}
                        className="bg-neutral-800 hover:bg-neutral-700 py-1 px-2 rounded cursor-pointer"
                        onClick={() => handleGuestAccountLogin(user.username)}
                      >
                        {user.username}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              <p>No existing guest account was found.</p>
            )}

            <div className="flex gap-4 justify-end">
              <Button variant="ghost" onClick={returnAction}>
                Cancel
              </Button>
              <Button
                variant="secondary"
                onClick={() => setIsRegistering(true)}
              >
                Create guest account
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
