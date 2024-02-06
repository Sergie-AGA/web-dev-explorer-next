'use client'

import { useCartStore } from "../store/useCartStore";
import ProductCard from "./ProductCard";
import {IconTrash } from "@tabler/icons-react"


export default function CartContent() {
    const {cart, removeFromCart, total} = useCartStore(state => {
        return {
            cart:state.cart,
            removeFromCart:state.removeFromCart,
            total:state.total
        }
    })

    if (cart.length  == 0) {
        return (
            <div className="my-2">No items in the cart...</div>
        )
    }

    return (
        <div className="flex flex-col gap-4 mb-4">
            {
(total.total > 0) &&
                <div className="border-b-2 border-white border-solid pb-2">
                <h2 className="text-lg flex items-center">Total: £<span className="text-lg">{total.total}</span></h2>
                <h3 className="text-sm flex items-center">Total Savings: £<span className="text-sm">{total.totalSavings}</span></h3>
                <h3 className="text-sm flex items-center"><span className="text-sm">{total.totalSavingsPercentage} OFF</span></h3>
            </div>
            }
                    {cart.map((product) => (
                        
                        <div className="p-4 flex gap-4 bg-cyan-950 rounded relative">
                        {(product.option == 'pickUp' || product.isBundle) &&
                         <div className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center gap-2 w-[100%]">
                            {
product.option == 'pickUp' &&
                            <small className="px-1 text-xs rounded bg-cyan-800">Pick Up Item</small>
                            }
                            {
                                product.isBundle &&
                                <small className="px-1 text-xs rounded bg-yellow-600">Bundle discount</small>
                            }
                         </div>}
                            <div className="flex-[1_1_40%]">

                            <ProductCard product={product.product} key={product.product.id} showTitle={false} showPrice={false} className="aspect-square mb-2 block" />
                            </div>
                            <div className="flex-[1_1_60%] ">
                              <h3 className="text-sm font-bold mb-2">{product.product.title}</h3>

                            <span className="block text-3xl text-neutral-200 rounded mb-2">
                                £{product.isBundle ?product.finalPrice - (product.product.basePrice * 0.1)  :  product.finalPrice}
                                </span>
                                <span className="block text-sm text-neutral-200">
                                Savings: £{product.isBundle ? product.savings + (product.product.basePrice * 0.1) : product.savings}
                                </span>
                                <span className="block text-sm text-neutral-200">
                                    {product.isBundle ? 
                                (((product.savings + (product.product.basePrice * 0.1)) / product.product.basePrice) * 100).toFixed(0) + '%' : product.percentageSavings } OFF</span>
                            </div>
                            <IconTrash onClick={() => removeFromCart(product.product.id)} className="cursor-pointer" />
                        </div>
            ))}
            {/* {   <pre>{JSON.stringify(cart, null, 2)}</pre>} */}
        </div>
        
    )
}
