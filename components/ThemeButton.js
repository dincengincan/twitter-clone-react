import React from 'react';

import Button from './Button';

import styles from './ThemeButton.module.css';
import baseStyles from './Button.module.css';

const ThemeButton = ({ large, fullWidth, children }) => (
  <Button
    fullWidth={fullWidth}
    className={
      `${baseStyles.button} ${styles.themeButton}` +
      (large ? ` ${styles.large}` : '')
    }
  >
    {children}
  </Button>
);

export default ThemeButton;
