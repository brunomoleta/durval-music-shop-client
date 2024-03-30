import RenderProduct from "../RenderProduct";
import { DivImg, ImgProduct } from "../ProductSection/styles.ts";
import React from "react";
import { genericValues } from "../../../styled-components/root.ts";
import Modal from "../../Modal";
import { useProductContext } from "../../../providers/hooks";
import { IFullProductContext } from "../../../types/product";

function ProductImage() {
  const { singleProduct } = useProductContext() as IFullProductContext;
  const [showImage, setShowImage] = React.useState(false);
  const id = React.useId();
  return (
    <>
      <Modal
        title=""
        maxWidth={genericValues.genericMaxWidth}
        overflow={"scroll"}
        open={showImage}
        onOpenChange={setShowImage}
        element={
          <ImgProduct
            src={singleProduct?.image}
            alt={singleProduct?.name}
            title={singleProduct?.name}
          />
        }
      />
      <RenderProduct>
        <DivImg onClick={() => setShowImage(!showImage)}>
          <ImgProduct
            id={`${id}-image`}
            src={singleProduct?.image}
            alt={singleProduct?.name}
            title={singleProduct?.name}
          />
        </DivImg>
      </RenderProduct>
    </>
  );
}

export default ProductImage;
