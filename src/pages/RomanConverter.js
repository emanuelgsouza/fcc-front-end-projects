import React from 'react';
import RomanConverterApplication from '../modules/roman-converter';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem;
`;

const RomanConverter = () => {
  return (
    <Container>
      <RomanConverterApplication />
    </Container>
  )
}

export default RomanConverter;

