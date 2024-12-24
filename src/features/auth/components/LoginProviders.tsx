import { IconUserQuestion } from "@tabler/icons-react";
import Logo from "../../../components/Branding/Logo/Logo";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ShadcnUi/Card";
import { Button } from "@/components/ShadcnUi/Button";

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
      <CardContent className="flex flex-col gap-4">
        <Button
          variant="cyan"
          className="w-full logo-font"
          onClick={() => onProviderSelect("webdevexplorer")}
        >
          <Logo className="mr-2 h-6 w-6" />
          Web Dev Explorer Account
        </Button>
        <Button
          variant="secondary"
          className="w-full logo-font"
          onClick={() => onProviderSelect("guest")}
        >
          <IconUserQuestion className="mr-2 h-4 w-4" />
          Log in as guest
        </Button>
      </CardContent>
    </Card>
  );
}
