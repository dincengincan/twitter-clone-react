import React from 'react';

import { useRouter, withRouter } from 'next/router';

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
  HomeFill,
  ExplorerFill,
  ProfileFill,
  ListsFill,
  NotificationFill,
  MessagesFill,
  BookmarkFill,
} from './icons';

import styles from './Navigation.module.css';

const navigationItems = [
  {
    key: 'Twitter',
    icon: <Twitter style={{ color: 'white' }} />,
    pathname: '/',
  },
  { name: 'Home', icon: <Home />, selectedIcon: <HomeFill />, pathname: '/' },
  {
    name: 'Explore',
    icon: <Explore />,
    selectedIcon: <ExplorerFill />,
    pathname: '/explore',
  },
  {
    name: 'Profile',
    icon: <Profile />,
    selectedIcon: <ProfileFill />,
    pathname: '/profile',
  },
  {
    name: 'Lists',
    icon: <Lists />,
    selectedIcon: <ListsFill />,
    pathname: '/lists',
  },
  {
    name: 'Notifications',
    icon: <Notification />,
    notification: 5,
    selectedIcon: <NotificationFill />,
    pathname: '/notifications',
  },
  {
    name: 'Messages',
    icon: <Messages />,
    selectedIcon: <MessagesFill />,
    pathname: '/messages',
  },
  {
    name: 'Bookmarks',
    icon: <Bookmark />,
    selectedIcon: <BookmarkFill />,
    pathname: '/bookmarks',
  },
  {
    name: 'More',
    icon: <More />,
    pathname: '/more',
  },
];

const Navigation = ({ flat }) => {
  const history = useRouter();
  return (
    <nav className={styles.nav}>
      {navigationItems.map((item) => {
        const isSelected = history.pathname === item.pathname;
        return (
          <NavigationButton
            key={item.key || item.name}
            notification={item.notification}
            selected={isSelected}
            onClick={() => history.push(item.pathname)}
          >
            {isSelected ? item.selectedIcon || item.icon : item.icon}

            {item.name && !flat && <Typography>{item.name}</Typography>}
          </NavigationButton>
        );
      })}
    </nav>
  );
};

export default Navigation;
