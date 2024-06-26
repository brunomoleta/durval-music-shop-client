import styled from "styled-components";
import { fontSize } from "./root.ts";
import { QUERIES } from "../services/database.ts";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column-reverse;
  margin: clamp(20px, 7svw, 64px);

  @media ${QUERIES.tabletAndUp} {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 4fr;
  }
`;

export const InternalWrapper = styled.aside`
  position: sticky;
  top: 0;

  height: fit-content;
  padding-block-start: 20px;
`;

export const ItemsWrapper = styled.ol`
  display: flex;
  flex-flow: column;
  gap: 20px;
  margin-block: 32px;
`;
export const MainInfo = styled.div`
  width: 100%;
`;
export const H2 = styled.h2`
  font-weight: 600;
  font-size: ${fontSize.h5};
`;
