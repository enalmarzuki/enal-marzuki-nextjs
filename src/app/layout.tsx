import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className='scroll-smooth transition-all duration-300' lang='en'>
      <body>{children}</body>
    </html>
  );
}
