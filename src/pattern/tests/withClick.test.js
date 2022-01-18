import { render, screen } from "@testing-library/react";
import WithClick from "../withClick";

describe("withClick", () => {
  test("should render with no errors", () => {
    render(<WithClick>{(lives) => <div>{lives}</div>}</WithClick>);
  });

  test("should contain lives", () => {
    render(<WithClick>{(lives) => <div>{lives}</div>}</WithClick>);

    const lives = screen.getByRole("textbox");

    expect(lives).toBeInTheDocument();
  });

  test("should contain data", () => {
    render(<WithClick>{(lives) => <div>{lives}</div>}</WithClick>);

    const lives = screen.getByRole("dialog");

    expect(lives).toBeInTheDocument();
  });
});
