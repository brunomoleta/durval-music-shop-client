import styled from "styled-components";
import { H3 } from "./Typography.styles.ts";
import { QUERIES } from "../services/database.ts";

export const Buttons = styled.div`
  display: grid;
  gap: 24px;
  @media ${QUERIES.tabletAndUp} {
    display: flex;
  }
`;
export const FinalPrice = styled(H3)`
  font-weight: 600;
`;
export const Wrapper = styled.div`
  display: grid;
  gap: clamp(1svh, 3svh, 16px);
  grid-template-rows: auto auto;
  
`;

export const BottonInfo = styled.div`
    height: fit-content;
    margin-block-start: 32px;
    
    display: flex;
    flex-flow: column;
    gap: 16px;
`;

export const CartOl = styled.ol`
    overflow-y: auto;
    padding-inline-end: clamp(8px, 5%, 32px);
    min-height: 100%;
    max-height: 33svh;
    margin-block: 40px 24px;
`;
