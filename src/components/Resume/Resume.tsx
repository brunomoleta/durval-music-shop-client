import Refund from "../../assets/illustrations/Refund.svg"
import styled from "styled-components";
import {fontSize} from "../../styled-components/root.ts";
import Illustration from "../Illustration";

const H1 = styled.h1`
    width: 100%;

    font-weight: 500;
    font-size: clamp(${fontSize.text}, 7svw, ${fontSize.h2});

    margin-inline-end: auto;

    text-align: center;
    line-height: 130%;
`
const Section = styled.section`
  display: grid;
  justify-items: center;
`
function Resume() {
  return (
    <Section>
      <H1>Seja bem-vinda(o)!</H1>
        <Illustration image={Refund} alt='women with cash on her hands' />
    </Section>
  );
}

export default Resume;
