import styled from "styled-components";
import {QUERIES} from "../services/database.ts";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
    
`;

export const ProductsList = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 2.3rem;
  padding: 0 2rem;

  @media ${QUERIES.tabletAndUp} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    row-gap: 1.5rem;
    column-gap: 2rem;
  }

  @media ${QUERIES.tabletAndUp} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;
