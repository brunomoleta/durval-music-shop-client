import {
  SectionDescription,
  H3TitleDescription,
  ParagDescription,
} from "./styles.ts";

import { IFullProductContext } from "../../../types/product";
import { useProductContext } from "../../../providers/hooks";
import React from "react";

const DescriptionSection = () => {
  const { singleProduct } = useProductContext() as IFullProductContext;

  const id = React.useId()
  return (
    <SectionDescription>
      <H3TitleDescription>Descrição</H3TitleDescription>
      <ParagDescription id={`${id}-description`}>{singleProduct?.description}</ParagDescription>
    </SectionDescription>
  );
};

export default DescriptionSection;
