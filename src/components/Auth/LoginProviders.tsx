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
          variant="secondary"
          className="w-full logo-font"
          onClick={() => onProviderSelect("webdevexplorer")}
        >
          <MixIcon className="mr-2 h-4 w-4" />
          Web Dev Explorer Account
        </Button>
      </CardContent>
    </Card>
  );
}
