import NoProductFound from "../NoProductFound";
import Illustration from "../Illustration";
import NoOrder from "../../assets/illustrations/No-Order.svg";
import ProductsList from "../AllProducts/ProductsList";
import ChangeProductPage from "../AllProducts/ChangeProductPage";
import { IProductContext } from "../../types/product";
import { useUserContext } from "../../providers/UserContext";
import { IUserContext } from "../../types/user";
import Loader from "../Loader";

function RenderProducts({
  products,
  hasPagination = true,
}: {
  products: IProductContext[];
  hasPagination?: boolean;
}) {
  const { isLoading } = useUserContext() as IUserContext;
  const renderAnswer = () => {
    if (isLoading) <Loader />;

    else if (!products) {
      return (
        <NoProductFound
          element={<Illustration image={NoOrder} alt="" />}
          message="Infelizmente não foi possível mostrar-te os produtos :("
          subTitle="Você sabia que nós somos o e-commerce nº01 no Brasil no ReclameAqui?"
          isButton={false}
        />
      );
    } else if (products.length === 0) {
      return (
        <NoProductFound
          element={<Illustration image={NoOrder} alt="" />}
          message="Infelizmente não há produtos para sua busca :("
          subTitle="Você sabia que nós somos o e-commerce nº01 no Brasil no ReclameAqui?"
          isButton={false}
        />
      );
    }
    return (
      <>
        <ProductsList products={products} />
        {hasPagination && <ChangeProductPage />}
      </>
    );
  };

  return renderAnswer();
}

export default RenderProducts;
