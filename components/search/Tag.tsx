import clsx from 'clsx';

export const Tag = ({
  name,
  onClick,
  checkTagged,
}: {
  name: string;
  onClick: () => void;
  checkTagged: (tag: string) => boolean;
}) => {
  return (
    <li className="rounded-full border-2 border-grey-800 bg-grey-900 text-center hover:bg-grey-800">
      <button
        className={clsx(
          'focus-state rounded-full py-3 px-6 ring-offset-primary-main focus:bg-grey-800',
          {
            'text-primary-main ring-0 ring-offset-2 ': checkTagged(name),
            'text-white !ring-0 !ring-offset-0': !checkTagged(name),
          }
        )}
        type="button"
        onClick={onClick}
      >
        {name}
      </button>
    </li>
  );
};
