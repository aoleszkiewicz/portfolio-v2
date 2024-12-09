import localFont from 'next/font/local';
import { Rubik } from 'next/font/google';

const rubik = Rubik({
  weight: ['300', '400', '700'],
  style: ['normal'],
});

const ftSterling = localFont({
  src: '../../public/fonts/FTSterlingTrialVF.woff',
  variable: '--font-ft-sterling',
  weight: '300 400 600 700',
});

export { rubik, ftSterling };
