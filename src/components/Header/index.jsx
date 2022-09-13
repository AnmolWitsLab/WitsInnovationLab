import React from "react";
import {
  HeadWrap,
  Navbar,
  NavIcon,
  A,
  Img,
  List,
  Ul,
  Li,
  Btn,
  Button,
} from "styles/components/Header";
import wits from "assets/images/wits-logo.png";

function Index() {
  return (
    <HeadWrap>
      <Navbar>
        <NavIcon>
          <A href="https://thewitslab.com/">
            <Img src={wits} alt="wits-logo" />
          </A>
        </NavIcon>
        <List>
          <Ul>
            <A href="https://thewitslab.com/about">
              <Li>
                About Us<i className="fa-solid fa-angle-down"></i>
              </Li>
            </A>
            <A href="/">
              <Li>Industry</Li>
            </A>
            <A href="/">
              <Li>
                Services<i className="fa-solid fa-angle-down"></i>
              </Li>
            </A>
            <A href="https://thewitslab.com/careers">
              <Li>Career</Li>
            </A>
          </Ul>
        </List>
        <Btn>
          <Button>Let's Connect</Button>
        </Btn>
      </Navbar>
    </HeadWrap>
  );
}

export default Index;
