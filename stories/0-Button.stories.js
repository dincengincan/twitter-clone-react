import React from 'react';

import Button from '../components/Button';
import NavigationButton from '../components/NavigationButton';
import Navigation from '../components/Navigation';

export default {
  title: 'Buttons',
  component: Button,
};

export const BaseButton = () => <Button>Deneme</Button>;

export const NavButton = () => <NavigationButton>NavButton</NavigationButton>;

export const Nav = () => <Navigation>Deneme</Navigation>;
