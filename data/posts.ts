import Blog from 'assets/images/blog.jpg';
import Centrum from 'assets/images/centrum.webp';
import PollWorld from 'assets/images/poll.webp';
import SmallGuide from 'assets/images/smallGuide.webp';
import StyczneTury from 'assets/images/styczne-tury.png';
import { Project } from 'types';

export const BLOGS = {
  smallGuide: { image: Blog, title: 'Small Guide' },
  smallGuide1: { image: Blog, title: 'Small Guide' },
  smallGuide2: { image: Blog, title: 'Small Guide' },
  smallGuide3: { image: Blog, title: 'Small Guide' },
  smallGuide4: { image: Blog, title: 'Small Guide' },
  smallGuide5: { image: Blog, title: 'Small Guide' },
};

type Projects = Record<string, Project>;

export const PROJECTS: Projects = {
  developmentCenter: {
    slug: 'development-therapy-center',
    title: 'Development and Therapy Center',
    image: Centrum,
    desc: 'Simple website built in Gatsby for Development and Therapy Center',
    tags: ['gatsby', 'styledcomponents'],
    publishedAt: 'Fri Dec 02 2022 19:43:34 GMT+0100',
    repository: 'https://github.com/liebner12/CentrumRozwoju',
    url: 'https://centrum-rozwoju-i-terapii.web.app/',
  },
  pollWorld: {
    slug: 'poll-world',
    title: 'Poll World',
    image: PollWorld,
    desc: 'Native application to fill the questionnaires to receive points for purchasing discount codes.',
    tags: ['reactnative', 'expo', 'redux'],
    publishedAt: 'Sat Dec 10 2022 20:34:56 GMT+0100',
    repository: 'https://github.com/liebner12/PollWorld',
  },
  smallGuide: {
    slug: 'small-guide',
    title: 'Small Guide',
    image: SmallGuide,
    desc: 'Application for creating and searching for tours with recommendations',
    tags: ['firebase', 'nextjs', 'tailwindcss', 'algolia'],
    publishedAt: 'Tue Dec 13 2022 20:53:31 GMT+0100',
    repository: 'https://github.com/liebner12/small-guide',
  },
  styczneTury: {
    slug: 'styczne-tury',
    title: 'StyczneTury',
    image: StyczneTury,
    desc: 'My first React site and first implementation of Bootstrap framework.',
    tags: ['react', 'bootstrap', 'reactrouter'],
    publishedAt: 'Sat Dec 10 2022 11:57:45 GMT+0100',
    repository: 'https://github.com/liebner12/Styczne-Tury',
    url: 'https://styczne-tury.web.app/',
  },
};
