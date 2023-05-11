import { MdComment } from 'react-icons/md';
import { ShareButton } from './ShareButton';
import { Button, ButtonProps } from 'components/Button';
import { Tooltip } from 'components/Tooltip';
import { ContentType } from 'types/frontmatters';

export const SocialButtons = ({
  variant = 'filled',
  slug,
  type,
}: Pick<ButtonProps, 'variant'> & {
  slug: string;
  type: ContentType;
}) => {
  return (
    <>
      <Tooltip content="Comments" tabIndex={-1} size="sm">
        <Button
          variant={variant}
          StartIcon={MdComment}
          size="circle"
          ariaLabel="Comments"
          href={`/${type}/${slug}#comments-github`}
          color="text-white"
          className="hover:bg-grey-800 hover:text-primary-main focus:bg-grey-800 focus:text-primary-main"
        />
      </Tooltip>
      <ShareButton variant={variant} />
    </>
  );
};
