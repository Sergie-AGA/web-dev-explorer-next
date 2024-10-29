import { calculatePrice } from "./calculatePrice";
import { IProduct } from "../config/products";

describe("calculatePrice", () => {
  it("calculates discounted and pickup prices with provided discount", () => {
    const product: IProduct = {
      id: "1",
      title: "Product 1",
      description: "A product",
      slug: "product-1",
      priceLevel: 3,
      discount: 0.3,
      basePrice: 100,
      status: "available",
      images: [],
      pickUpBonus: false,
    };
    const { discountedPrice, pickUpPrice } = calculatePrice(product);
    expect(discountedPrice).toBeCloseTo(70);
    expect(pickUpPrice).toBeCloseTo(70);
  });

  it("calculates discounted and pickup prices with price level discount and no pickup bonus", () => {
    const product: IProduct = {
      id: "2",
      title: "Product 2",
      description: "A product",
      slug: "product-2",
      priceLevel: 3,
      basePrice: 100,
      status: "available",
      images: [],
      pickUpBonus: false,
    };
    const { discountedPrice, pickUpPrice } = calculatePrice(product);
    expect(discountedPrice).toBeCloseTo(80);
    expect(pickUpPrice).toBeCloseTo(80);
  });

  it("calculates discounted and pickup prices with pickup bonus", () => {
    const product: IProduct = {
      id: "3",
      title: "Product 3",
      description: "A product",
      slug: "product-3",
      priceLevel: 3,
      basePrice: 100,
      status: "available",
      images: [],
      pickUpBonus: true,
    };
    const { discountedPrice, pickUpPrice } = calculatePrice(product);
    expect(discountedPrice).toBeCloseTo(80);
    expect(pickUpPrice).toBeCloseTo(60);
  });

  it("applies correct discount based on price level", () => {
    const product: IProduct = {
      id: "4",
      title: "Product 4",
      description: "A product",
      slug: "product-4",
      priceLevel: 1,
      basePrice: 100,
      status: "available",
      images: [],
      pickUpBonus: false,
    };
    const { discountedPrice, pickUpPrice } = calculatePrice(product);
    expect(discountedPrice).toBeCloseTo(45);
    expect(pickUpPrice).toBeCloseTo(45);
  });

  it("handles case with no discount or price level set", () => {
    const product: IProduct = {
      id: "5",
      title: "Product 5",
      description: "A product",
      slug: "product-5",
      priceLevel: 1,
      basePrice: 100,
      status: "available",
      images: [],
      pickUpBonus: false,
    };
    const { discountedPrice, pickUpPrice } = calculatePrice(product);
    expect(discountedPrice).toBeCloseTo(45);
    expect(pickUpPrice).toBeCloseTo(45);
  });
});
