import React from 'react';

import { useRouter } from 'next/router';

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
  { key: 'Twitter', component: <Twitter />, pathname: '/' },
  { name: 'Home', component: <Home />, pathname: '/' },
  { name: 'Explore', component: <Explore />, pathname: '/explore' },
  { name: 'Profile', component: <Profile />, pathname: '/profile' },
  { name: 'Lists', component: <Lists />, pathname: '/lists' },
  {
    name: 'Notification',
    component: <Notification />,
    notification: 5,
    pathname: '/notification',
  },
  { name: 'Messages', component: <Messages />, pathname: '/messages' },
  { name: 'Bookmark', component: <Bookmark />, pathname: '/bookmark' },
  { name: 'More', component: <More />, pathname: '/more' },
];

const Navigation = ({ flat }) => {
  const history = useRouter();
  return (
    <nav className={styles.nav}>
      {navigationItems.map((item) => {
        return (
          <NavigationButton
            key={item.key || item.name}
            notification={item.notification}
            selected={history.pathname === item.pathname}
            onClick={() => history.push(item.pathname)}
          >
            {item.component}
            {item.name && !flat && <Typography>{item.name}</Typography>}
          </NavigationButton>
        );
      })}
    </nav>
  );
};

export default Navigation;
