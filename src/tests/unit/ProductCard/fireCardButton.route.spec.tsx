import { describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "../../../providers/UserContext";
import CartButton from "../../../components/Cart/CartButton";
import { handleButtonClick } from "../../mocks/ProductCard/handleButtonClick.route.mock.ts";
import { products } from "../../mocks/ProductCard/renderProduct.route.mock.ts";

const { guitar } = products;

describe("Fire ProductCard button", () => {
  test("Card button should fire a click event.", () => {
    render(
      <BrowserRouter>
        <UserProvider>
          <CartButton item={guitar} onClick={handleButtonClick} />)
        </UserProvider>
      </BrowserRouter>,
    );
    const addToCartBtn = screen.getByTitle("adicionar ao carrinho");

    expect(addToCartBtn);
    fireEvent.click(addToCartBtn);

    expect(handleButtonClick).toHaveBeenCalledOnce();
  });
});
