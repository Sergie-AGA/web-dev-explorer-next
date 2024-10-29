import { render, screen } from "@testing-library/react";
import ProductDetail from "./ProductDetail";
import { IProduct } from "../../config/products";
import { britishCurrencyFormatter } from "../../utils/currencyFormatter";
import "@testing-library/jest-dom";

jest.mock("../ProductImages/ProductImages", () => {
  const MockProductImages = () => (
    <div data-testid="product-images">Mocked ProductImages Component</div>
  );
  MockProductImages.displayName = "ProductImages";
  return MockProductImages;
});

jest.mock("../ProductPrice/ProductPrice", () => {
  const MockProductPrice = () => (
    <div data-testid="product-price">Mocked ProductPrice Component</div>
  );
  MockProductPrice.displayName = "ProductPrice";
  return MockProductPrice;
});

const sampleProduct: IProduct = {
  id: "1",
  title: "Sample Product",
  description: "This is a sample product description.",
  slug: "sample-product",
  priceLevel: 1,
  basePrice: 100,
  status: "available",
  images: ["https://via.placeholder.com/600"],
  pickUpBonus: true,
  originalUrl: "https://example.com",
  sellingPoints: ["High quality", "Great value"],
};

const discountedPrice = 80;
const pickUpPrice = 70;

describe("ProductDetail", () => {
  it("renders product details correctly", () => {
    render(
      <ProductDetail
        product={sampleProduct}
        discountedPrice={discountedPrice}
        pickUpPrice={pickUpPrice}
      />
    );

    expect(screen.getAllByText("Sample Product")[0]).toBeInTheDocument();
    expect(
      screen.getByText("This is a sample product description.")
    ).toBeInTheDocument();
    expect(screen.getByText("High quality")).toBeInTheDocument();
    expect(screen.getByText("Great value")).toBeInTheDocument();
    expect(screen.getByText("Back to the Product List")).toBeInTheDocument();
    expect(screen.getByText("Select Your Preference:")).toBeInTheDocument();
    expect(screen.getByText(`Original Price:`)).toBeInTheDocument();
    expect(
      screen.getByText(`${britishCurrencyFormatter(100)}`)
    ).toBeInTheDocument();
  });

  it("shows original product link if present", () => {
    render(
      <ProductDetail
        product={sampleProduct}
        discountedPrice={discountedPrice}
        pickUpPrice={pickUpPrice}
      />
    );

    const originalLink = screen.getByText("Original Product Link");
    expect(originalLink).toBeInTheDocument();
    expect(originalLink).toHaveAttribute("href", sampleProduct.originalUrl);
  });

  it('displays "SOLD OUT" when product status is sold', () => {
    const soldProduct: IProduct = { ...sampleProduct, status: "sold" };
    render(
      <ProductDetail
        product={soldProduct}
        discountedPrice={discountedPrice}
        pickUpPrice={pickUpPrice}
      />
    );

    expect(screen.getByText("SOLD OUT")).toBeInTheDocument();
  });

  it('displays "coming soon" message when product status is soon', () => {
    const comingSoonProduct: IProduct = { ...sampleProduct, status: "soon" };
    render(
      <ProductDetail
        product={comingSoonProduct}
        discountedPrice={discountedPrice}
        pickUpPrice={pickUpPrice}
      />
    );

    expect(screen.getByText("Item coming soon...")).toBeInTheDocument();
  });

  it("renders mocked product images component", () => {
    render(
      <ProductDetail
        product={sampleProduct}
        discountedPrice={discountedPrice}
        pickUpPrice={pickUpPrice}
      />
    );

    expect(screen.getByTestId("product-images")).toBeInTheDocument();
  });

  it("renders mocked product price component", () => {
    render(
      <ProductDetail
        product={sampleProduct}
        discountedPrice={discountedPrice}
        pickUpPrice={pickUpPrice}
      />
    );

    expect(screen.getByTestId("product-price")).toBeInTheDocument();
  });

  it("renders discount information correctly", () => {
    render(
      <ProductDetail
        product={sampleProduct}
        discountedPrice={discountedPrice}
        pickUpPrice={pickUpPrice}
      />
    );

    expect(
      screen.getByText(/Buy multiple items for an additional Bundle Discount/)
    ).toBeInTheDocument();
  });
});
