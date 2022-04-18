import { screen, render } from "@testing-library/react";
import UniqueFeatures from "../UniqueFeatures";
import "@testing-library/jest-dom";
describe("<UniqueFeatures/>", () => {
  it("renders on the screen", () => {
    render(<UniqueFeatures />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveTextContent(/Add To Cart/i);
  });
});
