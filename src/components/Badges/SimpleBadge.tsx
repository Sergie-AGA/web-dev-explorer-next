import { cn } from "@/utils/utils";
import { MapBadgeToIcon } from "../Cards/MorphingCard/MapBadgeToIcon";

interface BadgeProps {
  badge: "tool" | "concept" | "exploration" | "cart" | "car" | "money";
  showTitle?: boolean;
  className?: string;
}

/**
 * # Simple Badge
 * A Simple Badge renders a badge with an icon and optionally displays the title. It uses a mapping function to render a specific icon depending on the text you give that
 *
 * ```javascript
 * import SimpleBadge from "@/components/Badges/SimpleBadge";
 *
 * <SimpleBadge
 *   badge="cart"
 *   showTitle={false}
 *   className="rounded cursor-pointer"
 * />
 * ```
 *
 */
export default function SimpleBadge({
  badge,
  showTitle = true,
  className,
}: BadgeProps) {
  const IconComponent = MapBadgeToIcon(badge);

  return (
    <div
      data-testid="simple-badge"
      className={cn(
        "flex flex-col text-center items-center bg-cyan-800 w-12 h-12 p-[3px] rounded justify-between",
        className
      )}
    >
      <div className="flex-1 flex items-center">
        {IconComponent && <IconComponent size={24} color="currentColor" />}
      </div>
      {showTitle && (
        <span className="text-[0.5rem] leading-normal">{badge}</span>
      )}
    </div>
  );
}
