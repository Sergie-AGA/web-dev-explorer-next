import IconHandler from "@/components/Global/IconHandler/IconHandler";
import { MapBadgeToIcon } from "@/components/Cards/MorphingCard/MapBadgeToIcon";
import { cn } from "@/lib/utils";

interface BadgeProps {
  badge: string;
  showTitle?: boolean;
  className?: string
}

export default function SimpleBadge({ badge, showTitle = true, className}: BadgeProps) {
  const icon = MapBadgeToIcon(badge);

  return (
    <div className={cn("flex flex-col text-center items-center bg-cyan-800 w-12 h-12 p-[3px] rounded justify-between", className)}>
      <div className="flex-1 flex items-center">
        
        <IconHandler icon={icon} />
      </div>
      {
showTitle &&
      <span className="text-[8px] leading-normal">{badge}</span>
      }
    </div>
  );
}
