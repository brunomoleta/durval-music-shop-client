import {
  CartQuantity,
  CartWrapper,
  IconsWrapper,
  ProfileIcon,
} from "../../../../styled-components/Header.styles.tsx";
import Profile from "../../../../assets/ui/profile.svg";
import Cart from "../../../../assets/ui/Cart.svg";
import { useNavigate } from "react-router-dom";
import { useCartContext, useUserContext } from "../../../../providers/hooks";

import { fontSize } from "../../../../styled-components/root.ts";
import { IconButton } from "../../../../styled-components/Button.styles.ts";

import { IUserContext } from "../../../../types/user";
import { ICartContext } from "../../../../types/cart";
import styled from "styled-components";
import FloatingText from "./FloatingText";
import DropdownMenuHeader from "../DropdownMenu";
import React from "react";

export const IconSpan = styled.span`
  font-size: clamp(0.25rem, 3svw, ${fontSize.icons});
  font-weight: 500;
`;

function IconsHeader() {
  const navigate = useNavigate();

  const { token, setIsLogOpen, isLogOpen } = useUserContext() as IUserContext;
  const { setIsCartModalOpen, isCartModalOpen, cart } =
    useCartContext() as ICartContext;
  const id = React.useId();

  return (
    <IconsWrapper>
      <DropdownMenuHeader />

      <IconButton
        id={`${id}-account`}
        onClick={() =>
          token && token.length > 0
            ? navigate("/resumo")
            : setIsLogOpen(!isLogOpen)
        }
      >
        <ProfileIcon src={Profile} alt="User Button" />
        <IconSpan>CONTA</IconSpan>
      </IconButton>
      <CartWrapper>
        <IconButton onClick={() => setIsCartModalOpen(!isCartModalOpen)}>
          <ProfileIcon src={Cart} alt="Carrinho" />
          <IconSpan>CARRINHO</IconSpan>
          <FloatingText />
          <CartQuantity>{cart?.length}</CartQuantity>
        </IconButton>
      </CartWrapper>
    </IconsWrapper>
  );
}

export default IconsHeader;
