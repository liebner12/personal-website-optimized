import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { motion } from 'framer-motion';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import {
  Container,
  IconsList,
  Seo,
  StyledLink,
  Button,
  ArrowLink,
  Heading,
} from 'components';
import { FADE_IN_FIRST, FADE_IN_SECOND, FADE_IN_VIEW } from 'data';
import { getAllFilesFrontmatter, getTags, generateRssFeed } from 'lib';
import { sortByDate } from 'utils';
import { BlogFrontmatter, ProjectFrontmatter } from 'types';
import Me from 'assets/images/profileSecond.webp';
import { usePushView } from 'hooks';

const DynamicImagesGrid = dynamic(() =>
  import('components/ImagesGrid').then((mod) => mod.ImagesGrid)
);
const DynamicCardsRange = dynamic(() =>
  import('components/CardsRange').then((mod) => mod.CardsRange)
);

function HomePage({
  blogs,
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  usePushView('homepage');

  return (
    <>
      <Seo
        templateTitle="Home"
        description="On this website I showcase my projects and write blog posts connected with Javascript ecosystem"
      />
      <Container className="overflow-hidden py-10 lg:mt-0 lg:!pt-0">
        <section className="flex flex-col justify-center lg:h-screen lg:max-h-[58rem]">
          <div className="flex flex-col gap-20 lg:flex-row lg:items-center">
            <div className="prose prose-invert my-auto">
              <Heading className="mb-8 xl:!max-w-xl">
                I am focused on
                <span className="text-primary-main"> web standards</span> and
                modern
                <span className="text-primary-main"> web apps</span> development
              </Heading>
              <motion.p className="max-w-lg text-xl" {...FADE_IN_SECOND}>
                Hi! My name is Michał. I work with Javascript Ecosystem on both
                backend and front side of applications.
              </motion.p>
              <motion.div {...FADE_IN_SECOND}>
                <div className="flex flex-col-reverse flex-wrap items-start gap-4 sm:flex-row">
                  <Button href="/blog" size="lg">
                    Read the blog
                  </Button>
                  <Button href="/about" variant="secondary" size="lg">
                    Get to know me!
                  </Button>
                </div>
                <div className="mt-8 flex gap-6">
                  <StyledLink
                    href="https://github.com/liebner12"
                    target="_blank"
                    StartIcon={SiGithub}
                    size="sm"
                  >
                    Github
                  </StyledLink>
                  <StyledLink
                    href="https://www.linkedin.com/in/micha%C5%82-liebner-352034229"
                    target="_blank"
                    StartIcon={SiLinkedin}
                    size="sm"
                  >
                    Linkedin
                  </StyledLink>
                </div>
              </motion.div>
            </div>
            <motion.div
              className="relative mx-auto mt-20 flex-1 lg:mt-0"
              {...FADE_IN_FIRST}
            >
              <div className="absolute -top-16 -left-6 z-10 flex max-w-[90%] flex-col items-start gap-1 md:-left-12 md:-top-8">
                <div className="border-full rounded-full bg-home-light px-12 py-4 font-semibold text-home-dark">
                  Want to learn JavaScript development?🧑‍💻
                </div>
              </div>
              <div className="waves-box-horizontal absolute -top-4 -left-4 -z-10 h-24 w-3/4" />
              <Image
                src={Me}
                width={500}
                height={500}
                className="mx-auto rounded-xl"
                alt="Image presenting me"
                loading="eager"
              />
              <div className="absolute -bottom-8 -right-6 z-10 flex flex-col items-end gap-1 md:-right-12">
                <div className="border-full rounded-full bg-home-light px-12 py-4 font-semibold text-home-dark">
                  Let&#39;s do it!🚀
                </div>
              </div>
              <div className="waves-box absolute -bottom-4 -right-4 -z-10 h-40 w-3/4" />
            </motion.div>
          </div>
        </section>
        <section className="mx-auto grid max-w-6xl items-center gap-20 pt-40 lg:grid-cols-2 lg:gap-10 xl:gap-20">
          <DynamicImagesGrid
            images={[
              ...blogs.map(({ image, title }) => ({ image, alt: title })),
            ]}
          />
          <motion.div
            {...FADE_IN_VIEW}
            className="row-start-1 lg:row-start-auto"
          >
            <h2 className="text-4xl font-bold text-primary-main md:text-6xl lg:text-5xl xl:text-6xl">
              Posts that share my knowledge
            </h2>
            <p className="mt-4 text-lg text-grey-300">
              I want this space to show some useful algorithms and
              functionalities that are good to know. Under this link You will
              find posts that cover concepts from Javascript world and few other
              languages too.
            </p>
            <div className="mt-8 flex">
              <ArrowLink href="/blog">Start reading the blog</ArrowLink>
            </div>
          </motion.div>
        </section>
        <section
          id="intro"
          className="mx-auto grid max-w-6xl items-center gap-20 py-20 pt-60 lg:grid-cols-2 lg:gap-36 lg:pt-40 xl:gap-20"
        >
          <motion.div {...FADE_IN_VIEW}>
            <h2 className="text-4xl font-bold text-primary-main md:text-6xl lg:text-5xl xl:text-6xl">
              Checkout my developer journey through my projects
            </h2>
            <p className="mt-4 text-lg text-grey-300">
              In this projects timeline I show spotlight of each of them and
              focus on lessons that I and You can gather from them. I&#39;ve
              used them as my way to learn new technologies frameworks that I
              found intresting.
            </p>
            <div className="mt-12 flex">
              <ArrowLink href="/projects">See more projects</ArrowLink>
            </div>
          </motion.div>
          <DynamicCardsRange posts={projects} />
        </section>
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  projects: ProjectFrontmatter[];
  blogs: BlogFrontmatter[];
  tags: Array<IconsList> | Array<string>;
}> = async () => {
  const projects = await getAllFilesFrontmatter('projects');
  const blogs = await getAllFilesFrontmatter('blog');
  await generateRssFeed();

  return {
    props: {
      projects: projects.sort(sortByDate).slice(0, 3),
      tags: getTags(blogs),
      blogs: blogs.sort(sortByDate).slice(0, 6),
    },
  };
};

export default HomePage;
