import React from "react";
import {
  ContactWrap,
  ContactBg,
  ContactBgImg,
  Got,
  Contact,
  Question,
  Input,
  BlockLeft,
  CircleImg,
  Circle,
  Project,
  WrapRight,
  Right,
  Inter,
  Select,
  Field,
  Add,
  Icon,
  SpanAdd,
  Optional,
  SendBtn,
  Send,
  LineSection,
  BorderWrapLeft,
  BorderContent,
  BorderWrapRight,
  LDesc,
  LineDesc,
  WholeSection,
  WhatSection,
  WhatsApp,
  What,
  CalSection,
  Calendly,
  Cal,
  Input2,
  Option,
} from "styles/contactUs";

import contactBg from "assets/images/contact-bg.png";
import mask from "assets/images/mask.png";
import circle from "assets/images/circle.png";
import icon from "assets/images/icon.png";
import whatsapp from "assets/images/whatsapp.png";
import calendly from "assets/images/calendly.png";

function ContactUs() {
  return (
    <ContactWrap>
      <ContactBg>
        <ContactBgImg src={contactBg} alt="contact-bg" />
      </ContactBg>
      <Got>Got an idea?</Got>
      <Contact>Contact Us</Contact>
      <Question>You have questions. We have answers.</Question>
      <Input>
        <BlockLeft>
          <CircleImg src={mask} alt="mask" />
          <Circle src={circle} alt="circle" />
          <Project>Have a Project? We would love to help</Project>
        </BlockLeft>
        <WrapRight>
          <Right>
            <Inter>I’m interested in....</Inter>
            <Select>
              <Option>All Services</Option>
            </Select>
            <Field>
              <Input2 type="text" placeholder="Your name"></Input2>
              <Input2 type="email" placeholder="Your email"></Input2>
              <Input2
                type="text"
                placeholder="Tell us about your project"
              ></Input2>
            </Field>
            <Add>
              <Icon src={icon} alt="icon" />
              <SpanAdd>Add Attachment</SpanAdd>
              <Optional>(Optional)</Optional>
            </Add>
            <SendBtn>
              <Send>Send Request</Send>
            </SendBtn>
            <LineSection>
              <BorderWrapLeft></BorderWrapLeft>
              <BorderContent>or</BorderContent>
              <BorderWrapRight></BorderWrapRight>
            </LineSection>
            <LDesc>
              <LineDesc>
                If you're ready to make a change, we're ready to help. Just
                connect with us today!
              </LineDesc>
            </LDesc>
            <WholeSection>
              <WhatSection>
                <WhatsApp src={whatsapp} alt="whatsapp" />
                <What>Whatsapp</What>
              </WhatSection>
              <CalSection>
                <Calendly src={calendly} alt="calendly" />
                <Cal>Calendly</Cal>
              </CalSection>
            </WholeSection>
          </Right>
        </WrapRight>
      </Input>
    </ContactWrap>
  );
}

export default ContactUs;
