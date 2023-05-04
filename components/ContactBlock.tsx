import { IconType } from 'react-icons/lib';
import { Button } from './Button';

export const ContactButton = ({
  Icon,
  text,
  link,
  showedLink,
}: {
  Icon: IconType;
  text: string;
  link: string;
  showedLink: string;
}) => {
  return (
    <li>
      <Button
        href={link}
        target="_blank"
        size="circle"
        variant="filled"
        rounded="xl"
        className="relative flex flex-col items-start gap-4 py-4 px-4 text-start sm:flex-row sm:gap-6 sm:text-left md:gap-4 md:px-4 lg:gap-6"
      >
        <div className="absolute top-2 right-2 rounded-full border-4 border-grey-800 bg-primary-main p-2.5">
          <Icon className="h-6 w-6 flex-shrink-0 text-black sm:h-7 sm:w-7" />
        </div>
        <div className="mt-6">
          <h2 className="mb-1 text-2xl font-bold text-white">{text}</h2>
          <p className="break-all text-lg text-grey-300">{showedLink}</p>
        </div>
      </Button>
    </li>
  );
};
