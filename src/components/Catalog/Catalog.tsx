import { useProductContext } from "../../providers/hooks";
import { IFullProductContext } from "../../types/product";

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { IUserContext } from "../../types/user";
import RenderProducts from "../RenderProducts";
import { Wrapper } from "../../styled-components/AllProducts.styles.ts";
import { useUserContext } from "../../providers/hooks/";

function Catalog() {
  const { allProducts, searchProduct } =
    useProductContext() as IFullProductContext;

  const { setIsLoading } = useUserContext() as IUserContext;

  const { productName } = useParams();
  useEffect(() => {
    try {
      setIsLoading(true);
      productName && searchProduct(productName);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <Wrapper>
      {allProducts && (
        <RenderProducts hasPagination={false} products={allProducts} />
      )}
    </Wrapper>
  );
}

export default Catalog;
