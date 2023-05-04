import clsx from 'clsx';
import dynamic from 'next/dynamic';
import { Navbar } from './Navbar';
import { Background } from 'components/Background';

type Props = {
  children: JSX.Element[] | JSX.Element;
  theme: string;
};

const DynamicFooter = dynamic(() =>
  import('./Footer').then((mod) => mod.Footer)
);

export const Layout = ({ children, theme }: Props) => {
  return (
    <div className={clsx('flex min-h-screen flex-col items-center', theme)}>
      <Background />
      <div className="flex min-h-full w-full max-w-screen-2xl flex-col lg:flex-row">
        <Navbar />
        {children}
      </div>
      <div className="flex w-full border-t-2 border-grey-900">
        <div className="mx-auto max-w-screen-lg">
          <DynamicFooter />
        </div>
      </div>
    </div>
  );
};
