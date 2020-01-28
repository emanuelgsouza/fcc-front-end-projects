import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  ul {
    list-style: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    padding-inline-start: 20px;
  }
`;

export const ShowResult = props => {
  const { change, status } = props.result

  return (
    <Container>
      <p> The cash register is <span className="link">{status}</span> </p>

      <p> The change that you need to do is: </p>

      <ul>
      {
        change.map((item, key) => {
          const [coin, value] = item
          return (
            <li key={key}>
              <p> {coin} - $ {value} </p>
            </li>
          )
        })
      }
      </ul>
    </Container>
  )
}