import Head from 'next/head';
import { meta } from 'data/meta';

const defaultMeta = {
  ...meta,
  type: 'website',
  robots: 'follow, index',
};

type SeoProps = {
  date?: string;
  templateTitle?: string;
  isBlog?: boolean;
  banner?: string;
  description?: string;
  image?: string;
} & Partial<typeof defaultMeta>;

export function Seo(props: SeoProps) {
  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta.title = props.templateTitle
    ? `${props.templateTitle} | ${meta.title}`
    : meta.title;

  if (meta.image === defaultMeta.image && props.templateTitle && !props.image) {
    meta.image = `https://michal-liebner.vercel.app/api/og?title=${
      props.templateTitle
    }&description=${props.description ? props.description : ''}`;
  }
  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content={meta.robots} />
      <meta content={meta.description} name="description" />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="image" property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@liebner12" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta.date && (
        <>
          <meta property="article:published_time" content={meta.date} />
          <meta
            name="publish_date"
            property="og:publish_date"
            content={meta.date}
          />
          <meta
            name="author"
            property="article:author"
            content="Michał Liebner"
          />
        </>
      )}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta
        name="msapplication-TileImage"
        content="/favicon/windows-icon-dark-70x70.png"
        media="(prefers-color-scheme: dark)"
      />
      <meta
        name="msapplication-TileImage"
        content="/favicon/windows-icon-light-70x70.png"
        media="(prefers-color-scheme: light)"
      />
      <link rel="manifest" href="/manifest.json" />
    </Head>
  );
}

type Favicons = {
  rel: string;
  href: string;
  sizes?: string;
  type?: string;
  media: string;
};

const favicons: Array<Favicons> = [
  {
    rel: 'apple-touch-icon',
    sizes: '76x76',
    href: '/favicon/apple-icon-light-76x76.png',
    media: '(prefers-color-scheme: light)',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '76x76',
    href: '/favicon/apple-icon-dark-76x76.png',
    media: '(prefers-color-scheme: dark)',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '72x72',
    href: '/favicon/android-icon-light-72x72.png',
    media: '(prefers-color-scheme: light)',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '96x96',
    href: '/favicon/android-icon-dark-72x72.png',
    media: '(prefers-color-scheme: dark)',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '96x96',
    href: '/favicon/android-icon-light-96x96.png',
    media: '(prefers-color-scheme: light)',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '96x96',
    href: '/favicon/android-icon-dark-96x96.png',
    media: '(prefers-color-scheme: dark)',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon/favicon-light-32x32.png',
    media: '(prefers-color-scheme: light)',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '96x96',
    href: '/favicon/favicon-light-96x96.png',
    media: '(prefers-color-scheme: light)',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon/favicon-light-16x16.png',
    media: '(prefers-color-scheme: light)',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '76x76',
    href: '/favicon/apple-icon-dark-76x76.png',
    media: '(prefers-color-scheme: dark)',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '192x192',
    href: '/favicon/android-icon-dark-192x192.png',
    media: '(prefers-color-scheme: dark)',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon/favicon-dark-32x32.png',
    media: '(prefers-color-scheme: dark)',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '96x96',
    href: '/favicon/favicon-dark-96x96.png',
    media: '(prefers-color-scheme: dark)',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon/favicon-dark-16x16.png',
    media: '(prefers-color-scheme: dark)',
  },
];
