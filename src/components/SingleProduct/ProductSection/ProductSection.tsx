import { DivInfoContainer, SectionBuy } from "./styles.ts";
import { useEffect } from "react";
import { useCartContext, useProductContext } from "../../../providers/hooks";
import { IFullProductContext } from "../../../types/product";
import { SendBtn } from "../../../styled-components/Button.styles.ts";
import { ICartContext } from "../../../types/cart";
import { useParams } from "react-router-dom";
import DeliverySection from "../DeliverySection";
import ProductImage from "../ProductImage";
import SingleProductInfo from "../../SingleProductInfo";

const ProductSection = () => {
  const { singleProduct, getProductById } =
    useProductContext() as IFullProductContext;
  const { addProductInCart } = useCartContext() as ICartContext;

  const { id } = useParams();
  const RenderProduct = () => getProductById(Number(id));
  useEffect(() => {
    RenderProduct();
  }, []);

  return (
    <SectionBuy>
      <ProductImage />
      <DivInfoContainer>
        <SingleProductInfo product={singleProduct} />
        <SendBtn onClick={() => addProductInCart(singleProduct)}>
          Adicionar ao carrinho
        </SendBtn>

        <DeliverySection />
      </DivInfoContainer>
    </SectionBuy>
  );
};

export default ProductSection;
