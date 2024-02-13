"use client";

import GlobalHeader from "@/components/Global/GlobalHeader/GlobalHeader";
import ProductCart from "@/features/product-list/components/ProductCart";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const metadata = {
  title: {
    template: "%s | Web Dev Explorer",
    default: "Product List POC",
  },
  description:
    "Proof of concept of a store using Zustand for managing global state and Supabase for the API",
};

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();

  return (
    <div className="site-wrap bg-cyan-950">
      <GlobalHeader title="Product List POC">
        <ProductCart className={cn({ "lg:hidden": path?.length <= 18 })} />
      </GlobalHeader>
      {children}
    </div>
  );
}
