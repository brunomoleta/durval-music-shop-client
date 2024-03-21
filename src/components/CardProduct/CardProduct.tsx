import { CardProd } from "../../styled-components/Cards.styles.ts";
import { CardProductProps } from "../../types/product";
import ProductButton from "./ProductButton";
import ProductInfo from "./ProductInfo";
import CartButton from "../Cart/CartButton";

function CardProduct(props: CardProductProps) {
  const { item } = props;
  return (
    <CardProd>
      <ProductButton item={item}>
        <ProductInfo item={item} />
      </ProductButton>
      <CartButton item={item} />
    </CardProd>
  );
}

export default CardProduct;
