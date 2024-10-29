import { render, screen } from "@testing-library/react";
import ProductPrice from "./ProductPrice";
import React from "react";
import { IProduct } from "../../config/products";
import { britishCurrencyFormatter } from "../../utils/currencyFormatter";
import "@testing-library/jest-dom";

const mockProduct: IProduct = {
  id: "1",
  title: "Sample Product",
  description: "This is a sample product",
  slug: "sample-product",
  priceLevel: 1,
  basePrice: 100,
  status: "available",
  images: ["/path/to/image.jpg"],
  pickUpBonus: true,
  sellingPoints: ["Affordable", "Eco-friendly"],
};

describe("ProductPrice", () => {
  it("renders the correct pick-up price and discount badge when pick-up discount differs", () => {
    const pickUpPrice = 70;
    const discountedPrice = 80;

    render(
      <ProductPrice
        product={mockProduct}
        discountedPrice={discountedPrice}
        pickUpPrice={pickUpPrice}
      />
    );

    const pickUpPriceElement = screen.getByText(
      britishCurrencyFormatter(pickUpPrice)
    );
    const pickUpDiscountBadge = screen.getByText("30% OFF!");
    expect(pickUpPriceElement).toBeInTheDocument();
    expect(pickUpDiscountBadge).toBeInTheDocument();
  });

  it("renders the correct standard discount price and badge", () => {
    const pickUpPrice = 80;
    const discountedPrice = 75;

    render(
      <ProductPrice
        product={{ ...mockProduct, noDeliverOption: false }}
        discountedPrice={discountedPrice}
        pickUpPrice={pickUpPrice}
      />
    );

    const discountedPriceElement = screen.getByText(
      britishCurrencyFormatter(discountedPrice)
    );
    const discountBadge = screen.getByText("25% OFF!");
    expect(discountedPriceElement).toBeInTheDocument();
    expect(discountBadge).toBeInTheDocument();
  });

  it("does not render pick-up discount section when pick-up and standard discounts are equal", () => {
    const pickUpPrice = 80;
    const discountedPrice = 80;

    render(
      <ProductPrice
        product={mockProduct}
        discountedPrice={discountedPrice}
        pickUpPrice={pickUpPrice}
      />
    );

    expect(
      screen.queryByText("Ultra Savings when you pick it up in Liverpool")
    ).not.toBeInTheDocument();
  });

  it("does not render the standard discount section when noDeliverOption is true", () => {
    render(
      <ProductPrice
        product={{ ...mockProduct, noDeliverOption: true }}
        discountedPrice={75}
        pickUpPrice={70}
      />
    );

    expect(screen.queryByText("Great Value")).not.toBeInTheDocument();
  });
});
