import { ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

interface IButtonProps {
  classes: string;
  type: "button" | "submit" | "reset" | undefined;
  isLoading?: boolean;
  text: string;
  loadingText?: string;
  onClick?: () => void;
}

export function ActionButton({
  isLoading = false,
  type = "button",
  classes,
  text,
  loadingText = "Loading...",
  onClick,
}: IButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant="secondary"
      disabled={isLoading}
      className={classes}
      type={type}
    >
      {isLoading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
      {isLoading ? loadingText : text}
    </Button>
  );
}
