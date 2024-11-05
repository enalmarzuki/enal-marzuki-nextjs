import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Enal Marzuki',
  description:
    'I am a Frontend Developer, i have 3 years experience in this field. As a Frontend Developer i like to learn something new for supporting my work. I have used to React as daily programing language for building an aplication. And until now i have been involved in several projects like Project Management Platform, Otomotif and etc.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='antialiased'>{children}</body>
    </html>
  );
}
