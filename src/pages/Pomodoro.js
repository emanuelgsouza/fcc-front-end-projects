import React from 'react';
import PomodoroApplication from '../modules/pomodoro';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem;
`;

const Palindrome = () => {
  return (
    <Container>
      <PomodoroApplication />
    </Container>
  )
}

export default Palindrome;

