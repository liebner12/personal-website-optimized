const getAccessToken = async () => {
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN || '';

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
      ).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }),
    next: { revalidate: 60 },
  });

  return response.json();
};

export const currentlyPlayingSong = async () => {
  const { access_token } = await getAccessToken();

  const response = await fetch(
    'https://api.spotify.com/v1/me/player/currently-playing',
    {
      next: { revalidate: 60 },
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  if (response.status === 204 || response.status > 400) {
    return {};
  }

  return response.json();
};
