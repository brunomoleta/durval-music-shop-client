import { products } from "../../mocks/ProductCard/renderProduct.route.mock.ts";

import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
import ProductsList from "../../../components/AllProducts/ProductsList";

describe("List of Product Cards", () => {
  render(
    <BrowserRouter>
        <ProductsList products={products} />
    </BrowserRouter>,
  );
  test("Renders list of all items correctly", () => {
    const cards = screen.getAllByRole("link");
    expect(cards).toHaveLength(products.length);

    cards.forEach((card, index) => {
      expect(card).toHaveTextContent(products[index].name);
    });
  });
});
