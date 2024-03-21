import React, { Component } from "react";
import styled from "styled-components";

class Button extends Component {
  render() {
    const { onClick, imagePath, alt } = this.props;
    return (
      <>
        <RockPaperScissorsBtn onClick={onClick}>
          <img src={imagePath} alt={alt} />
        </RockPaperScissorsBtn>
      </>
    );
  }
}

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
