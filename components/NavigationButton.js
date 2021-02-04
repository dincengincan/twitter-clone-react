import React from 'react';

import Button from './Button';

import styles from './NavigationButton.module.css';
import baseStyles from './Button.module.css';

const NavigationButton = ({ notification, selected, children }) => (
  <Button
    className={
      selected
        ? `${baseStyles.button} ${styles.navButton} ${styles.selected}`
        : `${baseStyles.button} ${styles.navButton}`
    }
  >
    {children}
    {notification && (
      <span className={styles.notification}>{notification}</span>
    )}
  </Button>
);

export default NavigationButton;
