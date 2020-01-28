import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  padding: 0 1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const Copyright = () => {
  return (
    <Container>
      <p>
        A project by <a
          className="link"
          title="Go to my personal website"
          href="emanuelgsouza.dev">emanuelgsouza.dev</a> made with React.
      </p>

      <p>
        Check the repository on <a className="link" href="https://github.com/emanuelgsouza/fcc-front-end-projects" target="blank" title="Check the repository on Github">Github</a>.
      </p>
    </Container>
  );
}

export default Copyright;
