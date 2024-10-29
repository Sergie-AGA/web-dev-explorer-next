import { render, screen, fireEvent, act } from "@testing-library/react";
import ProductPriceClientLayer from "./ProductPriceClientLayer";
import { IProduct } from "../../config/products";
import { useCartStore } from "../../store/useCartStore";

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

describe("ProductPriceClientLayer", () => {
  beforeEach(() => {
    useCartStore.setState({
      cart: [],
      total: { total: 0, totalSavings: 0, totalSavingsPercentage: "0%" },
      products: [],
    });
  });

  it("renders children and adds item to cart when clicked", () => {
    render(
      <ProductPriceClientLayer
        product={mockProduct}
        discountedValue={10}
        option="discount"
      >
        <div>Child Element</div>
      </ProductPriceClientLayer>
    );

    const listItem = screen.getByRole("listitem");
    act(() => {
      fireEvent.click(listItem);
    });

    const state = useCartStore.getState();
    expect(state.cart).toEqual([
      {
        product: mockProduct,
        option: "discount",
        finalPrice: 90,
        savings: 10,
        percentageSavings: "10%",
        isBundle: false, // Include the isBundle property in the expected object
      },
    ]);
  });

  it("removes item from cart if option matches", () => {
    useCartStore.setState({
      cart: [
        {
          product: mockProduct,
          option: "discount",
          finalPrice: 90,
          savings: 10,
          percentageSavings: "10%",
          isBundle: false,
        },
      ],
    });

    render(
      <ProductPriceClientLayer
        product={mockProduct}
        discountedValue={10}
        option="discount"
      >
        <div>Child Element</div>
      </ProductPriceClientLayer>
    );

    const listItem = screen.getByRole("listitem");
    act(() => {
      fireEvent.click(listItem);
    });

    const state = useCartStore.getState();
    expect(state.cart).toEqual([]);
  });

  it("swaps option if item is already in cart with a different option", () => {
    useCartStore.setState({
      cart: [
        {
          product: mockProduct,
          option: "pickUp",
          finalPrice: 90,
          savings: 10,
          percentageSavings: "10%",
          isBundle: false,
        },
      ],
    });

    render(
      <ProductPriceClientLayer
        product={mockProduct}
        discountedValue={10}
        option="discount"
      >
        <div>Child Element</div>
      </ProductPriceClientLayer>
    );

    const listItem = screen.getByRole("listitem");
    act(() => {
      fireEvent.click(listItem);
    });

    const state = useCartStore.getState();
    expect(state.cart[0].option).toBe("discount");
    expect(state.cart).toHaveLength(1);
  });
});
