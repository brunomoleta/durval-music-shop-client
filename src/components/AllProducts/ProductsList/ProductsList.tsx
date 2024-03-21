import { ProductCards } from "../../../styled-components/Cards.styles.ts";
import Loader from "../../Loader";
import { IProductContext } from "../../../types/product";
import CardProduct from "../../CardProduct";
import {
  useUserContext,
} from "../../../providers/UserContext";
import { IUserContext } from "../../../types/user";

function ProductsList({ products }: { products: IProductContext[] }) {
  const { isLoading } = useUserContext() as IUserContext;

  return (
    <ProductCards>
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
