import React from "react";
import { ProductContext } from "../UserContext";

const useProductContext = () => React.useContext(ProductContext);

export { useProductContext };
