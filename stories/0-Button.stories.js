import React from 'react';

import Button from '../components/Button';
import NavigationButton from '../components/NavigationButton';
import Navigation from '../components/Navigation';
import { Home } from '../components/icons';

import Typography from '../components/Typography';
import ThemeButton from '../components/ThemeButton';

export default {
  title: 'Buttons',
  component: Button,
};

export const BaseButton = () => <Button>Deneme</Button>;

export const ThemeButton = () => <ThemeButton>Deneme</ThemeButton>;

export const NavButton = () => (
  <NavigationButton>
    <Home />
    <Typography>Home</Typography>
  </NavigationButton>
);

export const Nav = () => <Navigation selectedItem="home" />;
