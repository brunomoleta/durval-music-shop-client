import { useNavigate } from "react-router-dom";
import {brandsLogo, QUERIES} from "../../../services/database.ts";
import styled from "styled-components";
import {colors, genericValues} from "../../../styled-components/root.ts";
import {DefaultButton} from "../../../styled-components/Button.styles.ts";
import {nanoid} from "nanoid";

const Wrapper = styled.section`
    padding-inline: ${genericValues.pagePadding};
    width: 100%;
    max-width: ${genericValues.genericMaxWidth};
`

const BrandsOl = styled.ol`
    padding-inline: 8px;
    align-items: center;
    display: flex;
    gap: 15px;
    
    padding-block: 24px;

    border-radius: 8px;
    outline: 2px solid ${colors.purpleSurface};
    position: relative;
    box-shadow: 0 5px 16px 1.5px ${colors.grey10};
    

    overflow-x: scroll;
    scroll-snap-type: x mandatory;


    @media ${QUERIES.laptopAndUp} {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        overflow: hidden;

        border: 2px solid transparent;
    }
`;
const Brand =  styled.li`
  flex: 0 0 clamp(50%, 60%, 160px);
  max-width: 160px;

`
const CategoryButton = styled(DefaultButton)`
  display: flex;
  place-content: center;
  height: 100%;
  &:hover {
    outline: 2px solid ${colors.purple};
    outline-offset: 10px;
  }
`

function LogoCategories() {
  const navigate = useNavigate();

  return (
    <>
      <Wrapper>
        <BrandsOl>
          {brandsLogo.map((brand) => (
            <Brand key={nanoid()}>
              <CategoryButton
                key={brand.id}
                aria-label={brand.name}
                onClick={() => navigate(`/brand/${brand.name}`)}
              >
                <img
                  style={{ maxWidth: "130px", height: "auto" }}
                  src={brand.logo}
                  alt={brand.name}
                />
              </CategoryButton>
            </Brand>
          ))}
        </BrandsOl>
      </Wrapper>
    </>
  );
}

export default LogoCategories;
