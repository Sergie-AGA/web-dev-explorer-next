import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IProduct } from "../data/products";
import Image from "next/image";
import { calculatePrice } from "../utils/calculatePrice";
import Link from "next/link";
import { britishCurrencyFormatter } from "../utils/currencyFormatter";
import { imagePlaceholder } from "../data/products";
import { cn } from "@/utils/utils";

interface IProductCard {
  product: IProduct;
  id?: string;
  showTitle?: boolean;
  showPrice?: boolean;
  className?: string;
}

export default function ProductCard({
  product,
  id,
  showTitle = true,
  showPrice = true,
  className,
}: IProductCard) {
  const { pickUpPrice } = calculatePrice(product);
  const discount =
    ((product.basePrice - pickUpPrice) / product.basePrice) * 100;

  return (
    <Link
      id={id}
      href={`/product-list-poc/${product.slug}`}
      style={{ gridArea: product.slug }}
      className={cn(className, "relative")}
    >
      <Card className="lg:max-w-[unset] w-[100%] h-[100%] rounded-xl overflow-hidden relative bg-cyan-800 mb-4 lg:mb-0 cursor-pointer">
        <CardContent className="w-[100%] h-[100%] p-0">
          <Image
            src={`${product.images?.[0] || imagePlaceholder}`}
            alt="product image"
            className="w-[100%] h-[100%] object-cover  hover:scale-110 duration-[0.5s]"
            width={800}
            height={800}
          />
          <div
            className={cn(
              "h-[100%] w-[100%] bg-black bg-opacity-30 z-10 absolute top-0 left-0 pointer-events-none",
              { "bg-opacity-80": product.status === "sold" }
            )}
          ></div>
        </CardContent>
        <CardHeader className="absolute py-1 px-3 rounded-xl bottom-2 left-2 max-w-[calc(100%-16px)] z-50 items-start">
          {showTitle && (
            <CardTitle className="text-lg">{product.title}</CardTitle>
          )}

          {showPrice ? (
            product.status == "sold" ? (
              <p className="bg-neutral-800 py-1 px-2 text-lg inline-block rounded">
                SOLD OUT
              </p>
            ) : (
              <>
                {product.status == "soon" && (
                  <p className="bg-neutral-800 py-1 px-2 text-sm inline-block rounded">
                    Available soon
                  </p>
                )}

                <div className="flex align-center gap-4 ">
                  <small>from:</small>
                  <span className="text-2xl font-bold bg-cyan-950 bg-opacity-75 rounded py-2 px-2 leading-4">
                    {britishCurrencyFormatter(pickUpPrice)}
                  </span>
                </div>
              </>
            )
          ) : null}
        </CardHeader>
      </Card>
      {showPrice && product.status == "available" && (
        <span className="absolute top-2 right-2 bg-cyan-950 rounded px-2 py-1 font-bold z-50">
          {discount.toFixed(0)}% OFF
        </span>
      )}
    </Link>
  );
}
