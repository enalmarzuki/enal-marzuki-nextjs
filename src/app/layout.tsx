import type { Metadata } from 'next';
import './globals.css';
import { Inter, Itim, Roboto_Mono } from 'next/font/google';
import cx from 'classnames';
import { inter, itim, robotoMono } from '@/utils/fonts';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'EnalMarzuki.',
  authors: {
    name: 'Enal Marzuki',
  },
  description:
    'Website personal portfolio Enal Marzuki created by Next.js + TypeScript',
  icons: {
    icon: '/ic-em.ico',
    shortcut: '/ic-em.ico',
    apple: '/ic-em.ico',
  },
  openGraph: {
    title: 'EnalMarzuki.',
    description:
      'Website personal portfolio Enal Marzuki created by Next.js + TypeScript',
    url: 'https://enalmarzuki.vercel.app',
    siteName: 'EnalMarzuki',
    images: [
      {
        url: 'https://enalmarzuki.vercel.app/og-image.png',
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
    images: ['https://enalmarzuki.vercel.app/og-image.png'],
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
        <meta
          name='google-site-verification'
          content='xH1pBY9Tdf_Gp2NhxLjRXJB-6jkDkbXLxysHquTjHV8'
        />
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
