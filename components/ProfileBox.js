import React from 'react';

import styles from './ProfileBox.module.css';

import Button from '../components/Button';
import Photo from '../components/Photo';
import Typography from '../components/Typography';
import ArrowBottom from '../components/icons/ArrowBottom';

const DEFAULT_PROFILE_INFO = {
  name: 'Engin Can',
  slug: '@janengin',
};

const ProfileBox = ({
  name = DEFAULT_PROFILE_INFO.name,
  slug = DEFAULT_PROFILE_INFO.slug,
}) => (
  <Button className={styles.ProfileBox}>
    <Photo />
    <div className={styles.textContainer}>
      <Typography>{name}</Typography>
      <Typography className={styles.slug} bold={false}>
        {slug}
      </Typography>
    </div>
    <ArrowBottom className={styles.arrowIcon} />
  </Button>
);

export default ProfileBox;
