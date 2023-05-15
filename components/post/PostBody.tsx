export function PostBody({ content }: { content: string }) {
  return (
    <section className="fade-in col-start-1 row-start-2 pb-16">
      <article className="mdx prose prose-invert mx-auto w-full">
        {content}
      </article>
    </section>
  );
}
