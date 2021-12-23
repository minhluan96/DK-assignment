import React from 'react';
import PropTypes from 'prop-types';
import { StyledTag } from './styles';

export default function Tag({ children }) {
  return <StyledTag>{children}</StyledTag>;
}

Tag.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};
