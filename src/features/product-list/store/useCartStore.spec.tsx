import { act } from "@testing-library/react";
import { useCartStore } from "./useCartStore";
import { IProduct } from "../config/products";

describe("useCartStore", () => {
  const sampleProduct: IProduct = {
    id: "1",
    title: "Sample Product",
    description: "Description of Sample Product",
    slug: "sample-product",
    priceLevel: 1,
    basePrice: 100,
    status: "available",
    images: [],
    pickUpBonus: false,
  };

  beforeEach(() => {
    useCartStore.setState({
      cart: [],
      products: [],
      total: { total: 0, totalSavings: 0, totalSavingsPercentage: "0%" },
    });
  });

  it("initializes with default values", () => {
    const store = useCartStore.getState();
    expect(store.total).toEqual({
      total: 0,
      totalSavings: 0,
      totalSavingsPercentage: "0%",
    });
    expect(store.cart).toEqual([]);
    expect(store.products).toEqual([]);
  });

  it("adds product to cart and calculates totals", () => {
    act(() => {
      useCartStore.getState().addToCart({
        product: sampleProduct,
        option: "discount",
        finalPrice: 80,
        savings: 20,
        percentageSavings: "20%",
      });
    });

    const store = useCartStore.getState();
    expect(store.cart.length).toBe(1);
    expect(store.total.total).toBe(80);
    expect(store.total.totalSavings).toBe(20);
    expect(store.total.totalSavingsPercentage).toBe("20.00%");
  });

  it("removes product from cart and recalculates totals", () => {
    act(() => {
      useCartStore.getState().addToCart({
        product: sampleProduct,
        option: "discount",
        finalPrice: 80,
        savings: 20,
        percentageSavings: "20%",
      });
      useCartStore.getState().removeFromCart(sampleProduct.id);
    });

    const store = useCartStore.getState();
    expect(store.cart.length).toBe(0);
    expect(store.total.total).toBe(0);
    expect(store.total.totalSavings).toBe(0);
    expect(store.total.totalSavingsPercentage).toBe("0%");
  });

  it("sets products", () => {
    act(() => {
      useCartStore.getState().setProducts([sampleProduct]);
    });

    const store = useCartStore.getState();
    expect(store.products.length).toBe(1);
    expect(store.products[0]).toEqual(sampleProduct);
  });

  it("updates cart with localStorage data", () => {
    localStorage.setItem(
      "product-list-poc",
      JSON.stringify([
        {
          product: sampleProduct,
          option: "discount",
          finalPrice: 80,
          savings: 20,
          percentageSavings: "20%",
        },
      ])
    );

    act(() => {
      useCartStore.getState().getLocalStorage();
    });

    const store = useCartStore.getState();
    expect(store.cart.length).toBe(1);
    expect(store.cart[0].product).toEqual(sampleProduct);
  });

  it("saves cart data to localStorage", () => {
    act(() => {
      useCartStore.getState().addToCart({
        product: sampleProduct,
        option: "discount",
        finalPrice: 80,
        savings: 20,
        percentageSavings: "20%",
      });
      useCartStore.getState().setLocalStorage();
    });

    const savedData = JSON.parse(
      localStorage.getItem("product-list-poc") || "[]"
    );
    expect(savedData.length).toBe(1);
    expect(savedData[0].product).toEqual(sampleProduct);
  });
});
