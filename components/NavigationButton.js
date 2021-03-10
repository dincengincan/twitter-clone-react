import React from 'react';

import Button from './Button';

import styles from './NavigationButton.module.css';

const NavigationButton = ({ notification, selected, children }) => (
  <Button
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
