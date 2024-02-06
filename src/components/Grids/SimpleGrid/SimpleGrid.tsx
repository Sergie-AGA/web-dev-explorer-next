import React from "react";

interface componentProps {
  data: object | object[];
  componentClasses?: string;
  isEmpty: boolean;
  children?: React.ReactNode[];
  childType: string;
}

export default function SimpleGrid({
  data,
  componentClasses,
  children,
  childType,
}: componentProps) {
  const loaderQty = 12;
  return (
    <section className={componentClasses}>
      {childType == "empty" ? (
        children
      ) : (
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
          {childType == "loader" && Array(loaderQty).fill(children)}
          {childType == "component" && children}
        </ul>
      )}
    </section>
  );
}
