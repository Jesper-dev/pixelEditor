import React, { useState } from "react";
import styled from "styled-components";

const Pixel = ({ color }) => {
  const [backColor, setBackColor] = useState("white");

  return (
    <Wrapper
      onClick={() => setBackColor(color)}
      style={{ backgroundColor: backColor }}
    ></Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid black;
  width: 15px;
  height: 15px;
`;

export default Pixel;
