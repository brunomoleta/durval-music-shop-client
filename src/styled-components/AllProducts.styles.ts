import styled from "styled-components";
import { colors, fontSize, genericValues } from "./root.ts";

export const Heading = styled.h2`
  font-size: clamp(${fontSize.smallLink}, 7svw, ${fontSize.h3});
  font-weight: 600;
  width: fit-content;
  color: ${colors.purple};
`;
export const Wrapper = styled.section`
  display: grid;
  margin-block: 40px;
  margin-inline: 16px;
  padding-inline: ${genericValues.pagePadding};
  align-items: self-start;
  gap: 32px;
  width: 100%;
  position: relative;
`;
