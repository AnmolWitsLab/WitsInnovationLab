import React from "react";
import { TellUsWrap, FollowUs, BorderLine, MiddleIcons, IconsWrap } from "styles/intro/tellUs";

function TellUs() {
  return (
    <TellUsWrap>
      <FollowUs>Follow US</FollowUs>
      <BorderLine></BorderLine>
      <MiddleIcons>
        <IconsWrap>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-youtube"></i>
        </IconsWrap>
      </MiddleIcons>
    </TellUsWrap>
  );
}

export default TellUs;
