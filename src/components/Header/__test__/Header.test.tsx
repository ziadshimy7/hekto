import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";
describe("<Header />", () => {
  it("checks if the component is rendered", () => {
    render(<Header />);
    const headerText = screen.getByText(/New Furniture Collection/i);
    expect(headerText).toBeInTheDocument();
  });
});
