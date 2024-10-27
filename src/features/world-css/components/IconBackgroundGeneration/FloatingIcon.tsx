import { memo } from "react";

interface IFloatingIconProps {
  children: React.ReactNode;
  color: string;
}

function FloatingIcon({ children, color }: IFloatingIconProps) {
  return (
    <div
      data-testid="floating-icon"
      style={{ background: color }}
      className="rounded-full p-4 text-white cursor-pointer opacity-75"
    >
      {children}
    </div>
  );
}

export default memo(FloatingIcon);
