import React, { PropTypes } from 'react';
import { classNames } from '../lib/utils';
import styles from './style.css';

const Button = ({
  borderless,
  children,
  large,
  onClick,
  secondary,
  small,
  tertiary,
  warning,
}) => {
  const classes = classNames(styles, {
    borderless,
    large,
    secondary,
    small,
    tertiary,
    warning,
  });
  return (
    <button
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  borderless: PropTypes.bool,
  large: PropTypes.bool,
  onClick: PropTypes.func,
  secondary: PropTypes.bool,
  small: PropTypes.bool,
  tertiary: PropTypes.bool,
  warning: PropTypes.bool,
};

export default Button;