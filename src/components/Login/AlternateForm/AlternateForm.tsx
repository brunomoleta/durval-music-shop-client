import { colors } from "../../../styled-components/root.ts";

import styled from "styled-components";
import { IUserContext } from "../../../types/user";
import { QUERIES } from "../../../services/database.ts";
import { useUserContext } from "../../../providers/hooks/";
import React from "react";

function AlternateForm(question: string, buttonText: string) {
  const { cleanUpRequests } = useUserContext() as IUserContext;
  const id = React.useId();
  return (
    <Wrapper>
      <Question>{question}</Question>
      <button
        id={`${id}-switch-form`}
        onClick={() => {
          cleanUpRequests();
        }}
        style={{
          textDecoration: "underline",
          backgroundColor: "inherit",
          color: colors.purple,
          fontWeight: 500,
        }}
      >
        {buttonText}
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Question = styled.h3`
  @media ${QUERIES.tabletAndUp} {
    text-align: center;
  }
`;

export default AlternateForm;
