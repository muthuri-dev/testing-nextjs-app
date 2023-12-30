import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "@/components/Button";

describe("Button Component", () => {
  it("Should have button ", () => {
    render(
      <Button
        children={undefined}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  // The Button component should call the onClick function when clicked

  it("Should call the onClick function when clicked", () => {
    const onClick = jest.fn();
    render(<Button children="Click me" onClick={onClick} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
