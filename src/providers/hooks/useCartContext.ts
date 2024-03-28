import React from "react";
import { CartContext } from "../UserContext";

const useCartContext = () => React.useContext(CartContext);

export { useCartContext };
