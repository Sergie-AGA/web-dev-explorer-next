import { render, screen } from "@testing-library/react";
import SimpleTabs from "./SimpleTabs";

import "@testing-library/jest-dom";

describe("SimpleTabs Component", () => {
  const tabData = [
    { value: "tab1", title: "Tab 1" },
    { value: "tab2", title: "Tab 2" },
  ];

  it("renders the tab structure and content areas with provided tabData", () => {
    render(
      <SimpleTabs tabData={tabData} initialTab="tab1">
        <div>Content for Tab 1</div>
        <div>Content for Tab 2</div>
      </SimpleTabs>
    );

    expect(screen.getByRole("tablist")).toBeInTheDocument();
    expect(screen.getAllByRole("tab").length).toBe(tabData.length);
    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Tab 2")).toBeInTheDocument();
    expect(screen.getByText("Content for Tab 1")).toBeInTheDocument();
    expect(screen.queryByText("Content for Tab 2")).not.toBeInTheDocument();
  });

  it("displays the initial tab content by default", () => {
    render(
      <SimpleTabs tabData={tabData} initialTab="tab1">
        <div>Content for Tab 1</div>
        <div>Content for Tab 2</div>
      </SimpleTabs>
    );

    expect(screen.getByText("Content for Tab 1")).toBeInTheDocument();
    expect(screen.queryByText("Content for Tab 2")).not.toBeInTheDocument();
  });

  it("applies custom className to the TabsList", () => {
    render(
      <SimpleTabs tabData={tabData} initialTab="tab1" className="custom-class">
        <div>Content for Tab 1</div>
        <div>Content for Tab 2</div>
      </SimpleTabs>
    );

    expect(screen.getByRole("tablist")).toHaveClass("custom-class");
  });
});
