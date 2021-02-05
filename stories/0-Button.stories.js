import React from 'react';

import { Home } from '../components/icons';
import Button from '../components/Button';
import NavigationButton from '../components/NavigationButton';
import Navigation from '../components/Navigation';
import Typography from '../components/Typography';
import ThemeButton from '../components/ThemeButton';
import Stack from '../components/Stack';

export default {
  title: 'Buttons',
  component: Button,
};

export const Base = () => <Button>Button</Button>;

export const Theme = () => <ThemeButton>Button</ThemeButton>;

export const LargeTheme = () => <ThemeButton large>Large Button</ThemeButton>;

export const ThemeFullWidth = () => <ThemeButton fullWidth>Button</ThemeButton>;

export const ButtonStack = () => (
  <Stack>
    <ThemeButton>Button</ThemeButton>
    <ThemeButton large>Large Button</ThemeButton>
    <ThemeButton fullWidth>Button</ThemeButton>
  </Stack>
);

export const ButtonLargeStack = () => (
  <Stack gap={30}>
    <ThemeButton>Button</ThemeButton>
    <ThemeButton large>Large Button</ThemeButton>
    <ThemeButton fullWidth>Button</ThemeButton>
  </Stack>
);

export const NavButton = () => (
  <NavigationButton>
    <Home />
    <Typography>Home</Typography>
  </NavigationButton>
);

export const Nav = () => <Navigation selectedItem="home" />;
