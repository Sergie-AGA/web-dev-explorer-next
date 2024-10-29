import { render, screen, fireEvent } from "@testing-library/react";
import ProductCart from "./ProductCart";
import "@testing-library/jest-dom";
import { useCartStore } from "../../store/useCartStore";

jest.mock("../../store/useCartStore", () => ({
  __esModule: true,
  useCartStore: jest.fn(),
}));

const mockedUseCartStore = useCartStore as jest.MockedFunction<
  typeof useCartStore
>;

describe("ProductCart", () => {
  beforeEach(() => {
    mockedUseCartStore.mockReturnValue({ cart: [] });
  });

  it("renders the cart trigger button with the correct elements", () => {
    render(<ProductCart />);
    const cartTrigger = screen.getByTestId("simple-badge");
    expect(cartTrigger).toBeInTheDocument();
    expect(screen.queryByTestId("product-count")).not.toBeInTheDocument();
  });

  it("opens the cart sheet when the trigger is clicked", () => {
    render(<ProductCart />);
    fireEvent.click(screen.getByTestId("simple-badge"));
    expect(screen.getByText("Cart")).toBeInTheDocument();
  });

  it("renders CartContent within the sheet when opened", () => {
    render(<ProductCart />);
    fireEvent.click(screen.getByTestId("simple-badge"));
    expect(screen.getByText("No items in the cart...")).toBeInTheDocument();
  });

  it("closes the cart sheet when the close button is clicked", () => {
    render(<ProductCart />);
    fireEvent.click(screen.getByTestId("simple-badge"));
    const closeButtons = screen.getAllByRole("button", { name: /Close/i });
    fireEvent.click(closeButtons[0]);
    expect(screen.queryByText("Cart")).not.toBeInTheDocument();
  });
});
