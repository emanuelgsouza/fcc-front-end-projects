import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import { DefaultColors } from '../styles'

const getColor = type => {
  if (type === 'primary') {
    return DefaultColors.secondaryColor;
  }

  if (type === 'danger') {
    return DefaultColors.light;
  }

  if (type === 'secondary') {
    return DefaultColors.primaryColor
  }

  return DefaultColors.light
}

const getBgColor = type => {
  if (type === 'primary') {
    return DefaultColors.primaryColor;
  }

  if (type === 'danger') {
    return DefaultColors.danger;
  }

  if (type === 'secondary') {
    return DefaultColors.secondaryColor
  }

  return DefaultColors.light
}

const Container = styled.div`
  text-align: center;
  padding: 2rem 2.4rem;
  font-size: 1.4rem;
  color: ${props => getColor(props.type)};
  background-color: ${props => getBgColor(props.type)};
`;

const Notification = props => {
  return (
    <Container className="notification" type={props.type}>
      {props.message}
    </Container>
  );
}

Notification.defaultProps = {
  type: 'primary'
};

Notification.propTypes = {
  type: propTypes.string,
  message: propTypes.string.isRequired
};

export default Notification;
