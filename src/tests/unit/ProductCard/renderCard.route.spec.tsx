import { products } from "../../mocks/ProductCard/renderProduct.route.mock.ts";
import CardProduct from "../../../components/CardProduct";
import { capitalizedFirstLetter } from "../../../services/utils.ts";

import { render, screen } from "@testing-library/react";
import { expect, test, describe } from "vitest";

import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "../../../providers/UserContext";

const guitar = products[0];
const { name, brandName } = guitar;
describe("Render ProductCard", () => {
  test("Should render product card, including info and image and button", () => {
    render(
      <BrowserRouter>
        <UserProvider>
          <CardProduct item={products[0]} />
        </UserProvider>
      </BrowserRouter>,
    );

    const cartButton = screen.getByRole("button", {
      name: /CARRINHO+/i,
    });

    expect(screen.getByText(name).textContent).toStrictEqual(
      "Fender Stratocaster sunburst",
    );

    expect(
      screen.getByText(capitalizedFirstLetter(brandName)).textContent,
    ).toStrictEqual("Fender");
    expect(screen.getByAltText(name));
    expect(screen.getByText("R$ 7.000,00"));
    expect(cartButton);

    expect(screen.getByRole("link"));
  });
});
