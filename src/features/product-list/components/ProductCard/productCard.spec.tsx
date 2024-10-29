import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";
import { IProduct } from "../../config/products";
import { britishCurrencyFormatter } from "../../utils/currencyFormatter";
import "@testing-library/jest-dom";

jest.mock("../../utils/currencyFormatter", () => ({
  britishCurrencyFormatter: jest.fn((value) => `£${value.toFixed(2)}`),
}));

const sampleProduct: IProduct = {
  id: "1",
  title: "Sample Product",
  description: "Sample product description",
  slug: "sample-product",
  priceLevel: 1,
  basePrice: 100,
  status: "available",
  images: ["/path/to/image.jpg"],
  pickUpBonus: true,
};

describe("ProductCard", () => {
  it("renders the product title if showTitle is true", () => {
    render(<ProductCard product={sampleProduct} showTitle={true} />);
    expect(screen.getByText(sampleProduct.title)).toBeInTheDocument();
  });

  it("does not render the product title if showTitle is false", () => {
    render(<ProductCard product={sampleProduct} showTitle={false} />);
    expect(screen.queryByText(sampleProduct.title)).not.toBeInTheDocument();
  });

  it("displays the pick-up price when product is available", () => {
    render(<ProductCard product={sampleProduct} />);
    const pickUpPrice = britishCurrencyFormatter(
      sampleProduct.basePrice * 0.25
    );
    expect(screen.getByText(pickUpPrice)).toBeInTheDocument();
  });

  it('displays discount label if showPrice is true and product status is "available"', () => {
    render(<ProductCard product={sampleProduct} showPrice={true} />);
    expect(
      screen.getByText((content) => content.includes("% OFF"))
    ).toBeInTheDocument();
  });

  it("renders the product image with correct src and alt attributes", () => {
    render(<ProductCard product={sampleProduct} />);
    const img = screen.getByAltText("product image");
    expect(img).toHaveAttribute(
      "src",
      expect.stringContaining("/_next/image?url=%2Fpath%2Fto%2Fimage.jpg")
    );
  });

  it("uses the placeholder image if product images are empty", () => {
    const placeholderProduct = { ...sampleProduct, images: [] };
    render(<ProductCard product={placeholderProduct} />);
    const img = screen.getByAltText("product image");
    expect(img).toHaveAttribute(
      "src",
      expect.stringContaining("question-mark-1750942_1280.png")
    );
  });
});
