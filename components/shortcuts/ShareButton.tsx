'use client';

import { MdShare } from 'react-icons/md';
import { BiLink } from 'react-icons/bi';
import { useState } from 'react';
import { Button, ButtonProps } from 'components/Button';
import { Tooltip } from 'components/Tooltip';
import { Dialog } from 'components/Dialog';

export const ShareButton = ({ variant }: Pick<ButtonProps, 'variant'>) => {
  const [isToggleActive, setIsToggleActive] = useState(false);

  return (
    <>
      <Tooltip content="Share" tabIndex={-1} size="sm">
        <Button
          variant={variant}
          StartIcon={MdShare}
          size="circle"
          as="button"
          ariaLabel="Copy to clipboard"
          onClick={() => {
            setIsToggleActive(true);
            navigator.clipboard.writeText(window.location.href);
          }}
          color="text-white"
          className="hover:bg-grey-800 hover:text-primary-main focus:bg-grey-800 focus:text-primary-main"
        />
      </Tooltip>
      <Dialog isVisible={isToggleActive} setIsVisible={setIsToggleActive}>
        Copied to clipboard <BiLink className="h-6 w-6" />
      </Dialog>
    </>
  );
};
