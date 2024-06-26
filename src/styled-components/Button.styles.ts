import styled from "styled-components";
import { colors, fontSize } from "./root.ts";
import { QUERIES } from "../services/database.ts";

export const DefaultButton = styled.button`
  text-align: start;
  font-weight: 500;
  width: 100%;
  text-decoration: underline;
  border-radius: 4px;

  &:hover {
    color: ${colors.purpleHover};
    outline: 2px solid ${colors.purpleHover};
  }
  &:active {
    outline: 2px solid ${colors.purpleActive};
  }
  &:focus {
    outline: 2px solid ${colors.purpleActive};
  }
`;

export const MenuButton = styled(DefaultButton)`
  text-decoration: underline;
  background-color: inherit;
  font-weight: 400;

  &:hover {
    color: ${colors.purpleHover};
    outline: 2px solid ${colors.grey5};
  }
`;
export const IconButton = styled.button<{ $bgColor?: boolean }>`
  background-color: ${(props) => props.$bgColor && colors.grey5};
  padding: clamp(4px, 3svw, 20px);
  border-radius: 20px;
  display: grid;
  place-items: center;
  height: 80px;

  box-shadow: 0 5px 16px 1.5px ${colors.grey10};

  &:hover {
    outline: 2px solid ${colors.purpleHover};
  }
`;
export const AddCartButton = styled(IconButton)`
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding-block-end: 0;
  padding-block-start: 8px;
  z-index: 2;

  outline: 2px solid ${colors.purple};

  &:hover {
    background-color: ${colors.purpleSurface};
  }

  &:active {
    outline: 3px solid ${colors.purple};
  }

  &:focus {
    outline: 3px solid ${colors.purple};

  }
}
`;

export const InlineButton = styled(DefaultButton)`
  width: auto;
  color: ${colors.purple};
    &:disabled {
    background-color: ${colors.grey20};
    cursor: wait;
`;

export const WarningInlineButton = styled(InlineButton)`
  color: ${colors.red50};
  font-size: clamp(${fontSize.icons}, 5dvw, ${fontSize.smallLink});

  top: 5ex;
  left: 0;

  position: absolute;

  &:hover {
    color: ${colors.red80};
  }
`;

export const StyledButton = styled.button`
  padding-block: 16px;
  color: ${colors.offWhite};
  background-color: ${colors.purple};
  border-radius: 8px;
  margin-block: clamp(12px, 10%, 32px);
  font-weight: 500;
  transition: background-color 300ms;

  &:hover {
    outline: 2px solid ${colors.purpleBorder};
    background-color: ${colors.purpleHover};
  }

  &:focus {
    background-color: ${colors.purpleActive};
  }

  &:active {
    background-color: ${colors.purple};
  }
`;
export const SendBtn = styled(StyledButton)`
  width: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-block: 0;
  margin-top: 30px;
  font-weight: 500;
  font-size: clamp(${fontSize.icons}, 7dvw, ${fontSize.smallLink});
`;

export const ModalBottonButton = styled(SendBtn)`
  background-color: ${colors.offWhite};
  color: ${colors.purple};
  margin-block: 0;

  &:hover {
    background-color: ${colors.purpleHover};
    color: ${colors.offWhite};
  }
  &:focus {
    color: ${colors.purpleHover};
    background-color: ${colors.purpleSurface};
    outline: 3px solid ${colors.purple};
  }
`;

export const ModalButton = styled.button`
  min-height: 40px;
  min-width: 40px;
  border-radius: 4px;
  padding: 8px;
  max-width: fit-content;

  height: fit-content;

  @media ${QUERIES.tabletAndUp} {
    position: absolute;

    top: -60px;
    right: 0;

    color: ${colors.black};
    background-color: ${colors.white000};
  }
`;

export const QuitButton = styled(DefaultButton)`
  color: ${colors.red60};
  font-weight: 500;

  &:hover {
    color: ${colors.red80};
    outline: 2px solid ${colors.red80};
  }
  &:active {
    color: ${colors.red80};
    outline: 2px solid ${colors.red80};
  }
  &:focus {
    color: ${colors.red80};
    outline: 2px solid ${colors.red80};
  }
`;

export const RoundButton = styled.button<{ $positionLeft?: boolean }>`
  outline: 2px solid ${colors.grey60};
  width: fit-content;
  padding: 10px;
  border-radius: 50%;
  position: absolute;
  background-color: ${colors.white000};

  &:hover {
    outline: 3px solid ${colors.purpleHover};
  }

  &:focus {
    outline: 3px solid ${colors.purpleHover};
  }

  top: 50%;
  left: ${(props) => (props.$positionLeft ? "20px" : "none")};
  right: ${(props) => (props.$positionLeft ? "none" : "20px")};
`;

export const PasswordButton = styled.button`
  background-color: inherit;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`;
