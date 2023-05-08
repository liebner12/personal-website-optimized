import { TOCList } from 'components/shortcuts/TOCList';

export interface Heading {
  id: string;
  text: string;
  level: number;
}

function getHeadingsFromMdx(mdx: string): Heading[] {
  const headings: Heading[] = [];

  const regex = /(#{1,3})\s(.*)$/gm;

  let match;
  while ((match = regex.exec(mdx)) !== null) {
    const level = match[1].length;
    const text = match[2];
    const id = text.toLowerCase().replace(/\s/g, '-');
    headings.push({ id, text, level });
  }

  return headings;
}

export function TableOfContents({ content }: { content: string }) {
  const toc = getHeadingsFromMdx(content);

  return (
    <div className="w-full max-w-[300px] pb-4">
      <h3 className="mb-8 text-2xl font-bold text-white">Table of Contents</h3>
      <TOCList toc={toc} />
    </div>
  );
}
