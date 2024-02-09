import { IProduct } from "../data/products";
const discountMap = {
  3: 0.2,
  2: 0.4,
  1: 0.55,
};

export function useCalculatePrice(product: IProduct) {
  const basePrice = product.basePrice;
  const discount = discountMap[product.priceLevel] * product.basePrice;
  const pickUpDiscount = (product.pickUpBonus ? 0.2 : 0) * product.basePrice;

  const discountedPrice = basePrice - discount;
  const pickUpPrice = basePrice - discount - pickUpDiscount;
  return {
    discountedPrice,
    pickUpPrice,
  };
}
