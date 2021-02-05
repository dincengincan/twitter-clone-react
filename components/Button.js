import React from 'react';

import styles from './Button.module.css';

const Button = ({ fullWidth, children, className }) => (
  <button
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
