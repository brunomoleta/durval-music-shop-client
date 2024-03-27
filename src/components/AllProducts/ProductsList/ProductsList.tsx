import { ProductCards } from "../../../styled-components/Cards.styles.ts";
import Loader from "../../Loader";
import { IProductContext } from "../../../types/product";
import CardProduct from "../../CardProduct";
import {
  useUserContext,
} from "../../../providers/UserContext";
import { IUserContext } from "../../../types/user";
import React from "react";

function ProductsList({ products }: { products: IProductContext[] }) {
  const { isLoading } = useUserContext() as IUserContext;
  const id = React.useId()
  return (
    <ProductCards id={`${id}-products`}>
      {isLoading ? (
        <Loader />
      ) : (
        products &&
        products.map((item: IProductContext) => (
          <CardProduct key={item.id} item={item} />
        ))
      )}
    </ProductCards>
  );
}

export default ProductsList;
