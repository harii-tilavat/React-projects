import { render, screen } from "@testing-library/react";
import Greetings from "./Greetings";
import userEvent from "@testing-library/user-event";
describe('Greeting Component.', () => {
    test('renders Hello world as a text', () => {
        // Arrange
        render(<Greetings />);

        // Act  
        // ... Nothing

        // Assert
        const helloWorldElement = screen.getByText("Hello world", { exact: false });
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders "good to see you" if button was NOT clicked.', () => {
        render(<Greetings />);

        const outputElement = screen.getByText("good to see you", { exact: false })
        expect(outputElement).toBeInTheDocument();
    });
    test('renders "Changed!" if button was clicked.', () => {
        render(<Greetings />);

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        userEvent.click(buttonElement);

        const outputElement = screen.getByText("Changed!");
        expect(outputElement).toBeInTheDocument();
    });
    test('should not render "good to see you if button was clicked"', () => {
        render(<Greetings />);

        const buttonElement = screen.getByRole("button");
        userEvent.click(buttonElement);
        const outputElement = screen.queryByText("good to see you", { exact: false });
        expect(outputElement).toBeNull();
        // expect(outputElement).not.toBeInTheDocument(); 
    })
})