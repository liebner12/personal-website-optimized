export function PostBody({ content }: { content: string }) {
  return (
    <section className="fade-in col-start-1 row-start-2">
      <article className="mdx prose prose-invert mx-auto w-full pb-16">
        {content}
      </article>
    </section>
  );
}
