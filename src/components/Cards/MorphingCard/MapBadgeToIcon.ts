import { IconTool, IconPuzzleFilled, IconZoomCode } from "@tabler/icons-react";

export function MapBadgeToIcon(badge: string) {
  const badges: Record<
    string,
    (props: { size: number; color: string }) => JSX.Element
  > = {
    tool: IconTool,
    concept: IconPuzzleFilled,
    exploration: IconZoomCode,
  };

  return badges[badge] || null;
}
