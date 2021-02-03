import React from 'react';

import Button from '../components/Button';
import NavigationButton from '../components/NavigationButton';
import Navigation from '../components/Navigation';
import { Home } from '../components/icons';

import styles from '../components/Navigation.module.css';

export default {
  title: 'Buttons',
  component: Button,
};

export const BaseButton = () => <Button>Deneme</Button>;

export const NavButton = () => (
  <NavigationButton>
    <Home />
    <span className={styles.navLabel}>Home</span>
  </NavigationButton>
);

export const Nav = () => <Navigation selectedItem="home" />;
