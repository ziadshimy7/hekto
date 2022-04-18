import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import FeaturedProducts from "../FeaturedProducts";

describe("<FeaturedProducts/>", () => {
  it("should render 4 items", () => {
    render(<FeaturedProducts />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(4);
  });
  it("each card should show a display button when hovered over", async () => {
    render(<FeaturedProducts />);
    const listItems = screen.getAllByRole("listitem");
    fireEvent.mouseOver(listItems[0]);
    const buttonElements = await screen.findAllByRole("button");
    expect(buttonElements[0]).toBeVisible();
  });
});
