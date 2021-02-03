import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <Title>Dots...</Title>
    </Nav>
  );
};

const Nav = styled.nav`
  width: 99%;
  height: 100px;

  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3.2rem;
  color: #0a043c;
  letter-spacing: 2px;
  font-family: "Fira Sans", sans-serif;
  margin-left: 2%;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

export default Navbar;
