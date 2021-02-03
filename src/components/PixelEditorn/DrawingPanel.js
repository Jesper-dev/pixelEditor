import React from "react";
import styled from "styled-components";
import Pixel from "./Pixel";

const DrawingPanel = ({ color }) => {
  let rows = [];

  for (let i = 0; i < 29; i++) {
    rows.push(i);
  }

  return (
    <>
      <Editor>
        <ShowColor>
          Color: <span style={{ color: color }}>{color}</span>
        </ShowColor>
        <Canvas>
          <>
            {rows.map((i) => {
              return (
                <div key={i}>
                  {rows.map((i) => {
                    return <Pixel key={i} color={color} />;
                  })}
                </div>
              );
            })}
          </>
        </Canvas>
      </Editor>
    </>
  );
};

const Editor = styled.div`
  width: 550px;
  height: 550px;
  margin-left: 5%;
  margin-top: 2%;

  display: flex;
  flex-flow: column nowrap;
`;

const Canvas = styled.div`
  border: 1px solid black;
  box-shadow: 1px 1px 10px 5px;
  height: 492px;
  width: 492px;
  margin-top: 5%;

  background-color: white;

  display: flex;
  flex-flow: row nowrap;

  cursor: crosshair;
`;

const ShowColor = styled.p`
  margin: 0%;
  font-size: 1.2rem;
  font-family: "Raleway", sans-serif;
  font-weight: bold;
`;

export default DrawingPanel;
