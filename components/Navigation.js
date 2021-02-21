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

const navigationItems = [
  { key: 'Twitter', component: <Twitter /> },
  { name: 'Home', component: <Home /> },
  { name: 'Explore', component: <Explore /> },
  { name: 'Profile', component: <Profile /> },
  { name: 'Lists', component: <Lists /> },
  { name: 'Notification', component: <Notification />, notification: 5 },
  { name: 'Messages', component: <Messages /> },
  { name: 'Bookmark', component: <Bookmark /> },
  { name: 'More', component: <More /> },
];

const Navigation = ({ selectedItem = 'Home', flat }) => (
  <nav className={styles.nav}>
    {navigationItems.map((item) => {
      return (
        <NavigationButton
          key={item.key || item.name}
          notification={item.notification}
          selected={selectedItem === item.name}
        >
          {item.component}
          {item.name && !flat && <Typography>{item.name}</Typography>}
        </NavigationButton>
      );
    })}
  </nav>
);

export default Navigation;
