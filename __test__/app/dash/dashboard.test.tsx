import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dashboard from "@/app/dash/dashboard";

describe("Dashboard", () => {
  it("Should have deisabled button", () => {
    render(<Dashboard />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
  it("should have a p tag of class blue", () => {
    render(<Dashboard />);
    const pElement = screen.getByTestId("paragraph-blue");
    expect(pElement).toHaveClass("blue");
  });

  //   it("Should render with a div element", () => {
  //     render(<Dashboard />);
  //     const divElement = screen.getByRole("div");
  //     expect(divElement).toBeInTheDocument();
  //   });
});
