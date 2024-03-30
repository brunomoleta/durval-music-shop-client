import { useProductContext } from "../../providers/hooks";
import { IFullProductContext } from "../../types/product";
import React from "react";
import {
  Heading,
  Wrapper,
} from "../../styled-components/AllProducts.styles.ts";

import RenderProducts from "../RenderProducts";

type IAllProducts = {
  heading: string;
};

function AllProducts(props: IAllProducts) {
  const { getAllProducts, page, allProducts, singleProduct } =
    useProductContext() as IFullProductContext;

  React.useEffect((): void => {
    getAllProducts(page, 4);
  }, [page]);

  return (
    <Wrapper>
      <Heading>{props.heading}</Heading>
      {allProducts && (
        <RenderProducts
          products={allProducts.filter(
            (product) => product.id !== singleProduct?.id,
          )}
        />
      )}
    </Wrapper>
  );
}

export default AllProducts;
