import { render, screen, fireEvent } from "@testing-library/react";
import ProductImages from "./ProductImages";
import "@testing-library/jest-dom";

// Mock the react-photo-album and yet-another-react-lightbox components
jest.mock("react-photo-album", () => ({
  __esModule: true,
  default: ({
    onClick,
  }: {
    onClick: ({ index }: { index: number }) => void;
  }) => (
    <div data-testid="photo-album" onClick={() => onClick({ index: 0 })}>
      Mock Photo Album
    </div>
  ),
}));

jest.mock("yet-another-react-lightbox", () => ({
  __esModule: true,
  default: ({ open, close }: { open: boolean; close: () => void }) =>
    open ? (
      <div data-testid="lightbox">
        Mock Lightbox
        <button onClick={close}>Close</button>
      </div>
    ) : null,
}));

jest.mock("yet-another-react-lightbox/plugins/fullscreen", () => ({}));
jest.mock("yet-another-react-lightbox/plugins/slideshow", () => ({}));
jest.mock("yet-another-react-lightbox/plugins/thumbnails", () => ({}));
jest.mock("yet-another-react-lightbox/plugins/zoom", () => ({}));

const mockPhotos = [
  { src: "image1.jpg", width: 800, height: 600 },
  { src: "image2.jpg", width: 800, height: 600 },
];

describe("ProductImages", () => {
  it("renders the photo album", () => {
    render(<ProductImages photos={mockPhotos} />);
    expect(screen.getByTestId("photo-album")).toBeInTheDocument();
  });

  it("opens the lightbox when a photo is clicked", () => {
    render(<ProductImages photos={mockPhotos} />);
    const photoAlbum = screen.getByTestId("photo-album");
    fireEvent.click(photoAlbum);
    expect(screen.getByTestId("lightbox")).toBeInTheDocument();
  });

  it("closes the lightbox when the close button is clicked", () => {
    render(<ProductImages photos={mockPhotos} />);
    const photoAlbum = screen.getByTestId("photo-album");
    fireEvent.click(photoAlbum);

    const closeButton = screen.getByText("Close");
    fireEvent.click(closeButton);
    expect(screen.queryByTestId("lightbox")).not.toBeInTheDocument();
  });
});
