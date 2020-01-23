import React from 'react';
import PalindromeApplication from '../modules/palindrome';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem;
`;

const Palindrome = () => {
  return (
    <Container>
      <PalindromeApplication />
    </Container>
  )
}

export default Palindrome;

