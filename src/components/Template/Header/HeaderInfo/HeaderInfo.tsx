import {
  HeaderWrapper,
  InfoWrapper,
  LogoTop, MidWrapper,
  Wrapper,
} from "../../../../styled-components/Header.styles.tsx";
import { Link } from "react-router-dom";
import { logoName } from "../../../../services/database.ts";
import SearchFormHeader from "../SearchFormHeader";
import IconsHeader from "../IconsHeader";

function HeaderInfo() {
  return (
    <Wrapper>
      <MidWrapper>
        <HeaderWrapper>
          <Link to={"/"}>
            <LogoTop>{logoName}</LogoTop>
          </Link>
          <InfoWrapper>
            <SearchFormHeader />
            <IconsHeader />
          </InfoWrapper>
        </HeaderWrapper>
      </MidWrapper>
    </Wrapper>
  );
}

export default HeaderInfo;
