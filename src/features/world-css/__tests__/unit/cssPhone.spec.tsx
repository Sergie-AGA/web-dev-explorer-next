import { render, screen } from "@testing-library/react";
import CssPhone from "../../components/CssPhone/CssPhone";
import "@testing-library/jest-dom";

describe("CssPhone", () => {
  it("renders without errors", () => {
    render(<CssPhone sentMessages={[]} />);
    expect(screen.getByText("My Bot")).toBeInTheDocument();
  });

  it("displays sent messages correctly", () => {
    const messages = [
      { text: "Hello, User!", sender: "bot" },
      { text: "Hi, Bot!", sender: "user" },
    ];
    render(<CssPhone sentMessages={messages} />);

    expect(screen.getByText("Hello, User!")).toBeInTheDocument();
    expect(screen.getByText("Hi, Bot!")).toBeInTheDocument();
  });

  it("assigns correct styles based on sender", () => {
    const messages = [
      { text: "Bot message", sender: "bot" },
      { text: "User message", sender: "user" },
    ];
    render(<CssPhone sentMessages={messages} />);

    const botMessage = screen.getByText("Bot message");
    const userMessage = screen.getByText("User message");

    expect(botMessage).toHaveClass("bg-teal-700");
    expect(userMessage).toHaveClass("bg-cyan-700");
  });
});
