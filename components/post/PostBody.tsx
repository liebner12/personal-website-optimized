export function PostBody({ content }: { content: string }) {
  return (
    <section className="fade-in col-start-1 row-start-2 mx-auto w-full pb-16">
      <article className="mdx prose prose-invert w-full">{content}</article>
    </section>
  );
}
