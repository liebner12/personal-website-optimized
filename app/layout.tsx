import 'styles/globals.scss';
import 'styles/prose.css';
import 'styles/prism.css';
import { ReactNode } from 'react';
import { Layout } from 'components/containers/Layout';

const description =
  'On this website I showcase my projects and write blog posts connected with Javascript ecosystem';

const title = 'Home | Michał Liebner';

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: 'https://michal-liebner.vercel.app/',
    siteName: 'michal-liebner.vercel.app',
    images: [
      {
        url: 'https://michal-liebner.vercel.app/api/og',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      {
        sizes: '72x72',
        url: '/favicon/android-icon-light-72x72.png',
        type: 'image/png',
        media: '(prefers-color-scheme: light)',
      },
      {
        type: 'image/png',
        sizes: '96x96',
        url: '/favicon/android-icon-dark-72x72.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        type: 'image/png',
        sizes: '96x96',
        url: '/favicon/android-icon-light-96x96.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        type: 'image/png',
        sizes: '96x96',
        url: '/favicon/android-icon-dark-96x96.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon/favicon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        type: 'image/png',
        sizes: '96x96',
        url: '/favicon/favicon-light-96x96.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon/favicon-light-16x16.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        type: 'image/png',
        sizes: '192x192',
        url: '/favicon/android-icon-dark-192x192.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon/favicon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        type: 'image/png',
        sizes: '96x96',
        url: '/favicon/favicon-dark-96x96.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon/favicon-dark-16x16.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: [
      {
        url: '/favicon/apple-icon-light-76x76.png',
        sizes: '76x76',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon/apple-icon-dark-76x76.png',
        sizes: '76x76',
        media: '(prefers-color-scheme: dark)',
      },
      {
        sizes: '76x76',
        url: '/favicon/apple-icon-dark-76x76.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
