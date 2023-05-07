'use client';
import { useEffect, useState } from 'react';
import { StyledLink } from 'components/StyledLink';
import { useScrollSpy } from 'hooks/useScrollspy';

function findTag(html: string, tag: string) {
  // Create a regular expression to match the tag
  const regex = new RegExp(`<${tag}>(.*?)</${tag}>`, 'g');
  // Use the match method to find all matches in the string and return them as an array
  return html.match(regex) || [];
}

// Define a function that takes an array of tags and returns their content
function getContent(tags: string[]) {
  // Use the map method to apply a function to each tag
  return tags.map((tag) => {
    // Remove the opening and closing tags from the tag using slice
    return tag.slice(tag.indexOf('>') + 1, tag.lastIndexOf('<'));
  });
}

// Define a function that takes a string and an array of tag names as arguments
function findTags(html: string, tags: string[]) {
  // Use the reduce method to accumulate an array of tags for each tag name
  return tags.reduce((acc, tag) => {
    // Use the spread operator to concatenate the arrays
    return [...acc, ...findTag(html, tag)];
  }, [] as string[]);
}

function findTagsWithIds(html: string, tags: string[]) {
  // Use the findTags function to get an array of tags
  const tagsArray = findTags(html, tags);
  console.log(tagsArray);
  // Use the map method to create an array of objects with id and text properties
  return tagsArray.map((tag) => {
    // Use a regular expression to extract the id attribute from the tag
    const idMatch = tag.match(/id="([^"]+)"/);
    // Use a regular expression to extract the text content from the tag
    const textMatch = tag.match(/>([^<]+)</);
    // Return an object with id and text properties
    return {
      id: idMatch ? idMatch[1] : null, // If there is no id attribute, return null
      text: textMatch ? textMatch[1] : '', // If there is no text content, return an empty string
    };
  });
}

interface Heading {
  id: string;
  text: string;
  level: number;
}

function getHeadingsFromMdx(mdx: string): Heading[] {
  const headings: Heading[] = [];

  for (let i = 1; i <= 3; i++) {
    const pattern = `^#{${'#'.repeat(i)}}\\s+(.+?)\\s*(?:{#(\\S+)})?\\s*$`;
    const regex = new RegExp(pattern, 'gm');

    let match;

    while ((match = regex.exec(mdx)) !== null) {
      const text = match[1];
      const id = match[2] || text.toLowerCase().replace(/\s/g, '-');
      headings.push({ id, text, level: i });
    }
  }

  return headings;
}

export function TableOfContents({ content }: { content: string }) {
  const [toc, setToc] = useState([{ id: '', level: 0, text: '' }]);

  const activeSection = useScrollSpy();
  const minLevel =
    toc?.reduce((min, item) => (item.level < min ? item.level : min), 10) ?? 0;

  useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll('.mdx h1, .mdx h2, .mdx h3')
    );

    const headingArr = headings.map((heading) => {
      const id = heading.id;
      const level = +heading.tagName.replace('H', '');
      const text = heading.textContent + '';

      return { id, level, text };
    });

    setToc(headingArr);
  }, []);

  return (
    <div className="w-full max-w-[300px] pb-4">
      <h3 className="mb-8 text-2xl font-bold text-white">Table of Contents</h3>
      <ul className="flex flex-col gap-3 text-sm text-grey-300">
        {toc?.map(({ id, level, text }) => (
          <li key={id}>
            <StyledLink
              href={`#${id}`}
              style={{ marginLeft: (level - minLevel) * 16 }}
              isActive={activeSection === id}
            >
              {text}
            </StyledLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
