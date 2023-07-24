import { Heading } from 'components/shortcuts/TableOfContents';

export function getHeadingsFromMdx(mdx: string): Heading[] {
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
