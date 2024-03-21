import { useProductContext } from "../../providers/UserContext";
import { IFullProductContext } from "../../types/product";
import React from "react";
import {
  Heading,
  Wrapper,
} from "../../styled-components/AllProducts.styles.ts";
import ProductsList from "./ProductsList";
import Illustration from "../Illustration";
import NoOrder from "../../assets/illustrations/No-Order.svg";
import NoProductFound from "../NoProductFound";

type IAllProducts = {
  heading: string;
};

function AllProducts(props: IAllProducts) {
  const { getAllProducts, page, allProducts } =
    useProductContext() as IFullProductContext;

  React.useEffect((): void => {
    getAllProducts(page, 4);
  }, [page]);

  return (
    <Wrapper>
      <Heading>{props.heading}</Heading>
      {!allProducts ? (
          <NoProductFound
              element={<Illustration image={NoOrder} alt="" />}
              message="Infelizmente não foi possível trazer os produtos :("
              subTitle="Você sabia que nós somos o e-commerce nº01 no Brasil no ReclameAqui?"
              isButton={false}
          />
      ) : (
        <ProductsList products={allProducts} />
      )}
    </Wrapper>
  );
}

export default AllProducts;
