import {
  DivCategories,
  DivInfoContainer,
  H3NameProduct,
  SectionBuy,
  SpanCategory,
} from "./styles.ts";
import { useEffect } from "react";
import {
  useCartContext,
  useProductContext,
  useUserContext,
} from "../../../providers/hooks";
import { IFullProductContext } from "../../../types/product";
import { SendBtn } from "../../../styled-components/Button.styles.ts";
import { ICartContext } from "../../../types/cart";
import { nanoid } from "nanoid";
import { useParams } from "react-router-dom";
import { IUserContext } from "../../../types/user";
import DeliverySection from "../DeliverySection";
import ProductValues from "../ProductValues";
import ProductImage from "../ProductImage";

const ProductSection = () => {
  const { setIsLoading } = useUserContext() as IUserContext;
  const { singleProduct, getProductById } =
    useProductContext() as IFullProductContext;
  const { addProductInCart } = useCartContext() as ICartContext;

  const { id } = useParams();
  useEffect(() => {
    try {
      setIsLoading(true);
      getProductById(Number(id));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <SectionBuy>
      <ProductImage product={singleProduct} />
      <DivInfoContainer>
        <DivCategories>
          {singleProduct?.categories.map((category) => (
            <SpanCategory key={nanoid()}>{category}</SpanCategory>
          ))}
        </DivCategories>
        <H3NameProduct>{singleProduct?.name}</H3NameProduct>

        <ProductValues product={singleProduct} />
        <SendBtn onClick={() => addProductInCart(singleProduct)}>
          Adicionar ao carrinho
        </SendBtn>

        <DeliverySection />
      </DivInfoContainer>
    </SectionBuy>
  );
};

export default ProductSection;
