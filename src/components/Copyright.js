import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  padding: 0 1rem;
`;

const Copyright = () => {
  return (
    <Container>
      <p>
        A project by <a
          className="link"
          title="Go to my personal website"
          href="emanuelgsouza.dev">emanuelgsouza.dev</a> made with React
      </p>
    </Container>
  );
}

export default Copyright;
