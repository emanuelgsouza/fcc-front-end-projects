import React from 'react';
import CashRegisterApplication from '../modules/cash-register';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem;
`;

const CashRegister = () => {
  return (
    <Container>
      <CashRegisterApplication />
    </Container>
  )
}

export default CashRegister;

