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
import router from "next/router";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface IGuestLoginProps {
  returnAction: () => void;
}

export default function GuestLogin({ returnAction }: IGuestLoginProps) {
  const { listUsers, register } = useAuth();
  const [isRegistering, setIsRegistering] = useState(false);

  const { data: userList, error, loading } = useAsync(() => listUsers!(), []);
  console.log(
    "%c user!",
    "background: #01579b; color: white; padding: 2px 4px; border-radius: 4px"
  );
  console.log(userList);

  async function handleGuestAccountCreation() {
    const a = await register({ username: "guest" });
    console.log(
      "%c Logged!",
      "background: #01579b; color: white; padding: 2px 4px; border-radius: 4px"
    );
    console.log(a);
    // router.push("/onboarding");
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
                (using Indexed DB) and cannot be accessed on different devices.
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
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
            <div className="flex gap-4 justify-end">
              <Button variant="ghost" onClick={() => setIsRegistering(false)}>
                Cancel
              </Button>
              <Button variant="secondary" onClick={handleGuestAccountCreation}>
                Log In with guest account
              </Button>
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
