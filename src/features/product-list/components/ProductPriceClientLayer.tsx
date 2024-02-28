"use client";

import { IProduct } from "../data/products";
import { useCartStore } from "../store/useCartStore";
import { useEffect, useState } from "react";
import { cn } from "@/utils/utils";

interface IPriceClientLayer {
  children: React.ReactNode;
  product: IProduct;
  discountedValue: number;
  option: "pickUp" | "discount";
}

export default function ProductPriceClientLayer({
  children,
  product,
  discountedValue,
  option,
}: IPriceClientLayer) {
  const [isActive, setIsActive] = useState(false);

  const cart = useCartStore((state) => state.cart);
  const { addToCart, removeFromCart, swapOption } = useCartStore((state) => {
    return {
      addToCart: state.addToCart,
      removeFromCart: state.removeFromCart,
      swapOption: state.swapOption,
    };
  });

  useEffect(() => {
    const itemInCart = findInCart();

    if (itemInCart && itemInCart.option == option) {
      setIsActive(true);
    } else if (itemInCart) {
      setIsActive(false);
    } else {
      setIsActive(false);
    }
  }, [cart]);

  function findInCart() {
    const itemInCart = cart.find((item) => {
      return item.product.id == product.id;
    });

    return itemInCart;
  }

  function handleCart(option: "pickUp" | "discount") {
    const itemInCart = findInCart();
    if (itemInCart && itemInCart.option == option) {
      removeFromCart(product.id);
    } else if (itemInCart) {
      swapOption(product.id);
      handleAddToCart();
    } else {
      handleAddToCart();
    }
  }

  function handleAddToCart() {
    const finalPrice = product.basePrice - discountedValue;
    const savings = product.basePrice - finalPrice;
    const percentageSavings =
      ((savings / product.basePrice) * 100).toFixed(0) + "%";

    const cartData = {
      product,
      option,
      finalPrice,
      savings,
      percentageSavings,
    };
    addToCart(cartData);
  }

  return (
    <li
      onClick={() => handleCart(option)}
      className={cn(
        " max-w-[500px] cursor-pointer rounded bg-cyan-900 hover:bg-cyan-700 p-4 overflow-hidden flex gap-4 border-4 border-solid border-cyan-900 hover:border-cyan-700",
        { "border-cyan-300 hover:border-cyan-300 hover:bg-cyan-900 ": isActive }
      )}
    >
      {children}
    </li>
  );
}
