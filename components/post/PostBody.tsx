export function PostBody({ content }: { content: string }) {
  return (
    <section className="mdx fade-in prose prose-invert col-start-1 row-start-2 mx-auto w-full pb-16">
      <article>{content}</article>
    </section>
  );
}
