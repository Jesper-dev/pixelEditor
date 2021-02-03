import React from "react";
import { createGlobalStyle } from "styled-components";

import Header from "./components/Header";
import About from "./components/About";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <About />
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: #dee1ec;
  }
`;

export default App;
