import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import Navbar from "../Navbar";

describe("<Navbar />", () => {
  it("renders the component when page starts", () => {
    render(<Navbar />);
    const linkElements = screen.getAllByRole("listitem");
    expect(linkElements.length).toBe(6);
  });
  it("checks if only the main list is rendered when we render the navbar", () => {
    render(<Navbar />);
    const list = screen.getAllByRole("list");
    expect(list.length).toBe(1);
  });
  it("sub menu is triggered when we press the hamburger menu", () => {
    render(<Navbar />);
    const hamburgerElement = screen.getByRole("button");
    fireEvent.click(hamburgerElement);
    const list = screen.getByTestId("sub-list");
    expect(list).toBeInTheDocument();
  });
});
