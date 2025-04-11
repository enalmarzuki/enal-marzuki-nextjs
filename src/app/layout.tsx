import type { Metadata } from 'next';
import './globals.css';
import { Inter, Itim, Roboto_Mono } from 'next/font/google';
import cx from 'classnames';
import { inter, itim, robotoMono } from '@/utils/fonts';
import Head from 'next/head';
import { metadata } from './metadata';

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={cx(
        'scroll-smooth font-inter transition-all duration-300',
        inter.variable,
        robotoMono.variable,
        itim.variable,
      )}
      lang='en'
    >
      <Head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Enal Marzuki',
              url: 'https://enalmarzuki.vercel.app',
              sameAs: [
                'https://github.com/enalmarzuki',
                'https://www.linkedin.com/in/marzuki-r/',
              ],
              jobTitle: 'Frontend Developer',
            }),
          }}
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
