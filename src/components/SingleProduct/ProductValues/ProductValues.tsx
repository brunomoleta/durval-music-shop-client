import ProductValue from "../ProductValue";
import { priceToString } from "../../../services/utils.ts";
import { IProductContext } from "../../../types/product";
import Loader from "../../Loader";

function ProductValues({ product }: { product: IProductContext }) {
  if (!product) return <Loader />;

  const { price, color, condition, stock, owner } = product;
  return (
    <>
      <ProductValue characteristic="preço">{priceToString(price)}</ProductValue>
      {color && <ProductValue characteristic="cor">{color}</ProductValue>}
      <ProductValue characteristic="condição">
        {condition == "new" ? "Novo" : "Usado"}
      </ProductValue>
      <ProductValue characteristic="unidades disponíveis">{stock}</ProductValue>
      <ProductValue characteristic="vendedor">{owner.name}</ProductValue>
    </>
  );
}

export default ProductValues;
