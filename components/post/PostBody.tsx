import { Suspense } from 'react';

export function PostBody({ content }: { content: string }) {
  return (
    <section className="mdx prose prose-invert col-start-1 row-start-2 mx-auto w-full pb-16">
      <article>
        <Suspense fallback={<>Loading...</>}>
          <div className="mdx prose prose-invert col-start-1 row-start-2 mx-auto w-full pb-16">
            {content}
          </div>
        </Suspense>
      </article>
    </section>
  );
}
