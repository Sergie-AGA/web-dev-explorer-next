"use client";

import { useCartStore } from "@/features/product-list/store/useCartStore";
import { useEffect } from "react";

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const { getLocalStorage, cart, calculateTotals } = useCartStore();
  useEffect(() => {
    getLocalStorage();
    if (cart.length) {
      calculateTotals();
    }
  }, []);

  return <>{children}</>;
}
