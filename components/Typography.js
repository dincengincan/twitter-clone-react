import React from 'react';

import styles from './Typography.module.css';

const Typography = ({ children, bold = true, className }) => (
  <h2
    className={
      styles.type +
      (bold ? ` ${styles.bold}` : '') +
      (className ? ` ${className}` : '')
    }
  >
    {children}
  </h2>
);

export default Typography;
