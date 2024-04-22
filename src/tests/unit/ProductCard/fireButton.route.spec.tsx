import { describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import CartButton from "../../../components/Cart/CartButton";
import { handleButtonClick } from "../../mocks/ProductCard/handleButtonClick.route.mock.ts";
import { products } from "../../mocks/ProductCard/renderProduct.route.mock.ts";

describe("Feat: Fire ProductCard button", () => {
  test("Card button should fire a click event.", () => {
    render(<CartButton item={products[0]} onClick={handleButtonClick} />);
    const addToCartBtn = screen.getByTitle("adicionar ao carrinho");

    expect(addToCartBtn);
    fireEvent.click(addToCartBtn);

    expect(handleButtonClick).toHaveBeenCalledOnce();
  });
});
