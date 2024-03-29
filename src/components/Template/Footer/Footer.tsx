import Instagram from "../../../assets/social-media/instagram.png";
import Facebook from "../../../assets/social-media/facebook.png";
import Tweeter from "../../../assets/social-media/twitter.png";
import Pinterest from "../../../assets/social-media/pinterest.png";
import AppleStore from "../../../assets/social-media/appleStore.png";
import GooglePlay from "../../../assets/social-media/googlePlay.png";
import {
  corporationOptions,
  helpOptions,
  logoName,
} from "../../../services/database.ts";
import {
  Foot,
  DivContainer,
  DivUp,
  DivLeft,
  DivLogos,
  UlSocialMedia,
  LiSocialMedia,
  AnchorMedias,
  ImgMediaLogos,
  DivDown,
  SpanTerms,
  DivRight,
  DivColumns,
  TitleColumns,
  UlOptions,
  Li,
  UlDownload,
  LiDownload,
  AnchorStores,
  ImgStores,
} from "./styles.ts";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { LogoTop } from "../../../styled-components/Header.styles.tsx";

function Footer() {
  return (
    <Foot>
      <DivContainer>
        <DivUp>
          <DivLeft>
            <DivLogos>
              <Link to={"/"}>
                <LogoTop>{logoName}</LogoTop>
              </Link>
              <UlSocialMedia>
                <LiSocialMedia>
                  <AnchorMedias to="https://www.instagram.com/" target="_blank">
                    <ImgMediaLogos src={Instagram} alt="Instagram logo" />
                  </AnchorMedias>
                </LiSocialMedia>
                <LiSocialMedia>
                  <AnchorMedias to="https://www.facebook.com/" target="_blank">
                    <ImgMediaLogos src={Facebook} alt="Facebook logo" />
                  </AnchorMedias>
                </LiSocialMedia>
                <LiSocialMedia>
                  <AnchorMedias to="https://www.twitter.com/" target="_blank">
                    <ImgMediaLogos src={Tweeter} alt="Tweeter logo" />
                  </AnchorMedias>
                </LiSocialMedia>
                <LiSocialMedia>
                  <AnchorMedias to="https://www.pinterest.com/" target="_blank">
                    <ImgMediaLogos src={Pinterest} alt="Pinterest logo" />
                  </AnchorMedias>
                </LiSocialMedia>
              </UlSocialMedia>
            </DivLogos>
          </DivLeft>
          <DivRight>
            <DivColumns>
              <TitleColumns>Ajuda e informações</TitleColumns>
              <UlOptions>
                {helpOptions.map((options) => (
                  <Li key={nanoid()}>{options}</Li>
                ))}
              </UlOptions>
            </DivColumns>
            <DivColumns>
              <TitleColumns>Institucional</TitleColumns>
              <UlOptions>
                {corporationOptions.map((options) => (
                  <Li key={nanoid()}>{options}</Li>
                ))}
              </UlOptions>
            </DivColumns>
            <DivColumns>
              <TitleColumns>Download</TitleColumns>
              <UlDownload>
                <LiDownload>
                  <AnchorStores
                    to="https://www.apple.com/br/app-store/"
                    target="_blank"
                  >
                    <ImgStores src={AppleStore} alt="Apple store link" />
                  </AnchorStores>
                </LiDownload>
                <LiDownload>
                  <AnchorStores
                    to="https://play.google.com/store/apps/"
                    target="_blank"
                  >
                    <ImgStores src={GooglePlay} alt="Google play store link" />
                  </AnchorStores>
                </LiDownload>
              </UlDownload>
            </DivColumns>
          </DivRight>
        </DivUp>
        <DivDown>
          <SpanTerms>TERMOS E CONDIÇÕES</SpanTerms>
          <SpanTerms>POLÍTICA DE PRIVACIDADE</SpanTerms>
        </DivDown>
      </DivContainer>
    </Foot>
  );
}

export default Footer;
