import React, { Component } from "react";
import styled from "styled-components";
import Loading from "../classComponents/Loading";

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      srcImg: `${props.imgPath}/${props.itemTitle}_${props.item.name}.png`,
    };
  }

  componentDidMount() {
    this.loadImage(this.state.srcImg);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.imgPath !== this.props.imgPath ||
      prevProps.itemTitle !== this.props.itemTitle ||
      prevProps.item.name !== this.props.item.name
    ) {
      const srcImg = `${this.props.imgPath}/${
        this.props.itemTitle === "User" ? "Left" : "Right"
      }_${this.props.item.name}.png`;
      console.log("a", srcImg);
      this.setState({ srcImg: srcImg });
      this.loadImage(srcImg);
    }
  }

  loadImage(src) {
    const imgLoading = new Image();
    imgLoading.onload = () => {
      this.setState({ loading: true });
    };
    imgLoading.src = src;
  }

  render() {
    const { srcImg, loading } = this.state;
    const { itemTitle, result } = this.props;

    let resultText;
    switch (result) {
      case "Win":
        resultText = itemTitle === "User" ? result : "Lose";
        break;
      case "Lose":
        resultText = itemTitle === "User" ? result : "Win";
        break;
      default:
        resultText = "Draw";
    }

    const formattedResultText = resultText.toLowerCase();
    return (
      <Item>
        <ItemTitle>{this.props.itemTitle}</ItemTitle>
        <ItemImg>
          {loading ? (
            <img src={this.props.item && srcImg} alt=""></img>
          ) : (
            <Loading imgPath={this.props.imgPath} />
          )}
        </ItemImg>
        <ItemResult className={`${formattedResultText}`}>
          {this.props.result && resultText}
        </ItemResult>
      </Item>
    );
  }
}

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
