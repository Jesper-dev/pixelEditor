import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

import DrawingPanel from "./components/DrawingPanel";
import Toolbar from "./components/Toolbar";

const App = () => {
  const [color, setColor] = useState("blue");
  return (
    <>
      <GlobalStyle />
      <Main>
        <ToolbarWrapper>
          <Toolbar setColor={setColor} />
        </ToolbarWrapper>

        <DrawingWrapper>
          <DrawingPanel color={color} />
        </DrawingWrapper>
      </Main>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
`;

const Main = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: row nowrap;
  height: 100vh;
  background-color: #dee1ec;
`;

//Kanske till dark-mode 574b90

const ToolbarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  width: 35%;
  height: 600px;
`;

const DrawingWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row nowrap;
  width: 65%;
  height: 600px;
`;

export default App;
