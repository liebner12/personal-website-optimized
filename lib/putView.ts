export const putView = (slug: string) => {
  try {
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
  } catch (e) {
    console.log(e);
  }
};
