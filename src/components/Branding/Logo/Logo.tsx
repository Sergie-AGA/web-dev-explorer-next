import { cn } from "@/utils/utils";
import Image from "next/image";

interface LogoProps {
  showText?: boolean;
  className?: string;
}

export default function Logo({ showText = false, className }: LogoProps) {
  return (
    <div className={cn("flex gap-4 items-center", className)}>
      <Image
        src="/Logo.svg"
        width={48}
        height={48}
        alt="Project Logo"
        className="w-12 h-12 mr-3"
      />
      {showText && <h1>Web Dev Explorer</h1>}
    </div>
  );
}
