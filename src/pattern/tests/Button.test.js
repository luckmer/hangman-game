import Button from "../Button";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
  test("should render with no errors", () => {
    render(<Button onClick={() => {}} />);
  });

  test("should contain button", () => {
    render(<Button onClick={() => {}} />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
});
