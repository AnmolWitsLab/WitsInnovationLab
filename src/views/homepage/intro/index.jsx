import React from "react";
import {
  HeaderWrap,
  Heading,
  Span,
  Description,
  MiddleBtn,
  BtnTellUs,
  BtnArrow,
  IconWrap,
} from "styles/intro";
import TellUs from "views/homepage/intro/tellUs";
import IntroImage from "views/homepage/intro/introImage";

function Intro() {
  return (
    <>
      <HeaderWrap>
        <Heading>
          We're not just IT. We're a
          <Span> Business Transformation Company.</Span>
        </Heading>
        <Description>
          We are more than just a business. We're a community of like-minded
          individuals who share our love for connecting people with the best in
          their area.
        </Description>
        <MiddleBtn>
          <BtnTellUs>Tell Us About Your Project</BtnTellUs>
          <BtnArrow>
            <IconWrap>
              <i className="fa-solid fa-angle-right"></i>
            </IconWrap>
          </BtnArrow>
        </MiddleBtn>
        <TellUs />
        <IntroImage />
      </HeaderWrap>
    </>
  );
}

export default Intro;
