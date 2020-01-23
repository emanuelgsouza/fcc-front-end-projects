import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

import { Title } from '../styles';

const HomeContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
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
      <Title> FCC Front End Projects </Title>

      <nav>
        <StyledLink to="/palindrome"> Palindrome </StyledLink>
      </nav>
    </HomeContainer>
  );
}

export default Home;

