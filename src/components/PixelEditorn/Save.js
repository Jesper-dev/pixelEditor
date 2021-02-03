import React from "react";
import styled from "styled-components";

const Save = () => {
  return (
    <>
      <Button>SAVE</Button>
    </>
  );
};

const Button = styled.button`
  padding: 12px 12px;
  width: 120px;
  border: 3px solid #276678;
  border-radius: 20px;
  color: black;
  font-size: 1rem;
  background-color: #98ded9;
  outline: none;

  &:hover {
    cursor: pointer;
    opacity: 50%;
  }
`;

export default Save;
