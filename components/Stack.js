import React from 'react';

import styles from './Stack.module.css';

const Stack = ({ gap, children }) => (
  <div className={styles.stack} style={gap && { '--gap': `${gap}px` }}>
    {children}
  </div>
);

export default Stack;
