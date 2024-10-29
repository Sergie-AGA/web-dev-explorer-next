import {
  IconTool,
  IconPuzzleFilled,
  IconZoomCode,
  IconShoppingCart,
  IconCar,
  IconReportMoney,
} from "@tabler/icons-react";

export function MapBadgeToIcon(badge: string) {
  const badges: Record<
    string,
    (props: { size: number; color: string }) => JSX.Element
  > = {
    tool: IconTool,
    concept: IconPuzzleFilled,
    exploration: IconZoomCode,
    cart: IconShoppingCart,
    car: IconCar,
    money: IconReportMoney,
  };

  return badges[badge] || null;
}
