import React from 'react';

import styles from './Sidebar.module.css';
import Navigation from './Navigation.js';
import ThemeButton from './ThemeButton.js';
import ProfileBox from './ProfileBox.js';

import useWindowSize, { WINDOW_SIZES } from '../hooks/useWindowSize';

const Sidebar = () => {
  const isLarge = useWindowSize(WINDOW_SIZES.LARGE);

  return (
    <div className={styles.sidebar}>
      <Navigation flat={!isLarge} />
      <ThemeButton large fullWidth={isLarge}>
        Tweet
      </ThemeButton>
      <ProfileBox flat={!isLarge} />
    </div>
  );
};

export default Sidebar;
