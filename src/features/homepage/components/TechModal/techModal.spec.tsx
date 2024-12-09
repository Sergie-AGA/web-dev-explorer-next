import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import TechModal from "@/features/homepage/components/TechModal/TechModal";
import { useUIStore } from "@/features/homepage/store/useUIStore";

jest.mock("@/features/homepage/store/useUIStore", () => ({
  useUIStore: jest.fn(),
}));

jest.mock("@/config/technologies", () => ({
  technologies: {
    frontend: [
      {
        title: "React",
        link: "https://reactjs.org",
        description: "A JS library",
      },
      {
        title: "Next JS",
        link: "https://nextjs.org/",
        description: "A React Meta Framework",
      },
    ],
    backend: [
      {
        title: "Node.js",
        link: "https://nodejs.org",
        description: "A backend runtime",
      },
    ],
    other: [
      {
        title: "REST API",
        link: "https://restapi.org",
        description: "An API standard",
      },
    ],
  },
}));

const mockSetActiveTech = jest.fn();

describe("TechModal Component", () => {
  beforeEach(() => {
    (useUIStore as jest.MockedFunction<typeof useUIStore>).mockReturnValue({
      activeTech: { tech: "React", type: "frontend" },
      setActiveTech: mockSetActiveTech,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders Technologies header", () => {
    render(<TechModal />);
    expect(screen.getByText("Technologies")).toBeInTheDocument();
  });

  it("renders all frontend technology badges", async () => {
    render(<TechModal />);

    expect(screen.getByText("Next JS")).toBeInTheDocument();
  });

  it("displays tech details when a frontend tech badge is selected", async () => {
    render(<TechModal />);
    await act(async () => {
      fireEvent.click(screen.getAllByText("React")[0]);
    });
    expect(screen.getByText("A JS library")).toBeInTheDocument();
  });
});
