import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Background } from 'components/Background';
type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Background />
      <div className="flex min-h-full w-full max-w-screen-2xl flex-col lg:flex-row">
        <Navbar />
        {children}
      </div>
      <div className="flex w-full border-t-2 border-grey-900">
        <div className="mx-auto max-w-screen-lg">
          <Footer />
        </div>
      </div>
    </div>
  );
};
