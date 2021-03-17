import React from 'react';

import styles from './Button.module.css';

const Button = ({ fullWidth, children, className, onClick }) => (
  <button
    onClick={onClick}
    type="button"
    className={
      styles.button +
      (fullWidth ? ` ${styles.fullWidth}` : '') +
      (className ? ` ${className}` : '')
    }
  >
    {children}
  </button>
);

export default Button;
