'use client';
import { DetailedHTMLProps, HTMLAttributes, useRef, useState } from 'react';
import { HiCheckCircle, HiClipboard } from 'react-icons/hi';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export function CustomCode(
  props: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
) {
  const { children, className } = props;
  const textRef = useRef<HTMLDivElement>(null);
  const [isCopied, setIsCopied] = useState(false);

  const language =
    className?.includes('language') &&
    className.replace('language-', '').replace(' code-highlight', '');

  return (
    <code {...props} data-code-type={language && 'code-block'}>
      {language ? (
        <div ref={textRef} className="overflow-x-auto">
          {children}
        </div>
      ) : (
        <span>{children}</span>
      )}
      {language && (
        <CopyToClipboard
          text={textRef?.current?.textContent ?? ''}
          onCopy={() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 1500);
          }}
        >
          <button className="absolute right-2 top-2 z-10 hidden rounded border border-grey-700 bg-grey-900 p-2 text-lg text-grey-300 transition-colors hover:bg-grey-900 md:block">
            {isCopied ? (
              <HiCheckCircle className="text-primary-main" />
            ) : (
              <HiClipboard />
            )}
          </button>
        </CopyToClipboard>
      )}
      {language && (
        <span className="absolute bottom-4 right-4 text-primary-main">
          {language}
        </span>
      )}
    </code>
  );
}
