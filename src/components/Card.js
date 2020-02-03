import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Link } from "react-router-dom";

import { Title } from '../styles';

const Container = styled.div`
  max-width: 600px;
  margin: 5rem auto 0 auto;
  padding: 2rem 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);
  background-color: ${props => props.theme.primaryColor};
  color: white;

  hr {
    max-width: 250px;
    margin: 1rem auto;
  }
`;

const BackToHome = styled(Link)`
  text-align: center;
  margin: 0 auto;
  display: block;
  max-width: 200px;
  font-size: 1rem;
`;

const Card = (props) => {
  return (
    <Container>
      <Title className="title"> {props.title} </Title>

      <BackToHome to="/"> Back to home </BackToHome>

      <hr />

      {props.children}
    </Container>
  );
}

Card.propTypes = {
  title: propTypes.string.isRequired
}

export default Card;
