import React from 'react';

import Typography from '../components/Typography';

export default {
  title: 'Typography',
};

export const Title = () => <Typography bold={false}>Title</Typography>;

export const BoldTitle = () => <Typography>Bold Title</Typography>;
