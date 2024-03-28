import {
  SectionDescription,
  H3TitleDescription,
  ParagDescription,
} from "./styles.ts";

import { IFullProductContext } from "../../../types/product";
import { useProductContext } from "../../../providers/hooks";

const DescriptionSection = () => {
  const { singleProduct } = useProductContext() as IFullProductContext;

  return (
    <SectionDescription>
      <H3TitleDescription>Descrição</H3TitleDescription>
      <ParagDescription>{singleProduct?.description}</ParagDescription>
    </SectionDescription>
  );
};

export default DescriptionSection;
