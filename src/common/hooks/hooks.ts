import { useEffect, useState } from 'react';

import { getWindowDimensions } from 'common/utils/utils';

export const useWindowDimensions = (): { width: number; height: number } => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    const handleResize = (): void => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener('resize', () => handleResize());

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};
