import { screen, render } from "@testing-library/react";
import Offers from "../Offers";

describe("<Offers />", () => {
  it("renders component", () => {
    render(<Offers />);
    const headingElement = screen.getByText(/What Hekto offer/i);
    expect(headingElement).toBeTruthy();
  });
});
