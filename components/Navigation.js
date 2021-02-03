import React from 'react';

import NavigationButton from './NavigationButton';
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

const Navigation = ({ childreni, selectedItem }) => (
  <nav className={styles.nav}>
    <NavigationButton>
      <Twitter />
    </NavigationButton>

    <NavigationButton selected={selectedItem === 'home'}>
      <Home />
      <span className={styles.navLabel}>Home</span>
    </NavigationButton>

    <NavigationButton selected={selectedItem === 'explore'}>
      <Explore />
      <span className={styles.navLabel}>Explore</span>
    </NavigationButton>

    <NavigationButton selected={selectedItem === 'profile'}>
      <Profile />
      <span className={styles.navLabel}>Profile</span>
    </NavigationButton>

    <NavigationButton selected={selectedItem === 'lists'}>
      <Lists />
      <span className={styles.navLabel}>Lists</span>
    </NavigationButton>

    <NavigationButton selected={selectedItem === 'notification'}>
      <Notification />
      <span className={styles.navLabel}>Notification</span>
    </NavigationButton>

    <NavigationButton selected={selectedItem === 'messages'}>
      <Messages />
      <span className={styles.navLabel}>Messages</span>
    </NavigationButton>

    <NavigationButton selected={selectedItem === 'bookmark'}>
      <Bookmark />
      <span className={styles.navLabel}>Bookmark</span>
    </NavigationButton>

    <NavigationButton selected={selectedItem === 'more'}>
      <More />
      <span className={styles.navLabel}>More</span>
    </NavigationButton>
  </nav>
);

export default Navigation;
