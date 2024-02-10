import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IProduct } from "../data/products";
import Image from "next/image";
import { calculatePrice } from "../utils/calculatePrice";
import Link from "next/link";
import { britishCurrencyFormatter } from "../utils/currencyFormatter";

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

  return (
    <Link
      id={id}
      href={`/product-list-poc/${product.slug}`}
      style={{ gridArea: product.slug }}
      className={className}
    >
      <Card className="w-[100%] h-[100%] rounded-xl overflow-hidden relative bg-cyan-800 mb-4 lg:mb-0 cursor-pointer">
        <CardContent className="w-[100%] h-[100%] p-0">
          <Image
            src={`${product.images[0]}`}
            alt="product image"
            className="w-[100%] h-[100%] object-cover  hover:scale-110 duration-[0.5s]"
            width={800}
            height={800}
          />
          <div className="h-[100%] w-[100%] bg-black bg-opacity-30 z-10 absolute top-0 left-0 pointer-events-none"></div>
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
                  <span className="text-2xl font-bold bg-cyan-950 bg-opacity-75 rounded py-1 px-3">
                    {britishCurrencyFormatter(pickUpPrice)}
                  </span>
                </div>
              </>
            )
          ) : null}
        </CardHeader>
      </Card>
    </Link>
  );
}
