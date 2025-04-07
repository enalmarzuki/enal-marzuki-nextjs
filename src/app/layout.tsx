import type { Metadata } from 'next';
import './globals.css';
import { Inter, Itim, Roboto_Mono } from 'next/font/google';
import cx from 'classnames';

export const metadata: Metadata = {
  title: 'EnalMarzuki.',
  description:
    'I am a Frontend Developer, i have 3 years experience in this field. As a Frontend Developer i like to learn something new for supporting my work. I have used to React as daily programming language for building an application. And until now i have been involved in several projects like Project Management Platform, Automotive and etc.',
  icons: {
    icon: '/ic-em.ico',
    shortcut: '/ic-em.ico', // Shortcut icon for quick access
    apple: '/ic-em.ico', // Apple devices icon
  },
};

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={cx(
        'scroll-smooth transition-all duration-300',
        inter.variable,
        robotoMono.variable,
        itim.variable,
      )}
      lang='en'
    >
      <body>{children}</body>
    </html>
  );
}
