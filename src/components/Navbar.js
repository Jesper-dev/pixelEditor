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
  color: #1687a7;
  letter-spacing: 2px;
  font-family: "Fira Sans", sans-serif;
  margin-left: 2%;
  text-shadow: -1px 0 #1687a7, 0 1px #1687a7, 1px 0 #1687a7, 0 -1px #1687a7;
`;

export default Navbar;
