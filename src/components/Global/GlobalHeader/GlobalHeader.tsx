import { cn } from "@/utils/utils";
import Image from "next/image";
import { ReactNode } from "react";

interface IHeaderProps {
  title?: string;
  children?: ReactNode;
  className?: string;
}

export default function GlobalHeader({
  title,
  children,
  className,
}: IHeaderProps) {
  return (
    <header
      className={cn(
        "max-width-container flex items-center mb-4 md:mb-6",
        className
      )}
    >
      <div className="flex items-center mr-2">
        <Image
          src="/Logo.svg"
          width={48}
          height={48}
          alt="Project Logo"
          className="w-12 h-12 mr-3"
        />
        <h1 className="h4">{title ? title : "Web Dev Explorer"}</h1>
      </div>
      <div className="ml-auto">{children}</div>
    </header>
  );
}
