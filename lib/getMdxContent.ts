import SmallGuide from 'app/projects/[slug]/small-guide.mdx';
import PollWorld from 'app/projects/[slug]/poll-world.mdx';
import DevelopmentTherapyCenter from 'app/projects/[slug]/development-therapy-center.mdx';
import StyczneTury from 'app/projects/[slug]/styczne-tury.mdx';

export const getMdxContent = (slug: string) => {
  switch (slug) {
    case 'small-guide':
      return SmallGuide;
    case 'poll-world':
      return PollWorld;
    case 'development-therapy-center':
      return DevelopmentTherapyCenter;
    default:
      return StyczneTury;
  }
};
