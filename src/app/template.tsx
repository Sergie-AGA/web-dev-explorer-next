"use client";

import { useAuth } from "@/features/auth/hooks/useAuth";

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  useAuth();

  return <div>{children}</div>;
}
