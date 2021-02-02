import React from "react";
import { createGlobalStyle } from "styled-components";

import Header from "./components/Header";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Fira Sans', sans-serif;
  }
`;

export default App;
