import React from "react";
import { PaymentContext } from "../UserContext";

const usePaymentContext = () => React.useContext(PaymentContext);

export { usePaymentContext };
