import {
  DivCategories,
  H3NameProduct,
  SpanCategory,
} from "../SingleProduct/ProductSection/styles.ts";
import { nanoid } from "nanoid";
import ProductValues from "../SingleProduct/ProductValues";
import { IFullProductContext } from "../../types/product";
import RenderProduct from "../SingleProduct/RenderProduct";
import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { useCartContext, useProductContext } from "../../providers/hooks";
import { SendBtn } from "../../styled-components/Button.styles.ts";
import { ICartContext } from "../../types/cart";

function SingleProductInfo() {
  const { singleProduct, getProductById } =
    useProductContext() as IFullProductContext;
  const { addProductInCart } = useCartContext() as ICartContext;
  const { id } = useParams();

  useEffect(() => {
    getProductById(Number(id));
  }, []);

  const pId = React.useId();
  return (
    <>
      <RenderProduct>
        <DivCategories>
          {singleProduct?.categories.map((category) => (
            <SpanCategory key={nanoid()}>{category}</SpanCategory>
          ))}
        </DivCategories>
        <H3NameProduct id={`${pId}-nome`}>{singleProduct?.name}</H3NameProduct>
        {singleProduct && <ProductValues product={singleProduct} />}
      </RenderProduct>
      <SendBtn onClick={() => addProductInCart(singleProduct)}>
        Adicionar ao carrinho
      </SendBtn>
    </>
  );
}

export default SingleProductInfo;
