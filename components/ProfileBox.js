import React from 'react';

import styles from './ProfileBox.module.css';

import Button from '../components/Button';
import Photo from '../components/Photo';
import ArrowBottom from '../components/icons/ArrowBottom';

const DEFAULT_PROFILE_INFO = {
  name: 'Engin Can Dinç',
  slug: '@janengin',
};

const ProfileBox = ({
  name = DEFAULT_PROFILE_INFO.name,
  slug = DEFAULT_PROFILE_INFO.slug,
}) => (
  <Button className={styles.ProfileBox}>
    <Photo />
    <div className={styles.textContainer}>
      <p>{name}</p>
      <p>{slug}</p>
    </div>
    <ArrowBottom className={styles.arrowIcon} />
  </Button>
);

export default ProfileBox;
