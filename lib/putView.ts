export const putView = async (slug: string) => {
  try {
    fetch(
      `${
        process.env.NODE_ENV === 'production'
          ? 'https://personal-website-optimized.vercel.app/'
          : 'http://localhost:3000'
      }/api/posts/${slug}`,
      {
        method: 'PUT',
      }
    );
  } catch (e) {
    console.log(e);
  }
};
