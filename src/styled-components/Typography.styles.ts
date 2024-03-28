import { colors, fontSize } from "./root.ts";
import styled from "styled-components";

export const H1 = styled.h1`
  font-size: clamp(${fontSize.p}, 5svw, ${fontSize.h2});
  line-height: 120%;
  font-weight: 600;
`;
export const H2 = styled.h2`
  text-align: center;
  margin-inline-end: auto;
  line-height: 140%;
  font-size: clamp(${fontSize.p}, 5svw, ${fontSize.h3});

  font-weight: 600;
`;
export const H3 = styled.h3`
  font-weight: 500;
`;
export const CardSubTitle = styled.p`
  color: ${colors.grey70};
  font-size: ${fontSize.p};
`;

export const GreyParagraph = styled.p`
  font-size: clamp(${fontSize.icons}, 5svw, ${fontSize.smallLink});
  color: ${colors.grey70};
  text-align: end;
`;
