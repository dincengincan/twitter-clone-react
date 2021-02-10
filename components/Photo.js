import React from 'react';

import styles from './Photo.module.css';

const DEFAULT_PHOTO =
  'https://yt3.ggpht.com/yti/ANoDKi5koeV3fqyPCTFlh8jpB0-07NOgcsBMZ2LBNFUSQg=s88';

const DEFAULT_PHOTO_ALT = 'Profile Photo';

const Photo = ({ src = DEFAULT_PHOTO, alt = DEFAULT_PHOTO_ALT }) => (
  <div className={styles.photo}>
    <img src={src} alt={alt} />
  </div>
);

export default Photo;
