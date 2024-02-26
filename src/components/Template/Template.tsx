import Header from "./Header";
import React from "react";
import Footer from "./Footer";
import {
  AppWrapper,
  MainWrapper,
  Wrapper,
} from "../../styled-components/Template.styles.ts";

function Template(props: { children: React.ReactNode }) {
  return (
    <>
      <AppWrapper>
        <Header />
        <MainWrapper>
          <Wrapper>{props.children}</Wrapper>
        </MainWrapper>
        <Footer />
      </AppWrapper>
    </>
  );
}

export default Template;
