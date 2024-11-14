import { render, screen } from "@testing-library/react";
import ActionableListItem, {
  ActionableListItemProps,
} from "./ActionableListItem";

describe("ActionableListItem", () => {
  const mockProps: ActionableListItemProps = {
    title: "Test Title",
    description: "This is a description",
    link: "https://example.com",
    icon: () => <div data-testid="icon">Icon</div>,
    label: "Test Label",
    labelType: "green",
    buttonText: "Click Me",
    buttonIcon: () => <div data-testid="button-icon">ButtonIcon</div>,
    isButtonDisabled: false,
  };

  it("renders the title, description, and label", () => {
    render(<ActionableListItem {...mockProps} />);
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
    expect(screen.getByText(mockProps.label)).toBeInTheDocument();
  });

  it("renders the icon component", () => {
    render(<ActionableListItem {...mockProps} />);
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("applies the correct label styles based on labelType", () => {
    const { rerender } = render(<ActionableListItem {...mockProps} />);
    expect(screen.getByText(mockProps.label)).toHaveClass(
      "bg-emerald-900 text-emerald-400"
    );

    rerender(<ActionableListItem {...mockProps} labelType="blue" />);
    expect(screen.getByText(mockProps.label)).toHaveClass(
      "bg-sky-900 text-sky-400"
    );
  });

  it("renders the button with the correct text and icon", () => {
    render(<ActionableListItem {...mockProps} />);
    expect(screen.getByText(mockProps.buttonText)).toBeInTheDocument();
    expect(screen.getByTestId("button-icon")).toBeInTheDocument();
  });

  it("disables the button when isButtonDisabled is true", () => {
    render(<ActionableListItem {...mockProps} isButtonDisabled={true} />);
    const linkElement = screen.getByRole("link");

    expect(linkElement).toHaveClass("pointer-events-none opacity-50");
  });

  it("renders the link with the correct href", () => {
    render(<ActionableListItem {...mockProps} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", mockProps.link);
  });
});
