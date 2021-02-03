import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Main>
      <FlexContainerTitle>
        <Title>About</Title>
      </FlexContainerTitle>

      <FlexContainerText>
        <Text>
          Welcome to a very, very simple pixel editor. Make <em>simple</em>{" "}
          pixel art and make it <strong>fast</strong>. Share it with others on
          the 'discover' page or keep it to yourself.
        </Text>
      </FlexContainerText>
    </Main>
  );
};

const Main = styled.main`
  height: 100vh;
  background-color: #1687a7;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const FlexContainerTitle = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: #f6ecf0;
  text-decoration: underline;
  font-family: "Raleway", sans-serif;
`;

const FlexContainerText = styled.div`
  width: 50%;
  height: 60%;
  margin-top: 2%;

  display: flex;
  justify-content: center;
`;

const Text = styled.p`
  font-size: 2rem;
  color: #f6ecf0;
  font-family: "Raleway", sans-serif;
`;

export default About;
