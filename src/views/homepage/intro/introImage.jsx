import React from "react";
import { MiddleImage, GroupImage } from "styles/intro/intoImage";

import group from "assets/images/group.png";

function IntroImage() {
  return (
    <MiddleImage>
      <GroupImage src={group} alt="group" />
    </MiddleImage>
  );
}

export default IntroImage;
