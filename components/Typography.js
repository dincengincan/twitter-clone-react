import React from 'react';

import styles from './Typography.module.css';

const Typography = ({ children, bold = true }) => (
  <h2 className={bold ? `${styles.type} ${styles.bold}` : styles.type}>
    {children}
  </h2>
);

export default Typography;
