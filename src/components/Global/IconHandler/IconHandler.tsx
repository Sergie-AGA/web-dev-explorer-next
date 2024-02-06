import React from "react";
import dynamic from "next/dynamic";
import { DynamicOptions } from "next/dynamic";

type IconType = string;

interface IconHandlerProps {
  icon: IconType;
  size?: number;
  color?: string;
}

const IconHandler: React.FC<IconHandlerProps> = ({
  icon,
  size = 24,
  color = "currentColor",
}) => {
  const IconComponent = dynamic(() =>
    import(`@tabler/icons-react` as any).then((icons) => {
      if (!icons[icon]) {
        console.warn(`Icon "${icon}" does not exist.`);
        return null;
      }
      return icons[icon];
    })
  );

  return (
    <>
      <IconComponent size={size} color={color} />
    </>
  );
};

export default IconHandler;
