import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AboutModal from "@/features/homepage/components/AboutModal/AboutModal";
import { useUIStore } from "@/features/homepage/store/useUIStore";
import "@testing-library/jest-dom";

describe("AboutModal Component", () => {
  it("should render the modal content when triggered", async () => {
    render(
      <AboutModal>
        <button>Open Modal</button>
      </AboutModal>
    );

    const triggerButton = screen.getByRole("button", { name: /open modal/i });
    fireEvent.click(triggerButton);

    await waitFor(() =>
      expect(
        screen.getByText(/this is a project that aims/i)
      ).toBeInTheDocument()
    );
  });

  it("should display technologies and allow interaction with each badge", () => {
    render(
      <AboutModal>
        <button>Open Modal</button>
      </AboutModal>
    );

    fireEvent.click(screen.getByRole("button", { name: /open modal/i }));

    const supabaseBadge = screen.getByText(/supabase/i);
    fireEvent.click(supabaseBadge);
    expect(useUIStore.getState().activeTech).toEqual({
      tech: "Supabase",
      type: "backend",
    });
  });

  it("should render Github button with correct link", async () => {
    render(
      <AboutModal>
        <button>Open Modal</button>
      </AboutModal>
    );

    fireEvent.click(screen.getByRole("button", { name: /open modal/i }));

    await waitFor(() =>
      expect(screen.getByRole("link", { name: /github/i })).toBeInTheDocument()
    );

    const githubButton = screen.getByRole("link", { name: /github/i });
    expect(githubButton).toHaveAttribute(
      "href",
      "https://github.com/Sergie-AGA/web-dev-explorer-next"
    );
  });
});
