import React from "react";
import { AddCartButton } from "../../../styled-components/Button.styles.ts";
import { ProfileIcon } from "../../../styled-components/Header.styles.tsx";
import { fontSize } from "../../../styled-components/root.ts";
import Cart from "../../../assets/ui/Cart.svg";
import { useCartContext } from "../../../providers/hooks";
import { ICartContext } from "../../../types/cart";
import { CardProductProps } from "../../../types/product";

type CardBtn = CardProductProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

function CartButton({ item, ...props }: CardBtn) {
  const { addProductInCart } = useCartContext() as ICartContext;
  return (
    <AddCartButton
      onClick={() => {
        addProductInCart(item);
      }}
      {...props}
      title="adicionar ao carrinho"
    >
      <ProfileIcon src={Cart} alt="Carrinho" />
      <span style={{ fontSize: fontSize.icons }}>CARRINHO+</span>
    </AddCartButton>
  );
}

export default CartButton;
