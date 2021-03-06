import React from 'react';
import PropTypes from 'prop-types';

const UilExclamationCircle = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M12,7a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V8A1,1,0,0,0,12,7Zm.92,8.62a.76.76,0,0,0-.09-.18l-.12-.15a1,1,0,0,0-1.09-.21,1.15,1.15,0,0,0-.33.21A1,1,0,0,0,11,16a1,1,0,0,0,.08.38.9.9,0,0,0,.54.54.94.94,0,0,0,.76,0,.9.9,0,0,0,.54-.54A1,1,0,0,0,13,16a1.36,1.36,0,0,0,0-.2A.64.64,0,0,0,12.92,15.62ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z'
  }));
};

UilExclamationCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilExclamationCircle.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilExclamationCircle;