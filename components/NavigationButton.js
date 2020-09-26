import React from 'react';

import Button from './Button';

import styles from './NavigationButton.module.css';

const NavigationButton = ({ children }) => (
  <div>
    <Button className={styles.button}>{children}</Button>
  </div>
);

export default NavigationButton;
