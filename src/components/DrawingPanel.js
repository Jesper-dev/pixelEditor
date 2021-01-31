import React from "react";
import styled from "styled-components";
import Row from "./Row";

const DrawingPanel = () => {
  let rows = [];

  for (let i = 0; i < 15; i++) {
    rows.push(i);
  }

  return (
    <>
      <Canvas>
        <>
          {rows.map((i) => {
            return (
              <div key={i}>
                {rows.map((i) => {
                  return <Row key={i} />;
                })}
              </div>
            );
          })}
        </>
      </Canvas>
    </>
  );
};

const Canvas = styled.div`
  border: 1px solid black;
  box-shadow: 1px 1px 10px 5px;
  height: 480px;
  width: 480px;
  margin-top: 5%;

  background-color: white;

  display: flex;
  flex-flow: row nowrap;
`;

export default DrawingPanel;
