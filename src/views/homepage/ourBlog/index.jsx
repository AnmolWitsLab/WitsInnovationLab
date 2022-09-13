import React from "react";
import {
  OurBlogWrap,
  ImageRight,
  BackGroundImage,
  Blog,
  Description,
  Heading,
  Section,
  SectionDescription,
  ArrowImage,
  LeftArrow,
  RightArrow,
  ImageSection,
  WilImage,
  Content,
  WilBlog,
  ContentDescription,
  BlockchainImage,
  BlockChain,
  CommercialImage,
  Commercial,
} from "styles/ourBlog";
import bg from "assets/images/bg.png";
import left from "assets/images/left.png";
import right from "assets/images/right.png";
import wil from "assets/images/wil.png";
import blockchain from "assets/images/blockchain.png";
import commercial from "assets/images/commercial.png";

function OurBlog() {
  return (
    <OurBlogWrap>
      <ImageRight>
        <BackGroundImage src={bg} alt="bg" />
      </ImageRight>
      <Blog>
        <Description>Our Thoughts in</Description>
        <Heading>Our Blog</Heading>
        <Section>
          <SectionDescription>
            We're here to make your thoughts on tech a little more… thought-ful.
          </SectionDescription>
          <ArrowImage>
            <LeftArrow src={left} alt="left" />
            <RightArrow src={right} alt="right" />
          </ArrowImage>
        </Section>
      </Blog>
      <ImageSection>
        <WilImage src={wil} alt="wil" />
        <Content>
          <WilBlog>WIL Blog</WilBlog>
          <ContentDescription>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat
          </ContentDescription>
        </Content>
        <BlockchainImage src={blockchain} alt="blockchain" />
        <BlockChain>Block Chain</BlockChain>
        <CommercialImage src={commercial} alt="commercial" />
        <Commercial>Commercial</Commercial>
      </ImageSection>
    </OurBlogWrap>
  );
}

export default OurBlog;
