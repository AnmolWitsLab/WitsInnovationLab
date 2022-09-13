import styled from "styled-components";

export const ContactWrap = styled.div`
  margin: 12vw 9.5vw 0 9.5vw;
`;

export const ContactBg = styled.div`
  position: absolute;
  width: calc(100% - 63.2%);
  right: 0;
  margin: 10.5vw 0 0 0;
`;

export const ContactBgImg = styled.img`
  width: calc(100%);
`;

export const Got = styled.p`
  color: rgba(130, 130, 130, 1);
  font-weight: 500;
  font-size: 1.2vw;
`;

export const Contact = styled.h1`
  border-bottom: 0.8vw solid #f9c51c;
  height: 3.65vw;
  width: fit-content;
  color: rgba(29, 29, 29, 1);
  font-weight: 700;
  font-size: 3.4vw;
  margin: 0.8vw 0 1vw 0;
`;

export const Question = styled.p`
  color: rgba(40, 40, 40, 1);
  text-transform: capitalize;
  font-size: clamp(0.8rem, 1.22vw, 50rem);
  width: calc(100% - 35.5%);
  font-weight: 700;
  margin: 2.5vw 0 0 0;
`;

export const Input = styled.div`
  border: 1.5px solid rgba(29, 46, 136, 1);
  border-radius: 1.25vw;
  display: flex;
  margin: 6vw 0 0 0;
  height: 49.2vw;
`;

export const BlockLeft = styled.div`
  background-color: rgba(29, 46, 136, 1);
  width: calc(100% - 57.2%);

  border-radius: 1.25vw 0 0 1.25vw;
  position: relative;
`;

export const CircleImg = styled.img`
  width: calc(100% - 0%);
  height: calc(100% - 0%);
`;

export const Circle = styled.img`
  position: absolute;
  top: 1.5vw;
  left: 2vw;
  width: calc(100% - 22vw);
  height: calc(100% - 36.6vw);
`;

export const Project = styled.p`
  position: absolute;
  top: 16.8vw;
  left: 2.5vw;
  font-weight: 600;
  font-size: clamp(0.6rem, 3.6vw, 20rem);
  width: calc(100% - 20%);
  color: white;
`;

export const WrapRight = styled.div`
  width: calc(100% - 42.8%);
  background-color: #ffffff;
  border-radius: 0 1.25vw 1.25vw 0;
  padding: 2vw 3.5vw 2vw 6vw;
  z-index: 3;
`;

export const Right = styled.div``;

export const Inter = styled.p`
  font-weight: 600;
  font-size: clamp(0.4rem, 1.11vw, 5rem);
`;

export const Select = styled.select`
  background: #ffffff;
  border: 1px solid #000000;
  outline: none;
  height: 3.05vw;
  padding: 0 0 0 0.8vw;
  margin: 1vw 0 0 0;
  font-weight: 600;
  font-size: clamp(0.4rem, 1.11vw, 5rem);
  color: #4f4f4f;
  cursor: pointer;
  width: calc(100% - 5%);
`;

export const Option = styled.option``;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5vw;
  margin: 3.5vw 0 0 0;
`;

export const Input2 = styled.input`
  color: #828282;
  font-weight: 400;
  font-size: clamp(0.4rem, 1.11vw, 5rem);
  border: none;
  border-bottom: 1px solid #000000;
  outline: none;
  background: #ffffff;
  width: calc(100% - 5%);
`;

export const Add = styled.div`
  display: flex;
`;

export const Icon = styled.img`
  margin: 2vw 0 0 0;
  width: clamp(0.6rem, 1.6vw, 5rem);
`;
export const SpanAdd = styled.span`
  font-weight: 600;
  font-size: clamp(0.4rem, 1.11vw, 5rem);
  margin: 2.2vw 0 0 1.2vw;
  cursor: pointer;
`;

export const Optional = styled.p`
  font-size: clamp(0.4rem, 1.11vw, 5rem);
  margin: 2.2vw 0 0 1vw;
`;

export const SendBtn = styled.div`
  margin: 3vw 0 0 0;
`;

export const Send = styled.button`
  background: #f9c51c;
  border: none;
  font-size: clamp(0.4rem, 1.2vw, 5rem);
  font-weight: 600;
  padding: 1vw 10vw 1vw 10vw;
  cursor: pointer;
  width: calc(100% - 5%);
`;

export const LineSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2vw 0 0 0;
  width: calc(100% - 5%);
`;

export const BorderWrapLeft = styled.div`
  border-bottom: 0.1vw solid #333333;
  width: calc(100% - 55%);
`;

export const BorderContent = styled.p`
  color: #333333;
  font-weight: 600;
  font-size: clamp(0.4rem, 1.25vw, 5rem);
`;

export const BorderWrapRight = styled.div`
  border-bottom: 0.1vw solid #333333;
  width: calc(100% - 55%);
`;

export const LDesc = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: 2vw 0 0 0;
`;

export const LineDesc = styled.p`
  color: #333333;
  text-align: center;
  font-weight: 600;
  font-size: clamp(0.4rem, 1.11vw, 5rem);
  width: calc(100% - 30%);
`;

export const WholeSection = styled.div`
  margin: 2vw 0 0 0;
  display: flex;
  justify-content: space-between;
  width: calc(100% - 5%);
`;

export const WhatSection = styled.div`
  border: 0.1vw solid #000000;
  display: flex;
  width: calc(100% - 53%);
  align-items: center;
  justify-content: center;
  padding: 0.89vw 4.39vw 0.89vw 4.39vw;
`;

export const WhatsApp = styled.img`
  width: clamp(0.8rem, 1.9vw, 10rem);
`;

export const What = styled.p`
  font-size: clamp(0.4rem, 1.22vw, 5rem);
  font-weight: 600;
  margin: 0 0 0 0.8vw;
`;

export const CalSection = styled.div`
  border: 0.1vw solid #000000;
  display: flex;
  width: calc(100% - 53%);
  align-items: center;
  justify-content: center;
  padding: 0.89vw 4.39vw 0.89vw 4.39vw;
`;

export const Calendly = styled.img`
  width: clamp(0.8rem, 1.9vw, 10rem);
`;

export const Cal = styled.p`
  font-size: clamp(0.4rem, 1.22vw, 5rem);
  font-weight: 600;
  margin: 0 0 0 0.8vw;
`;
