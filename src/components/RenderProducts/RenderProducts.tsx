import NoProductFound from "../NoProductFound";
import Illustration from "../Illustration";
import NoOrder from "../../assets/illustrations/No-Order.svg";
import ProductsList from "../AllProducts/ProductsList";
import ChangeProductPage from "../AllProducts/ChangeProductPage";
import {IProductContext} from "../../types/product";

function RenderProducts({products}: { products: IProductContext[] }) {
    return (
        !products ? (
            <NoProductFound
                element={<Illustration image={NoOrder} alt=""/>}
                message="Infelizmente não foi possível trazer os produtos :("
                subTitle="Você sabia que nós somos o e-commerce nº01 no Brasil no ReclameAqui?"
                isButton={false}
            />
        ) : (
            <>
                <ProductsList products={products}/>
                <ChangeProductPage/>
            </>
        )
    );
}
export default RenderProducts;
