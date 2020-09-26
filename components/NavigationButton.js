import React from 'react';

import Button from './Button';

import styles from './NavigationButton.module.css';

const NavigationButton = ({ children }) => (
  <Button className={styles.navButton}>{children}</Button>
);

export default NavigationButton;
