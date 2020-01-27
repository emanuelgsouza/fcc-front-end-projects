import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  label {
    display: block;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  input {
    font-size: 1.2rem;
    display: block;
    width: 100%;
    margin-bottom: 0.5rem;
    padding: 0.3rem 0.5rem 0.3rem 0;
    background-color: ${props => props.theme.primaryColor};
    border: none;
    border-bottom: 2px solid ${props => props.theme.secondaryColor};
    color: ${props => props.theme.secondaryColor};
    margin-bottom: 10px;
  }
`;

const Input = props => {
  return (
    <Container>
      <label htmlFor={props.id}>
        {props.label}
      </label>

      <input
        id={props.id}
        {...props}
      />
    </Container>
  );
}

export default Input;
