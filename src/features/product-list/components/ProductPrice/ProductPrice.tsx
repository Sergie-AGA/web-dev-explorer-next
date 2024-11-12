import SimpleBadge from "@/components/Badges/SimpleBadge";

import { IProduct } from "../../config/products";
import ProductPriceClientLayer from "./ProductPriceClientLayer";
import { britishCurrencyFormatter } from "../../utils/currencyFormatter";

interface IProductModal {
  product: IProduct;
  discountedPrice: number;
  pickUpPrice: number;
}

export default function ProductPrice({
  product,
  discountedPrice,
  pickUpPrice,
}: IProductModal) {
  const discount =
    ((product.basePrice - discountedPrice) / product.basePrice) * 100;
  const pickUpDiscount =
    ((product.basePrice - pickUpPrice) / product.basePrice) * 100;

  const discountedValueStandard = product.basePrice - discountedPrice;
  const discountedValuePickUp = product.basePrice - pickUpPrice;

  return (
    <>
      {pickUpDiscount !== discount && (
        <ProductPriceClientLayer
          product={product}
          discountedValue={discountedValuePickUp}
          option="pickUp"
          data-testid="discount-pick-up-price"
        >
          <SimpleBadge
            className="rounded flex-[0_1_45px]"
            badge="car"
            showTitle={false}
          />

          <div className="flex-1">
            <h5 className="text-xs mb-2">
              Ultra Savings when you pick it up in Liverpool
            </h5>
            <div className="flex gap-2 items-center">
              <span className="text-4xl">
                {britishCurrencyFormatter(pickUpPrice)}
              </span>
              <span className=" rounded py-1 px-2 bg-cyan-800 text-neutral-300 text-sm">
                {pickUpDiscount.toFixed(0)}% OFF!
              </span>
            </div>
          </div>
        </ProductPriceClientLayer>
      )}
      {!product.noDeliverOption && (
        <ProductPriceClientLayer
          product={product}
          discountedValue={discountedValueStandard}
          option="discount"
          data-testid="discount-standard-price"
        >
          <SimpleBadge
            className="rounded flex-[0_1_45px]"
            badge="money"
            showTitle={false}
          />
          <div className="flex-1">
            <h5 className="text-xs mb-2">Great Value</h5>
            <div className="flex gap-2 items-center">
              <span className="text-4xl">
                {britishCurrencyFormatter(discountedPrice)}
              </span>
              <span className=" rounded py-1 px-2 bg-cyan-800 text-neutral-300 text-sm">
                {discount.toFixed(0)}% OFF!
              </span>
            </div>
          </div>
        </ProductPriceClientLayer>
      )}
    </>
  );
}
