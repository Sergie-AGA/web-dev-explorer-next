import { render, screen } from "@testing-library/react";
import ProductCount from "./ProductCount";
import "@testing-library/jest-dom";
import { useCartStore } from "../../store/useCartStore";
import { IProduct } from "../../config/products";

const mockProduct: IProduct = {
  id: "1",
  title: "Sample Product",
  description: "Sample Description",
  slug: "sample-product",
  priceLevel: 1,
  basePrice: 100,
  status: "available",
  images: [],
  pickUpBonus: true,
};

describe("ProductCount", () => {
  beforeEach(() => {
    useCartStore.setState({ cart: [] });
  });

  it("does not render when the cart is empty", () => {
    render(<ProductCount className="custom-class" />);
    expect(screen.queryByTestId("product-count")).not.toBeInTheDocument();
  });

  it("renders the correct count when items are in the cart", () => {
    useCartStore.setState({
      cart: [
        {
          product: mockProduct,
          option: "pickUp",
          finalPrice: 90,
          savings: 10,
          percentageSavings: "10%",
        },
      ],
    });
    render(<ProductCount className="custom-class" />);

    const productCount = screen.getByTestId("product-count");
    expect(productCount).toBeInTheDocument();
    expect(productCount).toHaveTextContent("1");
  });
});
