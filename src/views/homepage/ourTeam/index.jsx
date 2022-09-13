import React from "react";
import {
  OurTeamWrap,
  Team,
  Description,
  Heading,
  Content,
  MiddleSection,
  MainImage,
  Animator,
  AnimatorImage,
  GirlImage,
  Span200,
  YellText,
  Yellow,
  Boy,
  Girl2,
  Ux,
  Designer,
  Blue,
  Girl3,
  Number2,
  Found,
  Yellow2,
  Girl4,
  Developer,
  Blue2,
  Boy2,
  Boy3,
  JuliaDiv,
  JuliaH,
  JuliaP,
  JuliaD,
  Julia,
} from "styles/ourTeam";
import img6 from "assets/images/img6.png";
import animator from "assets/images/animator.png";
import girl from "assets/images/girl.png";
import yellow from "assets/images/yellow.png";
import boy from "assets/images/boy.png";
import girl2 from "assets/images/girl2.png";
import blue from "assets/images/blue.png";
import girl3 from "assets/images/girl3.png";
import yellow2 from "assets/images/yellow2.png";
import girl4 from "assets/images/girl4.png";
import blue2 from "assets/images/blue2.png";
import boy2 from "assets/images/boy2.png";
import boy3 from "assets/images/boy3.png";
import julia from "assets/images/julia.png";

function OurTeam() {
  return (
    <OurTeamWrap>
      <Team>
        <Description>Meet the brains</Description>
        <Heading>Our Team</Heading>
        <Content>We're A Team Of Thinkers, Dreamers, And Doers.</Content>
      </Team>
      <MiddleSection>
        <MainImage src={img6} alt="img6" />
        <Animator>Animator</Animator>
        <AnimatorImage src={animator} alt="animator" />
        <GirlImage src={girl} alt="girl" />
        <Span200>200+</Span200>
        <YellText>Employees</YellText>
        <Yellow src={yellow} alt="yellow" />
        <Boy src={boy} alt="boy" />
        <Girl2 src={girl2} alt="girl2" />
        <Ux>UX</Ux>
        <Designer>Designers</Designer>
        <Blue src={blue} alt="blue" />
        <Girl3 src={girl3} alt="girl3" />
        <Number2>2</Number2>
        <Found>Founders</Found>
        <Yellow2 src={yellow2} alt="yellow2" />
        <Girl4 src={girl4} alt="girl4" />
        <Developer>Developer</Developer>
        <Blue2 src={blue2} alt="blue2" />
        <Boy2 src={boy2} alt="boy2" />
        <Boy3 src={boy3} alt="boy3" />
        <JuliaDiv>
          <JuliaH>Julia Carter</JuliaH>
          <JuliaP>Sr. Developer</JuliaP>
          <JuliaD>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
          </JuliaD>
        </JuliaDiv>
        <Julia src={julia} alt="julia" />
      </MiddleSection>
    </OurTeamWrap>
  );
}

export default OurTeam;
