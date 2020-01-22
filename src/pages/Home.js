import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

import { Title } from '../styles';

const HomeContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 5rem;
`;

const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  text-decoration: none;
  text-align: center;
  padding: 1rem 1.2rem;
  border: 1px solid #3A3335;
  color: #3A3335;
  font-size: 1.4rem;

  &:hover,
  &:focus {
    background-color: #3A3335;
    color: #FDF0D5;
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

