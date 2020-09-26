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

const Navigation = ({ children }) => (
  <nav className={styles.nav}>
    <NavigationButton>
      <Twitter />
    </NavigationButton>

    <NavigationButton>
      <Home />
      <span>Home</span>
    </NavigationButton>

    <NavigationButton>
      <Explore />
      <span>Explore</span>
    </NavigationButton>

    <NavigationButton>
      <Profile />
      <span>Profile</span>
    </NavigationButton>

    <NavigationButton>
      <Lists />
      <span>Lists</span>
    </NavigationButton>

    <NavigationButton>
      <Notification />
      <span>Notification</span>
    </NavigationButton>

    <NavigationButton>
      <Messages />
      <span>Messages</span>
    </NavigationButton>

    <NavigationButton>
      <Bookmark />
      <span>Bookmark</span>
    </NavigationButton>

    <NavigationButton>
      <More />
      <span>More</span>
    </NavigationButton>
  </nav>
);

export default Navigation;
