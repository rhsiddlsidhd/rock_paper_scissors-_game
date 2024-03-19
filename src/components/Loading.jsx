import React from "react";

const Loading = (props) => {
  return (
    <>
      <img src={`${props.imgPath}/Loading.gif`} alt="로딩중"></img>
    </>
  );
};

export default Loading;
