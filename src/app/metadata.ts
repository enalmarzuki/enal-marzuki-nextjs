import { Metadata } from 'next';

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
    icon: [
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: [
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/apple-icon-57x57.png', sizes: '57x57', type: 'image/png' },
      { url: '/icons/apple-icon-60x60.png', sizes: '60x60', type: 'image/png' },
      { url: '/icons/apple-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/icons/apple-icon-76x76.png', sizes: '76x76', type: 'image/png' },
      {
        url: '/icons/apple-icon-114x114.png',
        sizes: '114x114',
        type: 'image/png',
      },
      {
        url: '/icons/apple-icon-120x120.png',
        sizes: '120x120',
        type: 'image/png',
      },
      {
        url: '/icons/apple-icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
      },
      {
        url: '/icons/apple-icon-152x152.png',
        sizes: '152x152',
        type: 'image/png',
      },
      {
        url: '/icons/apple-icon-180x180.png',
        sizes: '180x180',
        type: 'image/png',
      },
      { url: '/icons/apple-icon-precomposed.png', type: 'image/png' },
      { url: '/icons/apple-icon.png', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-icon',
        url: '/icons/android-icon-36x36.png',
        sizes: '36x36',
        type: 'image/png',
      },
      {
        rel: 'android-icon',
        url: '/icons/android-icon-48x48.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        rel: 'android-icon',
        url: '/icons/android-icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
      },
      {
        rel: 'android-icon',
        url: '/icons/android-icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        rel: 'android-icon',
        url: '/icons/android-icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
      },
      {
        rel: 'android-icon',
        url: '/icons/android-icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'ms-icon',
        url: '/icons/ms-icon-70x70.png',
        sizes: '70x70',
        type: 'image/png',
      },
      {
        rel: 'ms-icon',
        url: '/icons/ms-icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
      },
      {
        rel: 'ms-icon',
        url: '/icons/ms-icon-150x150.png',
        sizes: '150x150',
        type: 'image/png',
      },
      {
        rel: 'ms-icon',
        url: '/icons/ms-icon-310x310.png',
        sizes: '310x310',
        type: 'image/png',
      },
    ],
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
