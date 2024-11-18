import { render, screen } from "@testing-library/react";
import SimpleBadge from "./SimpleBadge";
import "@testing-library/jest-dom";

describe("SimpleBadge", () => {
  it("renders the badge with the correct title and icon", () => {
    render(<SimpleBadge badge="tool" />);

    expect(screen.getByText("tool")).toBeInTheDocument();
  });

  it("does not show title when showTitle is false", () => {
    render(<SimpleBadge badge="concept" showTitle={false} />);

    expect(screen.queryByText("concept")).not.toBeInTheDocument();
  });

  it("applies custom class name", () => {
    render(<SimpleBadge badge="exploration" className="custom-class" />);

    expect(screen.getByText("exploration").parentElement).toHaveClass(
      "custom-class"
    );
  });
});
