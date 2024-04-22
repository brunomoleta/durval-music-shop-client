import React from "react";
import { SpanCharacteristic } from "../ProductSection/styles.ts";
import { upper } from "../../../services/utils.ts";

function ProductValue({
  children,
  characteristic,
}: {
  children: React.ReactNode;
  characteristic: string;
}) {
  const id = React.useId();
  return (
    <SpanCharacteristic id={`${id}-${characteristic}`}>
      <span>{upper(characteristic)}:</span> {children}
    </SpanCharacteristic>
  );
}

export default ProductValue;
