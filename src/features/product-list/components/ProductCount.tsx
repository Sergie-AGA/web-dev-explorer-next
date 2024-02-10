"use client";
import { cn } from "@/lib/utils";
import { useCartStore } from "../store/useCartStore";

interface IProductCount {
  className: string;
}

export default function ProductCount({ className }: IProductCount) {
  const cart = useCartStore((state) => state.cart);

  return (
    <>
      {cart?.length > 0 && (
        <span
          className={cn(
            "translate-x-[50%] translate-y-[-50%] rounded-[50%] bg-white text-black h-5 w-5 flex items-center justify-center text-xs",
            className
          )}
        >
          {cart.length}
        </span>
      )}
    </>
  );
}
