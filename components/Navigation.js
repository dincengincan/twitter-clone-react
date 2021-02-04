import React from 'react';

import NavigationButton from './NavigationButton';
import Typography from './Typography';

import {
  Twitter,
  Home,
  Explore,
  Profile,
  Lists,
  Notification,
  Messages,
  Bookmark,
  More,
} from './icons';

import styles from './Navigation.module.css';

const Navigation = ({ selectedItem }) => (
  <nav className={styles.nav}>
    <NavigationButton>
      <Twitter />
    </NavigationButton>

    <NavigationButton selected={selectedItem === 'home'}>
      <Home />
      <Typography className={styles.navLabel}>Home</Typography>
    </NavigationButton>

    <NavigationButton selected={selectedItem === 'explore'}>
      <Explore />
      <Typography className={styles.navLabel}>Explore</Typography>
    </NavigationButton>

    <NavigationButton selected={selectedItem === 'profile'}>
      <Profile />
      <Typography className={styles.navLabel}>Profile</Typography>
    </NavigationButton>

    <NavigationButton selected={selectedItem === 'lists'}>
      <Lists />
      <Typography className={styles.navLabel}>Lists</Typography>
    </NavigationButton>

    <NavigationButton
      notification={5}
      selected={selectedItem === 'notification'}
    >
      <Notification />
      <Typography className={styles.navLabel}>Notification</Typography>
    </NavigationButton>

    <NavigationButton selected={selectedItem === 'messages'}>
      <Messages />
      <Typography className={styles.navLabel}>Messages</Typography>
    </NavigationButton>

    <NavigationButton selected={selectedItem === 'bookmark'}>
      <Bookmark />
      <Typography className={styles.navLabel}>Bookmark</Typography>
    </NavigationButton>

    <NavigationButton selected={selectedItem === 'more'}>
      <More />
      <Typography className={styles.navLabel}>More</Typography>
    </NavigationButton>
  </nav>
);

export default Navigation;
