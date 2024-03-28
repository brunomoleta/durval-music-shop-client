import Modal from "../../Modal";
import { genericValues } from "../../../styled-components/root.ts";
import { DivImg, ImgProduct } from "../ProductSection/styles.ts";
import Loader from "../../Loader";
import React from "react";
import { useUserContext } from "../../../providers/hooks";
import { IUserContext } from "../../../types/user";
import { IProductContext } from "../../../types/product";

function ProductImage({ product }: { product: IProductContext }) {
  const [showImage, setShowImage] = React.useState(false);
  const { isLoading } = useUserContext() as IUserContext;
  const id = React.useId();
  if (!product) return <Loader />;

  const { image, name } = product;
  return (
    <>
      <Modal
        title=""
        maxWidth={genericValues.genericMaxWidth}
        overflow={"scroll"}
        open={showImage}
        onOpenChange={setShowImage}
        element={<ImgProduct src={image} alt={name} title={name} />}
      />
      <DivImg onClick={() => setShowImage(!showImage)}>
        {isLoading ? (
          <Loader />
        ) : (
          <ImgProduct id={`${id}-image`} src={image} alt={name} title={name} />
        )}
      </DivImg>
    </>
  );
}

export default ProductImage;
