import { SiGithub, SiLinkedin } from 'react-icons/si';
import Image from 'next/image';
import { Container } from 'components/containers/Container';
import { StyledLink } from 'components/StyledLink';
import { Button } from 'components/Button';
import { ArrowLink } from 'components/ArrowLink';
import { Heading } from 'components/Heading';
import { ImagesGrid } from 'components/ImagesGrid';
import { CardsRange } from 'components/CardsRange';
import Me from 'assets/images/profileSecond.webp';
import { BlogWithMetaData, ProjectWithMetaData } from 'types/frontmatters';
import { getAllFilesFrontmatter } from 'lib/getAllFilesFrontmatter';
import { PushView } from 'components/PushView';

export const revalidate = 60;

export default async function HomePage() {
  const blogs = (await getAllFilesFrontmatter(
    'blog',
    false
  )) as BlogWithMetaData[];
  const projects = (await getAllFilesFrontmatter(
    'projects',
    true
  )) as ProjectWithMetaData[];

  return (
    <>
      <PushView slug="homepage" />
      <Container className="theme-home overflow-hidden py-10">
        <section className="lg:max-h-[58rem]">
          <div className="flex flex-col gap-20 lg:flex-row lg:items-center">
            <div className="fade-in prose prose-invert my-auto">
              <Heading className="mb-8 xl:!max-w-xl">
                I am focused on
                <span className="text-primary-main"> web standards</span> and
                modern
                <span className="text-primary-main"> web apps</span> development
              </Heading>
              <p className="max-w-lg text-xl">
                Hi! My name is Michał. I work with Javascript Ecosystem on both
                backend and front side of applications.
              </p>
              <div>
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
              </div>
            </div>
            <div className="fade-in-x relative mx-auto mt-20 flex-1 lg:mt-0">
              <div className="absolute -left-6 -top-16 z-10 flex max-w-[90%] flex-col items-start gap-1 md:-left-12 md:-top-8">
                <div className="border-full rounded-full bg-home-light px-12 py-4 font-semibold text-home-dark">
                  Want to learn JavaScript development?🧑‍💻
                </div>
              </div>
              <div className="waves-box-horizontal absolute -left-4 -top-4 -z-10 h-24 w-3/4" />
              <Image
                src={Me}
                width={500}
                height={500}
                className="mx-auto rounded-xl"
                alt="Image presenting me"
                loading="eager"
                placeholder="blur"
                blurDataURL={Me.blurDataURL}
              />
              <div className="absolute -bottom-8 -right-6 z-10 flex flex-col items-end gap-1 md:-right-12">
                <div className="border-full rounded-full bg-home-light px-12 py-4 font-semibold text-home-dark">
                  Let&#39;s do it!🚀
                </div>
              </div>
              <div className="waves-box absolute -bottom-4 -right-4 -z-10 h-40 w-3/4" />
            </div>
          </div>
        </section>
        <section className="mx-auto grid max-w-6xl items-center gap-20 pt-40 lg:grid-cols-2 lg:gap-10 xl:gap-20">
          <ImagesGrid
            images={[
              ...blogs.map(({ image, title }) => ({ image, alt: title })),
            ]}
          />
          <div className="fade-in row-start-1 lg:row-start-auto">
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
          </div>
        </section>
        <section
          id="intro"
          className="mx-auto grid max-w-6xl items-center gap-20 py-20 pt-60 lg:grid-cols-2 lg:gap-36 lg:pt-40 xl:gap-20"
        >
          <div className="fade-in">
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
          </div>
          <CardsRange posts={projects} />
        </section>
      </Container>
    </>
  );
}
