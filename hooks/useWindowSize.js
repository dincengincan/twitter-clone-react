import { useState, useEffect } from 'react';

export const WINDOW_SIZES = {
  SMALL: 'SMALL',
  MEDIUM: 'MEDIUM',
  LARGE: 'LARGE',
};

const BREAKPOINTS = {
  SMALL: '800',
  MEDIUM: '1100',
};

const useWindowSize = (size) => {
  const getSize = () => {
    if (typeof window === 'undefined') {
      return;
    }
    const windowSize = {
      height: window.innerHeight,
      width: window.innerWidth,
    };
    return windowSize;
  };

  const [windowSize, setWindowSize] = useState(getSize());

  const handleResize = () => setWindowSize(getSize());

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  });

  const getDefinedHeight = () => {
    if (size && windowSize) {
      if (windowSize.width < BREAKPOINTS.SMALL)
        return WINDOW_SIZES.SMALL === size;
      if (
        windowSize.width > BREAKPOINTS.SMALL &&
        windowSize.width < BREAKPOINTS.MEDIUM
      )
        return WINDOW_SIZES.MEDIUM === size;
      return WINDOW_SIZES.LARGE === size;
    }
  };

  return getDefinedHeight();
};

export default useWindowSize;
