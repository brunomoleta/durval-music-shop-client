import CartItem from "./CartItem";
import { useCartContext, useUserContext } from "../../providers/hooks";
import { ICartContext } from "../../types/cart";
import { nanoid } from "nanoid";
import {
  ModalBottonButton,
  SendBtn,
} from "../../styled-components/Button.styles.ts";
import {
  GreyParagraph,
  H3,
} from "../../styled-components/Typography.styles.ts";
import { IUserContext } from "../../types/user";
import { useNavigate } from "react-router-dom";
import React, { useRef } from "react";
import {
  BottonInfo,
  Buttons,
  CartOl,
  FinalPrice,
  Wrapper,
} from "../../styled-components/RenderCartItems.ts";
import { priceToString } from "../../services/utils.ts";
import { Subtotal } from "../../styled-components/CartModal.style.ts";

function RenderCartItems() {
  const { cart, setIsCartModalOpen, isCartModalOpen } =
    useCartContext() as ICartContext;
  const { setIsLogOpen, isLogOpen } = useUserContext() as IUserContext;

  const buttonRef = useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
    return () => {};
  }, []);

  function LogToBuy() {
    setIsCartModalOpen(!isCartModalOpen);
    setIsLogOpen(!isLogOpen);
  }

  const { token } = useUserContext() as IUserContext;

  const navigate = useNavigate();
  const subTotal: number = cart
    ? cart.reduce((total, item) => {
        const price = item.product.price;
        const amount = item.amount;
        return total + price * amount;
      }, 0)
    : 0;

  return (
    <Wrapper>
      <CartOl>
        {cart &&
          cart.map((item) => (
            <CartItem
              key={nanoid()}
              amount={item.amount}
              product={item.product}
            />
          ))}
      </CartOl>
      <BottonInfo>
        <div>
          <Subtotal>
            <H3>Subtotal:</H3>
            <FinalPrice>{priceToString(subTotal)}</FinalPrice>
          </Subtotal>
          <GreyParagraph>O frete é adicionado a seguir :)</GreyParagraph>
        </div>
        <Buttons>
          <ModalBottonButton
            onClick={() => setIsCartModalOpen(!isCartModalOpen)}
            ref={buttonRef}
          >
            Continuar comprando
          </ModalBottonButton>
          <SendBtn
            style={{ marginBlock: "0" }}
            onClick={() => {
              token ? navigate("/makeorder") : LogToBuy();
            }}
          >
            Finalizar compra
          </SendBtn>
        </Buttons>
      </BottonInfo>
    </Wrapper>
  );
}

export default RenderCartItems;
