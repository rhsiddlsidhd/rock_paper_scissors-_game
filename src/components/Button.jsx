import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return (
    <>
      <RockPaperScissorsBtn onClick={props.onClick}>
        <img src={props.imagePath} alt={props.alt} />
      </RockPaperScissorsBtn>
    </>
  );
};

export default Button;

const RockPaperScissorsBtn = styled.button`
  border: none;
  background-color: transparent;
  transition: font-size 0.3s ease;
  cursor: pointer;
  & > img {
    width: 4rem;
    height: 4rem;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.2);
    }
  }
  @media screen and (max-width: 1024px) {
    & > img {
      width: 2rem;
      height: 2rem;
    }
  }
`;
