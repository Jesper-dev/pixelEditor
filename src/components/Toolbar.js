import React from "react";
import styled from "styled-components";

const Toolbar = ({ setColor }) => {
  return (
    <Wrapper>
      <EraserWrapper>
        <Eraser onClick={() => setColor("white")}>
          <I className="fas fa-eraser"></I>
        </Eraser>
      </EraserWrapper>
      <ColorWrapper>
        <Color
          onClick={() => setColor("black")}
          style={{ backgroundColor: "black" }}
        ></Color>
        <Color
          onClick={() => setColor("blue")}
          style={{ backgroundColor: "blue" }}
        ></Color>
        <Color
          onClick={() => setColor("green")}
          style={{ backgroundColor: "green" }}
        ></Color>
        <Color
          onClick={() => setColor("grey")}
          style={{ backgroundColor: "grey" }}
        ></Color>
      </ColorWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 5px solid #2d767f;
  box-shadow: 1px 1px 10px 5px;
  border-radius: 20px;
  width: 250px;
  height: 484px;
  margin-top: 10%;

  display: flex;
  flex-flow: column nowrap;
`;

const ColorWrapper = styled.div`
  width: inherit;
  height: 60%;
  border-top: 5px solid #2d767f;

  display: flex;
  flex-flow: row nowrap;
`;

const EraserWrapper = styled.div`
  width: inherit;
  height: 30%;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
`;

const Eraser = styled.div`
  width: 60px;
  height: 60px;
  margin-left: 10%;
`;

const Color = styled.div`
  border: 3px solid black;
  border-left: none;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const I = styled.i`
  cursor: pointer;
  font-size: 3.5rem;
  color: #10316b;
`;

export default Toolbar;
