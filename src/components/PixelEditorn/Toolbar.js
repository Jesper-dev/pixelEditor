import React, { useState } from "react";
import styled from "styled-components";

const Toolbar = ({ setColor }) => {
  const [active, setActive] = useState(false);

  let colorArray = [
    "black",
    "grey",
    "blue",
    "darkblue",
    "green",
    "Lime",
    "brown",
    "yellow",
    "red",
    "purple",
    "pink",
    "orange",
    "turquoise",
  ];

  const runFuncsEraser = () => {
    setColor("white");
    setActive(true);
  };

  const runFuncsColor = (i) => {
    setColor(i);
    setActive(false);
  };

  return (
    <Wrapper>
      <EraserWrapper>
        <Eraser onClick={() => runFuncsEraser()}>
          <I
            style={active ? { color: "grey" } : { color: "#1687a7" }}
            className="fas fa-eraser"
          ></I>
        </Eraser>
      </EraserWrapper>
      <ColorWrapper>
        {colorArray.map((i) => {
          return (
            <Color
              key={i}
              onClick={() => runFuncsColor(i)}
              style={{ backgroundColor: i }}
            />
          );
        })}
      </ColorWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 5px solid #1687a7;
  box-shadow: 1px 1px 10px 5px;
  border-radius: 20px;
  width: 231px;
  height: 484px;
  margin-top: 10%;
  margin-left: 5%;

  display: flex;
  flex-flow: column nowrap;
`;

const ColorWrapper = styled.div`
  width: inherit;
  border-top: 5px solid #1687a7;

  display: flex;
  flex-flow: row wrap;
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
  cursor: grab;
`;

const I = styled.i`
  cursor: grab;
  font-size: 3.5rem;
  color: #1687a7;
`;

export default Toolbar;
