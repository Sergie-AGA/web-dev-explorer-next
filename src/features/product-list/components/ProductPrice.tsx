import SimpleBadge from "@/components/Badges/SimpleBadge";

import { IProduct } from "../data/products";
import ProductPriceClientLayer from "./ProductPriceClientLayer";

interface IProductModal {
    product: IProduct;
    discountedPrice: number;
    pickUpPrice: number;
  }

export default function ProductPrice({ product, discountedPrice, pickUpPrice }: IProductModal) {
    const discount = ((product.basePrice - discountedPrice) / product.basePrice) * 100;
    const pickUpDiscount = ((product.basePrice - pickUpPrice) / product.basePrice) * 100;
    
    const discountedValueStandard = product.basePrice - discountedPrice
    const discountedValuePickUp = product.basePrice - pickUpPrice

return (
    <>
            {
(pickUpDiscount !== discount) &&    
             <ProductPriceClientLayer
                 product={product} discountedValue={discountedValuePickUp} option='pickUp'
                 >
                    <SimpleBadge className="rounded flex-[0_1_45px]" badge="IconCar" showTitle={false} />
      
                <div className="flex-1">
                    <h5 className="text-xs mb-2">Ultra Savings when you pick it up in Liverpool</h5>
                    <div className="flex gap-2 items-center">

                    <span className="text-4xl">£{pickUpPrice}
                    </span>
                    <span className=" rounded py-1 px-2 bg-cyan-800 text-neutral-300 text-sm">{pickUpDiscount}% OFF!</span>
                    </div>

                </div>
                </ProductPriceClientLayer>
}
                <ProductPriceClientLayer
                 product={product} discountedValue={discountedValueStandard}  option='discount'
                 >
                        

    <SimpleBadge className="rounded flex-[0_1_45px]" badge="IconReportMoney" showTitle={false} />
                <div className="flex-1">
                    <h5 className="text-xs mb-2">Great Value</h5>
                    <div className="flex gap-2 items-center">


                    <span className="text-4xl">£{discountedPrice}
                    </span>
                    <span className=" rounded py-1 px-2 bg-cyan-800 text-neutral-300 text-sm">{discount}% OFF!</span>
                    </div>
                </div>
                </ProductPriceClientLayer>
    </>
)
}
