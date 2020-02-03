import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

import { Title } from '../styles';

const HomeContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;

  a:not(:last-child) {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  text-decoration: none;
  text-align: center;
  padding: 1rem 1.2rem;
  border: 1px solid ${props => props.theme.primaryColor};
  color: ${props => props.theme.primaryColor};
  font-size: 1.4rem;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.secondaryColor};
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Title className="title"> FCC Front End Projects </Title>

      <p>
        This website implement some simple application in React inspired in <a className="link" href="https://www.freecodecamp.org/learn"> freeCodeCamp </a> projects, like Palindrome Checker, Roman Converter among others...
      </p>

      <nav>
        <StyledLink to="/palindrome"> Palindrome </StyledLink>
        <StyledLink to="/roman-converter"> Roman Converter </StyledLink>
        <StyledLink to="/cash-register"> Cash Register </StyledLink>
        <StyledLink to="/pomodoro"> Pomodoro </StyledLink>
      </nav>
    </HomeContainer>
  );
}

export default Home;

