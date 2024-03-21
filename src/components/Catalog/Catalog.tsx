import NoOrder from "../../assets/illustrations/No-Order.svg";
import { useProductContext, useUserContext } from "../../providers/UserContext";
import { IFullProductContext } from "../../types/product";
import CardProduct from "../CardProduct";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ManagePages from "./ManagePages/ManagePages";
import Loader from "../Loader";
import { IUserContext } from "../../types/user";
import NoProductFound from "../NoProductFound";
import Illustration from "../Illustration";
import {ListContainer, ProductsList} from "../../styled-components/Catalog.styles.ts";

function Catalog() {
  const {
    allProducts,
    getAllProducts,
    getProductsByCategory,
    getProductsByBrand,
  } = useProductContext() as IFullProductContext;
  const verifyParams = useParams();
  const { isLoading } = useUserContext() as IUserContext;

  const [nextPage, setNextPage] = useState<string | null>(null);
  const [prevPage, setPrevPage] = useState<string | null>(null);

  useEffect(() => {
    async function filterProducts() {
      if (!verifyParams || verifyParams.brandName === "todas") {
        const pages = await getAllProducts(1, 6);

        setNextPage(pages.nextPage);
        setPrevPage(pages.prevPage);
      } else if (verifyParams.categoryName) {
        const pages = await getProductsByCategory(verifyParams.categoryName);

        setNextPage(pages.nextPage);
        setPrevPage(pages.prevPage);
      } else if (verifyParams.brandName) {
        const pages = await getProductsByBrand(verifyParams.brandName);

        setNextPage(pages.nextPage);
        setPrevPage(pages.prevPage);
      }
    }

    filterProducts();
  }, [verifyParams]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : allProducts && allProducts.length > 0 ? (
        <ListContainer>
          <ProductsList>
            {allProducts.map((product) => (
              <CardProduct item={product} key={product.id} />
            ))}
          </ProductsList>
          <ManagePages
            nextPage={nextPage}
            prevPage={prevPage}
            setNextPage={setNextPage}
            setPrevPage={setPrevPage}
          />
        </ListContainer>
      ) : (
        <NoProductFound
          element={<Illustration image={NoOrder} alt="" />}
          message="Nenhum produto encontrado para sua busca :("
          subTitle="Você sabia que nós somos o e-commerce nº01 no Brasil no ReclameAqui?"
          isButton={false}
        />
      )}
    </>
  );
}

export default Catalog;
