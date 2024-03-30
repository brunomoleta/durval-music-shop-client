import { DivInfoContainer, SectionBuy } from "./styles.ts";
import DeliverySection from "../DeliverySection";
import ProductImage from "../ProductImage";
import SingleProductInfo from "../../SingleProductInfo";

const ProductSection = () => {
  return (
    <SectionBuy>
      <ProductImage />
      <DivInfoContainer>
        <SingleProductInfo />

        <DeliverySection />
      </DivInfoContainer>
    </SectionBuy>
  );
};

export default ProductSection;
