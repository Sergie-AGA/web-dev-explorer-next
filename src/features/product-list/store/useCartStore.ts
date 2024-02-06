import { create } from 'zustand'
import { IProduct } from '../data/products'

interface ICartState {
    total: ITotal;
    cart: ICart[];
    products: IProduct[];
    setProducts: (products: IProduct[]) => void;
    addToCart: (ProductData: ICart) => void;
    removeFromCart: (id: string) => void;
    swapOption: (id: string) => void;
    calculateTotals: () => void;
}

interface ICart {
    product: IProduct;
    option: IOption;
    finalPrice: number;
    savings: number;
    percentageSavings: string;
    isBundle?: boolean;
}

type IOption = 'discount' | 'pickUp';

interface ITotal {
    total: number;
    totalSavings: number;
    totalSavingsPercentage: string;
}

export const useCartStore = create<ICartState>()((set, get) => ({
    total: {
        total: 0,
        totalSavings: 0,
        totalSavingsPercentage: '0%',
    },
    cart: [

    ],
    products: [

    ],
    calculateTotals: () => {
        const { cart } = get();

        const mostExpensiveItem = cart.reduce((prev, current) => (prev.finalPrice < current.finalPrice) ? current : prev, cart[0]);

        const updatedCart = cart.map(cartItem => {
            return {
                ...cartItem,
                isBundle: cartItem.product.id !== mostExpensiveItem.product.id ? true : false,
            }
        });


        set((state) => ({
            cart: [
                ...updatedCart,
            ],
        }));

        const { total, totalSavings, basePrice } = updatedCart.reduce(
            (accumulator, currentItem) => {
                const bundleSavings = currentItem.isBundle ? currentItem.product.basePrice * 0.1 : 0

                accumulator.total += currentItem.finalPrice - bundleSavings;
                accumulator.totalSavings += currentItem.savings + bundleSavings;
                accumulator.basePrice += currentItem.product.basePrice;
                return accumulator;
            },
            { total: 0, totalSavings: 0, basePrice: 0 }
        );

        const totalSavingsPercentage = (((totalSavings / basePrice) * 100)).toFixed(2) + '%';


        set((state) => ({
            total: {
                total,
                totalSavings,
                totalSavingsPercentage,
            }
        }));
    },

    setProducts: (products) => {
        set((state) => ({
            products: [...products]
        }));
    },

    addToCart: ({ product, option, finalPrice, savings, percentageSavings, isBundle = false }) => {
        const { calculateTotals } = get();

        set((state) => ({
            cart: [
                ...state.cart,
                {
                    product,
                    option,
                    finalPrice,
                    savings,
                    percentageSavings,
                    isBundle
                },
            ],
        }));

        calculateTotals()
    },

    removeFromCart: (id) => {
        const { calculateTotals } = get();

        set((state) => ({
            cart: state.cart.filter(item => item.product.id !== id)
        }));

        calculateTotals()
    },

    swapOption: (id) => {
        set((state) => ({
            cart: state.cart.filter(item => item.product.id !== id)
        }));
    }
}))
