import type { Metadata } from 'next';
import './globals.css';
import { Inter, Itim, Roboto_Mono } from 'next/font/google';
import cx from 'classnames';
import { inter, itim, robotoMono } from '@/utils/fonts';
import Head from 'next/head';

export const metadata: Metadata = {
  metadataBase: new URL('https://enalmarzuki.com'),
  title: 'Enal Marzuki – Frontend Developer',
  description:
    'Personal portfolio of Enal Marzuki, a passionate frontend developer based in Indonesia. Built with Next.js and Tailwind CSS.',
  authors: [{ name: 'Enal Marzuki' }],
  verification: {
    google: 'xtUmJRx8Eqp6mC5TA6E_GbqTP6xy7fSmTqyefgvks_g',
  },
  robots: 'index, follow',
  keywords: [
    'enal marzuki',
    'frontend developer',
    'portfolio',
    'react developer',
  ],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/ic-em.ico',
    shortcut: '/ic-em.ico',
    apple: '/ic-em.ico',
  },
  openGraph: {
    title: 'Enal Marzuki – Frontend Developer',
    description:
      'Personal portfolio of Enal Marzuki, built with Next.js and Tailwind CSS.',
    url: 'https://enalmarzuki.com',
    siteName: 'Enal Marzuki',
    images: [
      {
        url: 'https://enalmarzuki.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Enal Marzuki Portfolio',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EnalMarzuki.',
    description:
      'Website personal portfolio Enal Marzuki created by Next.js + TypeScript',
    images: ['https://enalmarzuki.com/og-image.png'],
  },
};

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
