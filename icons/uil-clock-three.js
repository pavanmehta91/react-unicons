import React from 'react';
import PropTypes from 'prop-types';

const UilClockThree = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M15,11H13V7a1,1,0,0,0-2,0v5a1,1,0,0,0,1,1h3a1,1,0,0,0,0-2ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z'
  }));
};

UilClockThree.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilClockThree.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilClockThree;