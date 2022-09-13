import React from "react";
import {
  OurNumbersWrap,
  LeftImage,
  BackgroundImage,
  BothContainer,
  Heading,
  NumbersContent,
  OurHeadContainer,
  OurHead,
  SpanHeading,
  Description,
  BorderBlank,
  TeamWrap,
  CodeWrap,
  Code,
  CodeDescription,
  BorderRight,
  MembersWrap,
  Members,
  MembersDescription,
  BorderRightBlank,
  ProjectWrap,
  Projects,
  ProjectDescription,
} from "styles/ourNumbers";
import sideImg from "assets/images/side-img.png";

function ourNumbers() {
  return (
    <OurNumbersWrap>
      <LeftImage>
        <BackgroundImage src={sideImg} alt="side-img" />
      </LeftImage>
      <BothContainer>
        <Heading>Let us tell a story of</Heading>
        <NumbersContent>Our Numbers</NumbersContent>
      </BothContainer>
      <OurHeadContainer>
        <OurHead>
          <SpanHeading>
            When You See Our Numbers, You'll Know Why We're The Best.
          </SpanHeading>
          <Description>
            We're a fastest growing community working hard to make things
            happen. We've got a lot of hands-on cumulative experience and a good
            amount of fire under our tails, though we are young.
          </Description>
        </OurHead>
        <BorderBlank></BorderBlank>
        <TeamWrap>
          <CodeWrap>
            <Code>500k+</Code>
            <CodeDescription>Lines of Code</CodeDescription>
          </CodeWrap>
          <BorderRight></BorderRight>
          <MembersWrap>
            <Members>140+</Members>
            <MembersDescription>Team Members</MembersDescription>
          </MembersWrap>
          <BorderRightBlank></BorderRightBlank>
          <ProjectWrap>
            <Projects>65+</Projects>
            <ProjectDescription>Completed Projects</ProjectDescription>
          </ProjectWrap>
        </TeamWrap>
      </OurHeadContainer>
    </OurNumbersWrap>
  );
}

export default ourNumbers;
