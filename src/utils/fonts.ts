import { Inter, Itim, Roboto_Mono } from 'next/font/google';

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
});

const robotoMono = Roboto_Mono({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-roboto-mono',
});

const itim = Itim({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-itim',
  weight: '400',
});

export { inter, robotoMono, itim };
