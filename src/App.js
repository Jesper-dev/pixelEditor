import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import DrawingPanel from "./components/DrawingPanel";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header>
        <Title>Pixel Editor!</Title>
        <DrawingPanel />
      </Header>
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

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  height: 100vh;
  background-color: #6d1026;
`;

export default App;
