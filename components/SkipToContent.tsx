export const SkipToContent = ({
  children,
  id,
}: {
  children: JSX.Element[] | JSX.Element;
  id: string;
}) => {
  return (
    <>
      <a
        href={`#${id}`}
        className="focus-state fixed left-1/2 top-4 -z-10 h-0 w-0 -translate-x-1/2 rounded-full bg-primary-main font-bold text-grey-900 opacity-0 focus-within:z-40 focus:block focus:h-auto focus:w-auto focus:-translate-x-1/2 focus:overflow-auto focus:px-6 focus:py-2 focus:opacity-100"
      >
        {id}
      </a>
      {children}
      <div id={id} className="hidden" />
    </>
  );
};
