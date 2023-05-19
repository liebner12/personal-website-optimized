import { ImageResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'Michał Liebner';
  const description = searchParams.get('desc');

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundImage: 'linear-gradient(to bottom, #091a21, #1c1a1a)',
          letterSpacing: -2,
          fontWeight: 700,
        }}
      >
        {title && (
          <div
            style={{
              display: 'flex',
              padding: '5px 40px',
              width: 'auto',
              textAlign: 'center',
              backgroundImage:
                'linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216))',
              backgroundClip: 'text',
              color: 'transparent',
              fontSize: 60,
            }}
          >
            {title}
          </div>
        )}
        {description && (
          <div
            style={{
              padding: '5px 40px',
              width: 'auto',
              textAlign: 'center',
              backgroundImage:
                'linear-gradient(90deg, rgb(121, 40, 202), rgb(255, 0, 128))',
              backgroundClip: 'text',
              color: 'transparent',
              fontSize: 30,
            }}
          >
            {description}
          </div>
        )}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
