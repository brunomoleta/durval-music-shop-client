import Money from "../../../assets/illustrations/Nothing-in-Cart.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { fontSize } from "../../../styled-components/root.ts";
import { QUERIES } from "../../../services/database.ts";
import Button from "../../Button";

const H1 = styled.h1`
  width: 100%;
  font-weight: 500;
  text-align: center;
  line-height: 130%;
  font-size: ${fontSize.h3};
  @media ${QUERIES.tabletAndUp} {
    font-size: ${fontSize.h2};
  }
`;
const Section = styled.section`
  display: grid;
  justify-items: center;
`;

function Orders() {
  const navigate = useNavigate();
  return (
    <Section>
      <H1>Por enquanto não há pedidos</H1>
      <img src={Money} alt="" />
      <Button onClick={() => navigate("/")}>Quero comprar :)</Button>
    </Section>
  );
}

export default Orders;
