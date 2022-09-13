import styled from "styled-components";
import BackgroundImage from "assets/images/back-img.png";

export const Contain = styled.div`
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 4vh;
`;
export const HeadWrap = styled.div`
  i {
    font-size: clamp(0.6rem, 1.1vw, 1.3rem);
    margin: 0 0.5vw;
  }
`;

export const Navbar = styled.div`
  display: flex;
  align-items: center;
  margin: 0 1.5vw 0 5vw;
`;

export const NavIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
`;

export const A = styled.a`
  text-decoration: none;
`;

export const Img = styled.img`
  width: clamp(5rem, 10vw, 15rem);
`;
export const List = styled.div`
  width: 60%;
`;
export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 1.5vw;
`;

export const Li = styled.li`
  list-style-type: none;
  color: #1d1d1d;
  margin: 0 0.5vw;
  font-size: clamp(0.6rem, 1.1vw, 1.3rem);
  font-weight: 600;

  &:hover {
    border-bottom: 1px solid #f9c51c;
  }
`;
export const Btn = styled.div`
  display: flex;
  width: 20%;
`;
export const Button = styled.button`
  background: #f9c51c;
  border: none;
  font-size: clamp(0.6rem, 1.1vw, 1.3rem);
  padding: 1.2vh 1.5vw;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    border: 1px solid black;
  }

  &:active {
    background-color: black;
    color: white;
  }
`;
