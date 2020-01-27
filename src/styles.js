import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  font-size: 2.4rem;
  margin-bottom: 2rem;
  font-weight: 600;
`;

export const Button = styled.button`
  display: block;
  font-size: 1.2rem;
  padding: 0.3rem 0.8rem;
  border: none;
  border-radius: 2px;
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.secondaryColor};
  border: 1px solid ${props => props.theme.secondaryColor};

  &:hover,
  &:focus {
    color: ${props => props.theme.primaryColor};
    background-color: ${props => props.theme.secondaryColor};
  }
`;
