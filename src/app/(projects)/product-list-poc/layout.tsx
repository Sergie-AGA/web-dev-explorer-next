"use client";

import { useCartStore } from "@/features/product-list/store/useCartStore";
import { useEffect, useLayoutEffect } from "react";

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const { getLocalStorage, cart } = useCartStore();
  useEffect(() => {
    getLocalStorage();
  }, []);

  return <>{children}</>;
}
