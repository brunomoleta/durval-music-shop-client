import Trash from "../../../assets/ui/trash.svg";
import {
  Brand,
  ImgModalContainer,
  Name,
  PriceModal,
} from "../../../styled-components/CardProduct.styles.ts";
import { colors, fontSize } from "../../../styled-components/root.ts";
import { ICart, ICartContext } from "../../../types/cart";

import ProductAmount from "../ProductAmount";
import { useCartContext } from "../../../providers/UserContext";
import {
  InfoButtons,
  ProductInfo,
  RemoveBtn,
  Warning,
  Wrapper,
} from "../../../styled-components/CartItem.styles.ts";
import { priceToString, upper } from "../../../services/utils.ts";

function CartItem(props: ICart) {
  const { product, amount } = props;
  const { name, brandName, image, price, id } = product;
  const { removeProductInCart } = useCartContext() as ICartContext;

  return (
    <>
      <Wrapper>
        {amount === product.stock && (
          <Warning>{product.stock} é o estoque total ;)</Warning>
        )}
        <ImgModalContainer>
          <img src={image} alt={`${name}`} />
        </ImgModalContainer>
        <ProductInfo>
          <div>
            <Brand>{upper(brandName)}</Brand>
            <Name>{upper(name)}</Name>
          </div>
          <InfoButtons>
            <RemoveBtn
              onClick={() => {
                removeProductInCart(id);
              }}
            >
              <img alt="" src={Trash} />
              <span
                style={{
                  color: colors.red60,
                  fontSize: fontSize.smallLink,
                }}
              >
                remover
              </span>
            </RemoveBtn>
            <ProductAmount product={product} amount={amount} />
            <PriceModal>{priceToString(price)}</PriceModal>
          </InfoButtons>
        </ProductInfo>
      </Wrapper>
    </>
  );
}

export default CartItem;
