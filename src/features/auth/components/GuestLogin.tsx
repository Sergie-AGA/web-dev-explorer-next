"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../../../components/ui/button";

interface IGuestLoginProps {
  returnAction: () => void;
}

export default function GuestLogin({ returnAction }: IGuestLoginProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Guest Login</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <p>
          With a guest account your data will be saved inside your browser
          (using Indexed DB) and cannot be accessed on different devices.
        </p>
        <p>
          Some features still allow you to later create an account and move your
          data to it.
        </p>
        <div className="flex gap-4 justify-end">
          <Button variant="ghost" onClick={returnAction}>
            Cancel
          </Button>
          <Button variant="secondary">Log in as guest</Button>
        </div>
      </CardContent>
    </Card>
  );
}
