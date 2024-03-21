import React, { Component } from "react";

class Loading extends Component {
  render() {
    const { imgPath } = this.props;
    return (
      <>
        <img src={`${imgPath}/Loading.gif`} alt="로딩중"></img>
      </>
    );
  }
}

export default Loading;
