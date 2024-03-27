import ProductValue from "../ProductValue";
import { priceToString } from "../../../services/utils.ts";
import { IProductContext } from "../../../types/product";
import Loader from "../../Loader";

function ProductValues({ product }: { product: IProductContext }) {
  if (!product) return <Loader />;

  const { price, color, condition, stock, owner } = product;
  return (
    <>
      <ProductValue characteristic="Preço">{priceToString(price)}</ProductValue>
      {color && <ProductValue characteristic="Cor">{color}</ProductValue>}
      <ProductValue characteristic="Condição">
        {condition == "new" ? "Novo" : "Usado"}
      </ProductValue>
      <ProductValue characteristic="Unidades disponíveis">
        ${stock}
      </ProductValue>
      <ProductValue characteristic="Vendedor">{owner.name}</ProductValue>
    </>
  );
}

export default ProductValues;
