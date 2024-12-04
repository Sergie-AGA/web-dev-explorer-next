import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface IHeaderProps {
  title?: string;
  children?: ReactNode;
}

/**
 * GlobalHeader Component
 *
 * A header component for global usage, featuring a logo, title, and optional children (e.g., actions or navigation elements).
 *
 * ```tsx
 * import GlobalHeader from "@/components/GlobalHeader";
 *
 * <GlobalHeader title="My Application">
 *   <button className="btn">Sign In</button>
 * </GlobalHeader>
 * ```
 *
 */
export default function GlobalHeader({ title, children }: IHeaderProps) {
  return (
    <header className="max-width-container flex items-center mb-4 md:mb-6">
      <div className="flex items-center mr-2">
        <Link href="/">
          <Image
            src="/Logo.svg"
            width={48}
            height={48}
            alt="Project Logo"
            className="w-12 h-12 mr-3"
          />
        </Link>
        <h1 className="h4">{title ? title : "Web Dev Explorer"}</h1>
      </div>
      <div className="ml-auto">{children}</div>
    </header>
  );
}
