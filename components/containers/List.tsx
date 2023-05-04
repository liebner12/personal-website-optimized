import { Missing } from 'components/Missing';

type ListType = {
  children: JSX.Element[] | JSX.Element;
  isEmpty: boolean;
  color: string;
};

export const List = ({ children, isEmpty, color }: ListType) => {
  return (
    <>
      <ul className="mb-auto grid gap-20 sm:grid-cols-2 sm:gap-8 lg:col-span-12 lg:grid-cols-2 xl:col-span-8">
        {children}
        {isEmpty && (
          <div className="col-span-3 m-auto pt-20 text-center">
            <Missing color={color} />
          </div>
        )}
      </ul>
    </>
  );
};
