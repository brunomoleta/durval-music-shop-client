import {
  HeaderWrapper,
  InfoWrapper,
  MidWrapper,
  Wrapper,
} from "../../../../styled-components/Header.styles.tsx";
import SearchFormHeader from "../SearchFormHeader";
import IconsHeader from "../IconsHeader";
import HeaderLogo from "../../../HeaderLogo";

function HeaderInfo() {

  return (
    <Wrapper>
      <MidWrapper>
        <HeaderWrapper>
          <HeaderLogo/>
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
