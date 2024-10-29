import React from "react";

import { IProduct } from "../../config/products";
import Link from "next/link";
import ProductPrice from "../ProductPrice/ProductPrice";
import ProductImages from "../ProductImages/ProductImages";
import { britishCurrencyFormatter } from "../../utils/currencyFormatter";
import { imagePlaceholder } from "../../config/products";
import { IconArrowLeft, IconInfoCircle } from "@tabler/icons-react";

interface IProductModal {
  product: IProduct;
  discountedPrice: number;
  pickUpPrice: number;
}

export default function ProductDetail({
  product,
  discountedPrice,
  pickUpPrice,
}: IProductModal) {
  const photos = product.images?.length
    ? product.images.map((image) => {
        return {
          src: `${image}`,
          width: 600,
          height: 600,
        };
      })
    : [
        {
          src: imagePlaceholder,
          width: 600,
          height: 600,
        },
      ];

  return (
    <main>
      <Link
        href={`/product-list-poc`}
        className="flex items-center mb-4 hover:underline inline-flex"
      >
        <IconArrowLeft size={24} color="currentColor" />
        Back to the Product List
      </Link>

      <div className="bg-cyan-950 flex flex-col lg:flex-row gap-8">
        <h1 className="lg:hidden text-2xl">{product.title}</h1>

        <div className="flex-[0_1_60%]">
          <ProductImages photos={photos} />
        </div>
        <div className="flex-[1_0_40%]">
          <div className="mb-6">
            <h1 className="hidden lg:block text-2xl mb-4">{product.title}</h1>

            <p className="text-neutral-300 mb-4 text-">{product.description}</p>

            {product.originalUrl && (
              <a
                href={product.originalUrl}
                target="_blank"
                className="px-2 py-1 bg-cyan-800 hover:bg-cyan-700  active:scale-95 scale rounded mb-4 inline-block text-sm"
              >
                Original Product Link
              </a>
            )}
            <ul>
              {product.sellingPoints?.map((value, index) => {
                return (
                  <li key={index} className="list-disc list-inside">
                    {value}
                  </li>
                );
              })}
              <li></li>
            </ul>
          </div>

          {product.status == "sold" ? (
            <p className="bg-neutral-800 py-1 px-2 text-lg inline-block rounded">
              SOLD OUT
            </p>
          ) : (
            <ul className="flex flex-col gap-4">
              {product.status == "soon" && (
                <p className="bg-neutral-800 py-1 px-2 text-lg inline-block rounded">
                  Item coming soon...
                </p>
              )}
              <h3 className="text-xl">Select Your Preference:</h3>
              <h5 className="text-xs">
                Original Price:{" "}
                <span className="line-through">
                  {britishCurrencyFormatter(product.basePrice)}
                </span>
              </h5>
              <ProductPrice
                product={product}
                discountedPrice={discountedPrice}
                pickUpPrice={pickUpPrice}
              ></ProductPrice>

              <div className="flex gap-2">
                <IconInfoCircle size={24} color="currentColor" />

                <div className="flex-1">
                  <p className="text-xs">
                    Buy multiple items for an additional Bundle Discount - 10%
                    off the cheapest items of the cart (applies to more than one
                    item and is based on the original price).
                  </p>
                  <p className="text-xs">
                    All items will be cleaned before being handed over. For
                    additional pictures, info and to buy the product, please
                    contact the seller.
                  </p>
                </div>
              </div>
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}
