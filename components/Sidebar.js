import React from 'react';

import styles from './Sidebar.module.css';
import Navigation from './Navigation.js';
import ThemeButton from './ThemeButton.js';
import ProfileBox from './ProfileBox.js';

const Sidebar = ({ children }) => (
  <div className={styles.sidebar}>
    <Navigation />
    <ThemeButton large fullWidth>
      Tweet
    </ThemeButton>
    <ProfileBox />
  </div>
);

export default Sidebar;
