import { cn } from "@/utils/utils";
import { IconTicket } from "@tabler/icons-react";

interface ITicketsBadgeProps {
  className?: string;
}

export default function TicketsBadge({ className }: ITicketsBadgeProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 rounded-md bg-neutral-950 py-2 px-4",
        className
      )}
    >
      <div>5</div>
      <IconTicket size="32" />
    </div>
  );
}
