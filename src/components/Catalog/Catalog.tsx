import { useProductContext, useUserContext } from "../../providers/UserContext";
import { IFullProductContext } from "../../types/product";

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { IUserContext } from "../../types/user";
import RenderProducts from "../RenderProducts";

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

  return <>{allProducts && <RenderProducts products={allProducts} />}</>;
}

export default Catalog;
