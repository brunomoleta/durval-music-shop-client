import React from "react";
import { AddressContext } from "../UserContext";

const useAddressContext = () => React.useContext(AddressContext);

export { useAddressContext };
