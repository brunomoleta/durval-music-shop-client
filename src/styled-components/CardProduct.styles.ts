import styled from "styled-components";
import { colors, fontSize } from "./root.ts";
import { Link } from "react-router-dom";
import { QUERIES } from "../services/database.ts";

export const ImageContainer = styled.div`
  height: 200px;

  overflow: hidden;
  object-fit: contain;

  display: grid;
  place-content: center;

  & img {
    width: auto;
    height: 100%;
    //border: 1px solid green;
    margin: auto;
  }
`;
export const ImgModalContainer = styled(ImageContainer)`
  border-radius: 4px;
  display: grid;
  width: 100%;
  @media ${QUERIES.tabletAndUp} {
    height: 160px;
    width: 120px;
  }
`;

export const Brand = styled.h4`
  color: ${colors.grey70};
  font-size: ${fontSize.smallLink};
`;
export const Name = styled.h3`
  font-weight: 500;
`;
export const Price = styled.h3`
  font-weight: 600;
`;
export const PriceModal = styled(Price)`
  text-align: end;
  margin-inline-start: auto;
`;

export const ProductCardButton = styled(Link)`
  border-radius: 8px;

  &:hover {
    box-shadow: 0 -9px 16px 3px #dddddd;
    outline-offset: 4px;
    outline: 3px solid ${colors.purpleHover};
  }

  & img {
    transition: scale 300ms;
  }

  &:hover img {
    scale: 1.1;
  }

  &:focus {
    scale: 1.05;
    outline-offset: 4px;
    outline: 3px solid ${colors.purple};
    z-index: 1;
  }
`;
