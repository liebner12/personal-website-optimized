import { TOCList } from 'components/shortcuts/TOCList';

export interface Heading {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents({ toc }: { toc: Heading[] }) {
  return (
    <div className="w-full max-w-[300px] pb-4">
      <h3 className="mb-8 text-2xl font-bold text-white">Table of Contents</h3>
      <TOCList toc={toc} />
    </div>
  );
}
