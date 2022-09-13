import React from "react";
import {
  LastSection,
  FooterLeft,
  FooterL,
  FooterLo,
  FooterLogo,
  FooterText,
  Text,
  FooterLeftSection,
  AboutUs,
  Au,
  AboutDrop,
  General,
  Gn,
  BlankRow,
  Drop,
  GeneralDrop,
  Cont,
  Co,
  EmptyRow,
  CoDrop,
  ContactUsDrop,
  ContSection,
  FooterRight,
  FooterR,
  FollowUsR,
  FooterIcon,
  Sub,
  Subs,
  InputSection,
  Email,
  Subscribe,
  WhiteSection,
  LeftSection,
  AllSame,
  RightSection,
  AllSection,
  LeftImage,
  LeftImg,
  RightImage,
  RightImg,
} from "styles/components/Footer";

import Facebook from "assets/svg/Facebook";
import Linkedin from "assets/svg/Linkedin";
import Twitter from "assets/svg/Twitter";
import YouTube from "assets/svg/YouTube";
import Mail from "assets/svg/Mail";
import left from "assets/images/left-img.png";
import right from "assets/images/right-img.png";
import wits from "assets/images/wits-footer-logo.png";

function Footer() {
  return (
    <AllSection>
      <LeftImage>
        <LeftImg src={left} alt="left-img" />
      </LeftImage>
      <RightImage>
        <RightImg src={right} alt="right-img" />
      </RightImage>
      <LastSection>
        <FooterLeft>
          <FooterL>
            <FooterLo>
              <FooterLogo src={wits} alt="wits-footer-logo" />
            </FooterLo>
            <FooterText>
              <Text>
                Wits Innovation Lab is where creativity and innovation flourish.
                We provide the tools you need to come up with innovative
                solutions for today's businesses, big or small.
              </Text>
            </FooterText>
          </FooterL>
          <FooterLeftSection>
            <AboutUs>
              <Au>About Us</Au>
              <AboutDrop>Services</AboutDrop>
              <AboutDrop>Case Studies</AboutDrop>
              <AboutDrop>Our Process</AboutDrop>
              <AboutDrop>Industries</AboutDrop>
            </AboutUs>
            <General>
              <Gn>General</Gn>
              <BlankRow></BlankRow>
              <Drop>
                <GeneralDrop>Company</GeneralDrop>
                <GeneralDrop>Career</GeneralDrop>
                <GeneralDrop>Blogs</GeneralDrop>
                <GeneralDrop>Contact Us</GeneralDrop>
              </Drop>
            </General>
            <Cont>
              <Co>Contact Us</Co>
              <EmptyRow></EmptyRow>
              <CoDrop>
                <ContactUsDrop>SCO 40-41 D, 3rd floor,</ContactUsDrop>
                <ContactUsDrop>City Heart, Kharar, Punjab-140301</ContactUsDrop>
                <ContSection>
                  <ContactUsDrop>Unit 37 Tileyard Road, N7 9AH</ContactUsDrop>
                  <ContactUsDrop>California, United States</ContactUsDrop>
                </ContSection>
              </CoDrop>
            </Cont>
          </FooterLeftSection>
        </FooterLeft>
        <FooterRight>
          <FooterR>
            <FollowUsR>Follow Us</FollowUsR>
            <FooterIcon>
              <Linkedin />
              <Facebook />
              <Twitter />
              <YouTube />
            </FooterIcon>
          </FooterR>
          <Sub>
            <Subs>Subscribe to Our Newsletter</Subs>
          </Sub>
          <InputSection>
            <Mail />
            <Email type="text" placeholder="Enter Your Email" />
            <Subscribe>Subscribe</Subscribe>
          </InputSection>
        </FooterRight>
      </LastSection>
      <WhiteSection>
        <LeftSection>
          <AllSame>Terms & Conditions</AllSame>
          <AllSame>Privacy Policy</AllSame>
          <AllSame>Legal</AllSame>
        </LeftSection>
        <RightSection>
          <AllSame>
            Copyright © 2020. witsinnovationlab. All rights reserved.
          </AllSame>
        </RightSection>
      </WhiteSection>
    </AllSection>
  );
}

export default Footer;
