import { ReloadIcon } from "@radix-ui/react-icons";
import { cn } from "@/utils/utils";
import { Button } from "@/components/ShadcnUi/Button";

interface IButtonProps {
  classes: string;
  type: "button" | "submit" | "reset" | undefined;
  isLoading?: boolean;
  text: string;
  loadingText?: string;
  onClick?: () => void;
  disabled: boolean;
}

export function ActionButton({
  isLoading = false,
  type = "button",
  classes,
  text,
  loadingText = "Loading...",
  onClick,
  disabled,
}: IButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant="secondary"
      disabled={isLoading}
      className={cn(classes, { "pointer-events-none opacity-50": disabled })}
      type={type}
    >
      {isLoading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
      {isLoading ? loadingText : text}
    </Button>
  );
}
