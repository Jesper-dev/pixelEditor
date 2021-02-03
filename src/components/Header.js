import React, { useState } from "react";
import styled from "styled-components";

import DrawingPanel from "./PixelEditorn/DrawingPanel";
import Toolbar from "./PixelEditorn/Toolbar";
import Navbar from "./Navbar";
import Save from "./PixelEditorn/Save";

const Header = () => {
  const [color, setColor] = useState("blue");

  return (
    <>
      <HeaderWrapper>
        <Navbar />
        <EditorWrapper>
          <ToolbarWrapper>
            <Toolbar setColor={setColor} />
          </ToolbarWrapper>

          <DrawingWrapper>
            <DrawingPanel color={color} />
          </DrawingWrapper>

          <SaveWrapper>
            <Save />
          </SaveWrapper>
        </EditorWrapper>
      </HeaderWrapper>
    </>
  );
};

const HeaderWrapper = styled.header`
  display: flex;

  align-items: center;
  flex-flow: column nowrap;
  height: 100vh;
  background-color: #dee1ec;
`;

const EditorWrapper = styled.div`
  height: 70vh;
  width: 99%;
  margin-top: 7%;
  display: flex;
  flex-flow: row nowrap;
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
  width: 30%;
  height: 600px;
`;

const SaveWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  width: 6%;
  height: 600px;
`;

export default Header;
