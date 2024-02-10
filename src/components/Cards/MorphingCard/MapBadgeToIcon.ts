export function MapBadgeToIcon(badge: string): string {
  const badges: Record<string, string> = {
    tool: "IconTool",
    concept: "IconPuzzleFilled",
    exploration: "IconZoomCode",
  };

  return badges[badge] || badge;
}
