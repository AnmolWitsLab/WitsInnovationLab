import React from "react";
import {
  OurClientsWrap,
  MainContainer,
  MainDescription,
  MainHeading,
  SpanContent,
  Description,
  Images,
  Nutrition,
  Trepp,
  Farms,
  Affinidi,
  Bcg,
  ImagesContainer,
  Earn,
  Hermes,
  Design,
  Moon,
  Pay,
} from "styles/ourClients";
import nutrition from "assets/images/nutrition.png";
import tre from "assets/images/tre.png";
import farms from "assets/images/farms.png";
import aff from "assets/images/aff.png";
import bcg from "assets/images/bcg.png";
import earn from "assets/images/earn.png";
import hermes from "assets/images/hermes.png";
import design from "assets/images/design.png";
import moon from "assets/images/moon.png";
import pay from "assets/images/pay.png";

function OurClients() {
  return (
    <OurClientsWrap>
      <MainContainer>
        <MainDescription>See who's winning with us</MainDescription>
        <MainHeading>Our Clients</MainHeading>
        <SpanContent>These Powerhouses Are Already Winning Business With Us.</SpanContent>
        <Description>
          We Love What We Do, And We Hope You'll Let Us Help You Too.
        </Description>
      </MainContainer>
      <Images>
        <Nutrition src={nutrition} alt="nutrition" />
        <Trepp src={tre} alt="tre" />
        <Farms src={farms} alt="farms" />
        <Affinidi src={aff} alt="aff" />
        <Bcg src={bcg} alt="bcg" />
      </Images>
      <ImagesContainer>
        <Earn src={earn} alt="earn" />
        <Hermes src={hermes} alt="hermes" />
        <Design src={design} alt="design" />
        <Moon src={moon} alt="moon" />
        <Pay src={pay} alt="pay" />
      </ImagesContainer>
    </OurClientsWrap>
  );
}

export default OurClients;
