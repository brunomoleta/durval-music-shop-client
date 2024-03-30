import Loader from "../../Loader";
import { useProductContext, useUserContext } from "../../../providers/hooks";
import { IFullProductContext } from "../../../types/product";
import { IUserContext } from "../../../types/user";
import React from "react";

function RenderProduct({ children }: { children: React.ReactNode }) {
  const { singleProduct } = useProductContext() as IFullProductContext;

  const { isLoading } = useUserContext() as IUserContext;
  if (isLoading) {
    return <Loader />;
  } else if (!singleProduct) {
    return <div>Não foi possível exibir o produto pois não há conexão.</div>;
  } else {
    return <>{children}</>;
  }
}

export default RenderProduct;
