export const putView = async (slug: string) =>
  fetch(
    `${
      process.env.NODE_ENV === 'production'
        ? 'https://personal-website-optimized.vercel.app/'
        : 'http://localhost:3000'
    }/api/posts/${slug}`,
    {
      method: 'PUT',
      next: { revalidate: 0 },
    }
  );
