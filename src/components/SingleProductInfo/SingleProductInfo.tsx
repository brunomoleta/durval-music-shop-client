import {
  DivCategories,
  H3NameProduct,
  SpanCategory,
} from "../SingleProduct/ProductSection/styles.ts";
import { nanoid } from "nanoid";
import ProductValues from "../SingleProduct/ProductValues";
import { IProductContext } from "../../types/product";
import RenderProduct from "../SingleProduct/RenderProduct";

function SingleProductInfo({ product }: { product: IProductContext }) {
  return (
    <>
      <RenderProduct>
        <DivCategories>
          {product?.categories.map((category) => (
            <SpanCategory key={nanoid()}>{category}</SpanCategory>
          ))}
        </DivCategories>
        <H3NameProduct>{product?.name}</H3NameProduct>
        <ProductValues product={product} />
      </RenderProduct>
    </>
  );
}

export default SingleProductInfo;
