import { render, screen, fireEvent } from "@testing-library/react";
import CssPhoneContainer from "../../components/CssPhone/CssPhoneContainer";
import "@testing-library/jest-dom";

describe("CssPhoneContainer", () => {
  it("should add a user message when the button is clicked", () => {
    render(<CssPhoneContainer />);
    const userInput = screen.getByLabelText("User Message");
    const sendUserButton = screen.getByText("Send User Message");

    fireEvent.change(userInput, { target: { value: "Hello from user" } });
    fireEvent.click(sendUserButton);

    expect(screen.getByText("Hello from user")).toBeInTheDocument();
    expect((userInput as HTMLInputElement).value).toBe("");
  });

  it("should add a bot message when the button is clicked", () => {
    render(<CssPhoneContainer />);
    const botInput = screen.getByLabelText("Bot Message");
    const sendBotButton = screen.getByText("Send Bot Message");

    fireEvent.change(botInput, { target: { value: "Hello from bot" } });
    fireEvent.click(sendBotButton);

    expect(screen.getByText("Hello from bot")).toBeInTheDocument();
    expect((botInput as HTMLInputElement).value).toBe("");
  });

  it("should render both user and bot messages correctly", () => {
    render(<CssPhoneContainer />);
    const userInput = screen.getByLabelText("User Message");
    const sendUserButton = screen.getByText("Send User Message");
    const botInput = screen.getByLabelText("Bot Message");
    const sendBotButton = screen.getByText("Send Bot Message");

    fireEvent.change(userInput, { target: { value: "User says hi" } });
    fireEvent.click(sendUserButton);

    fireEvent.change(botInput, { target: { value: "Bot says hello" } });
    fireEvent.click(sendBotButton);

    expect(screen.getByText("User says hi")).toBeInTheDocument();
    expect(screen.getByText("Bot says hello")).toBeInTheDocument();
  });
});
