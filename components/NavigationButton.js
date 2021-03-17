import React from 'react';

import Button from './Button';

import styles from './NavigationButton.module.css';

const NavigationButton = ({ onClick, notification, selected, children }) => (
  <Button
    onClick={onClick}
    className={
      selected
        ? `${styles.navButton} ${styles.selected}`
        : `${styles.navButton}`
    }
  >
    {notification && (
      <span className={styles.notification}>{notification}</span>
    )}
    {children}
  </Button>
);

export default NavigationButton;
