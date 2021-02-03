import React from 'react';

import Button from './Button';

import styles from './NavigationButton.module.css';

const NavigationButton = ({ selected, children }) => (
  <Button
    className={
      selected ? `${styles.navButton} ${styles.selected} ` : styles.navButton
    }
  >
    {children}
  </Button>
);

export default NavigationButton;
