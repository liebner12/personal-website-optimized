import 'styles/globals.scss';
import 'styles/prose.css';
import 'styles/prism.css';
import { ReactNode } from 'react';
import { Layout } from 'components/containers/Layout';

export const metadata = {
  title: 'Home',
  description:
    'On this website I showcase my projects and write blog posts connected with Javascript ecosystem',
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
