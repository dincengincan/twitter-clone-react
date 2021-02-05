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
    {children}
    {notification && (
      <span className={styles.notification}>{notification}</span>
    )}
  </Button>
);

export default NavigationButton;
