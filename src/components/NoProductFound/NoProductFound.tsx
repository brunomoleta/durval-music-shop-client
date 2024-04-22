import { CardSubTitle, H1 } from "../../styled-components/Typography.styles.ts";
import { useCartContext, useProductContext } from "../../providers/hooks";
import { ICartContext } from "../../types/cart";
import React from "react";
import { NoProductFoundProps } from "../../types/types";
import styled from "styled-components";
import { IFullProductContext } from "../../types/product";
import Button from "../Button";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  gap: 24px;
  text-align: center;
`;
const NoProductFound: React.FC<NoProductFoundProps> = ({
  message,
  subTitle,
  isButton,
  element,
}) => {
  const { isCartModalOpen, setIsCartModalOpen } =
    useCartContext() as ICartContext;
  const { returnHome } = useProductContext() as IFullProductContext;
  return (
    <Wrapper>
      {element}
      <H1>{message}</H1>
      <CardSubTitle>{subTitle}</CardSubTitle>
      {isButton ? (
        <Button
          isForm={false}
          onClick={() => setIsCartModalOpen(!isCartModalOpen)}
        >
          Ir às compras :)
        </Button>
      ) : (
        <button onClick={returnHome} style={{ textDecoration: "underline" }}>
          Voltar para a página inicial
        </button>
      )}
    </Wrapper>
  );
};

export default NoProductFound;
