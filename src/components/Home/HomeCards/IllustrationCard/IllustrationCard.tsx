import styled from "styled-components";
import { IllustrationCardProps } from "../../../../types/types";
import { H3 } from "../../../../styled-components/Typography.styles.ts";
import {
  Figure,
  ImageNotFound,
  TextWrapper,
  Wrapper,
} from "../../../../styled-components/NotFound.styles.ts";
import {
  CardGrid,
  CardProd,
} from "../../../../styled-components/Cards.styles.ts";
import { colors, genericValues } from "../../../../styled-components/root.ts";

const CardImage = styled(ImageNotFound)`
  max-width: 240px;
`;
const CardWrapper = styled(TextWrapper)`
  gap: 16px;
  max-width: 30ch;
  font-size: ${genericValues.clampFontSize};
`;

function IllustrationCard({
  image,
  title,
  description,
}: IllustrationCardProps) {
  return (
    <>
      <CardProd>
        <CardGrid>
          <Figure>
            <CardImage src={image} alt={title} />
            <figcaption>Url not found</figcaption>
          </Figure>
          <Wrapper>
            <CardWrapper>
              <H3>{title}</H3>
              <p style={{ color: colors.grey60 }}>{description}</p>
            </CardWrapper>
          </Wrapper>
        </CardGrid>
      </CardProd>
    </>
  );
}

export default IllustrationCard;
