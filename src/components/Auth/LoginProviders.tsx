import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { MixIcon } from "@radix-ui/react-icons";

interface LoginProviderProps {
  onProviderSelect: (provider: string) => void;
}

export default function LoginProviders({
  onProviderSelect,
}: LoginProviderProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Options:</CardTitle>
      </CardHeader>
      <CardContent>
        <Button
          className="w-full logo-font"
          onClick={() => onProviderSelect("randomteams")}
        >
          <MixIcon className="mr-2 h-4 w-4" />
          KL Teams Account
        </Button>
      </CardContent>
    </Card>
  );
}
