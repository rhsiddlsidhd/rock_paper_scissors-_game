import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loading from "./Loading";

const Inventory = (props) => {
  const [loading, setLoading] = useState(false);

  const imgPath = props.imgPath;

  const direction = props.itemTitle === "User" ? "Left" : "Right";

  const name = props.item.name;

  let resultText;
  const srcImg = `${imgPath}/${direction}_${name}.png`;

  switch (props.result) {
    case "Win":
      resultText = props.itemTitle === "User" ? props.result : "Lose";
      break;
    case "Lose":
      resultText = props.itemTitle === "User" ? props.result : "Win";
      break;
    default:
      resultText = "Draw";
  }

  useEffect(() => {
    const imgLoading = new Image();
    imgLoading.onload = () => {
      setLoading(true);
    };
    imgLoading.src = srcImg;
  }, [srcImg]);

  const formattedResultText = resultText.toLowerCase();

  return (
    <Item>
      <ItemTitle>{props.itemTitle}</ItemTitle>
      <ItemImg>
        {loading ? (
          <img src={props.item && srcImg} alt=""></img>
        ) : (
          <Loading imgPath={imgPath} />
        )}
      </ItemImg>
      <ItemResult className={`${formattedResultText}`}>
        {props.result && resultText}
      </ItemResult>
    </Item>
  );
};

const Item = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  @media screen and (max-height: 890px) {
    justify-content: center;
  }
`;
const ItemTitle = styled.h1`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    width: 100%;
    font-size: 1.5rem;
  }
`;

const ItemImg = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    width: 50%;
    height: 35%;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 30%;
    > img {
      width: 30%;
      height: 50%;
    }
  }
`;

const ItemResult = styled.h2`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  &.win {
    color: greenyellow;
  }

  &.lose {
    color: red;
  }

  &.draw {
    color: #0000007a;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    font-size: 1.5rem;
  }
  @media screen and (max-height: 890px) {
    display: none;
  }
`;

export default Inventory;
