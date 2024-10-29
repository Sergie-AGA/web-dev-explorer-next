import { render, screen, fireEvent } from "@testing-library/react";
import SearchInput from "./SearchInput";
import "@testing-library/jest-dom";

describe("SearchInput Component", () => {
  const handleSearchMock = jest.fn();

  beforeEach(() => {
    handleSearchMock.mockClear();
  });

  it("renders the input with the provided placeholder", () => {
    render(
      <SearchInput
        searchValue=""
        handleSearch={handleSearchMock}
        placeholder="Type to search..."
      />
    );
    const input = screen.getByTestId("search-input");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder", "Type to search...");
  });

  it("calls handleSearch with the input text on change", () => {
    render(<SearchInput searchValue="" handleSearch={handleSearchMock} />);
    const input = screen.getByTestId("search-input");

    fireEvent.change(input, { target: { value: "Test search" } });
    expect(handleSearchMock).toHaveBeenCalledWith("Test search");
  });

  it("shows the clear icon (IconX) when there is a search value", () => {
    render(<SearchInput searchValue="Test" handleSearch={handleSearchMock} />);
    expect(screen.getByTestId("clear-icon")).toBeInTheDocument();
  });

  it("shows the search icon (IconSearch) when there is no search value", () => {
    render(<SearchInput searchValue="" handleSearch={handleSearchMock} />);
    expect(screen.getByTestId("search-icon")).toBeInTheDocument();
  });

  it("clears the search input when the clear icon is clicked", () => {
    render(<SearchInput searchValue="Test" handleSearch={handleSearchMock} />);
    const clearIcon = screen.getByTestId("clear-icon");

    fireEvent.click(clearIcon);
    expect(handleSearchMock).toHaveBeenCalledWith("");
  });
});
