import styled from "styled-components";
import {fontSize} from "./root.ts";

export const Subtotal = styled.div`
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    > * {
        font-size: clamp(${fontSize.smallLink}, 5svw, ${fontSize.p});
    }
`