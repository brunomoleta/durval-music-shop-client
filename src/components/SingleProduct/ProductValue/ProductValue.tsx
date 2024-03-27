import React from "react";
import { SpanCharacteristic } from "../ProductSection/styles.ts";

function ProductValue({
  children,
  characteristic,
}: {
  children: React.ReactNode;
  characteristic: string;
}) {
  return (
    <SpanCharacteristic>
      <span>{characteristic}</span>{" "}
      {children}
    </SpanCharacteristic>
  );
}

export default ProductValue;
