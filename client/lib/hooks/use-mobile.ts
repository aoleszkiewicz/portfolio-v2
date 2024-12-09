import { screenSizes } from '@/lib/constants/screen-sizes';
import { useWindow } from './use-window';

const useMobile = () => {
  const windowWidth = useWindow();

  return windowWidth >= screenSizes.sm;
};

export { useMobile };
