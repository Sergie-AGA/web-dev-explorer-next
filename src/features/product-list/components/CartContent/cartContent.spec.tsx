import { render, screen, fireEvent, within } from "@testing-library/react";
import CartContent from "./CartContent";
import { ICart, useCartStore } from "../../store/useCartStore";
import { britishCurrencyFormatter } from "../../utils/currencyFormatter";
import "@testing-library/jest-dom";

jest.mock("../../utils/currencyFormatter", () => ({
  britishCurrencyFormatter: jest.fn((value) => `£${value.toFixed(2)}`),
}));

const mockRemoveFromCart = jest.fn();

beforeEach(() => {
  useCartStore.setState({
    cart: [],
    total: { total: 0, totalSavings: 0, totalSavingsPercentage: "0%" },
    removeFromCart: mockRemoveFromCart,
  });
  jest.clearAllMocks();
});

describe("CartContent", () => {
  const sampleProduct: ICart = {
    product: {
      id: "1",
      title: "Sample Product",
      description: "Description",
      slug: "sample-product",
      priceLevel: 1,
      basePrice: 100,
      status: "available",
      images: [],
      pickUpBonus: false,
    },
    option: "discount",
    finalPrice: 80,
    savings: 20,
    percentageSavings: "20%",
    isBundle: false,
  };

  it("renders empty cart message when cart is empty", () => {
    render(<CartContent />);
    expect(screen.getByText("No items in the cart...")).toBeInTheDocument();
    expect(screen.getByTestId("empty-icon")).toBeInTheDocument();
  });

  it("displays total calculations when cart has items", () => {
    useCartStore.setState({
      cart: [sampleProduct],
      total: {
        total: 80,
        totalSavings: 20,
        totalSavingsPercentage: "20%",
      },
    });
    render(<CartContent />);

    expect(screen.getByText("Total:")).toBeInTheDocument();
    expect(
      screen.getAllByText(britishCurrencyFormatter(80)).length
    ).toBeGreaterThan(0);
    expect(screen.getByText("Total Savings:")).toBeInTheDocument();
    expect(screen.getByText(britishCurrencyFormatter(20))).toBeInTheDocument();
    expect(screen.getAllByText("20% OFF").length).toBeGreaterThan(0);
  });

  it("renders product details for each item in the cart", () => {
    useCartStore.setState({
      cart: [sampleProduct],
      total: {
        total: 80,
        totalSavings: 20,
        totalSavingsPercentage: "20%",
      },
    });
    render(<CartContent />);

    const productContainer = screen
      .getByText(sampleProduct.product.title)
      .closest("div");
    expect(productContainer).toBeInTheDocument();

    const withinProduct = within(productContainer as HTMLElement);
    expect(
      withinProduct.getByText(sampleProduct.product.title)
    ).toBeInTheDocument();
    expect(
      withinProduct.getAllByText(
        britishCurrencyFormatter(sampleProduct.finalPrice)
      ).length
    ).toBeGreaterThan(0);
    expect(
      withinProduct.getByText(
        `Savings: ${britishCurrencyFormatter(sampleProduct.savings)}`
      )
    ).toBeInTheDocument();
    expect(withinProduct.getAllByText("20% OFF").length).toBeGreaterThan(0);
  });

  it("removes product from cart when trash icon is clicked", () => {
    useCartStore.setState({
      cart: [sampleProduct],
      total: {
        total: 80,
        totalSavings: 20,
        totalSavingsPercentage: "20%",
      },
      removeFromCart: mockRemoveFromCart,
    });
    render(<CartContent />);

    fireEvent.click(screen.getByLabelText(/remove item/i));
    expect(mockRemoveFromCart).toHaveBeenCalledWith(sampleProduct.product.id);
  });
});
