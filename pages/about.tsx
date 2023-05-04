'use client';
import Image from 'next/image';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { motion } from 'framer-motion';
import { Container, Icons, Seo, StyledLink } from 'components';
import { FADE_IN_FIRST, FADE_IN_SECOND, FADE_IN_X } from 'data';
import Me from 'assets/images/profilePicture.webp';
import { usePushView } from 'hooks';

const About = () => {
  usePushView('about');
  return (
    <>
      <Seo
        templateTitle="About"
        description="Some words about me and technologies that I am most familiar with."
      />
      <Container>
        <div className="prose prose-invert my-auto lg:!max-w-full">
          <motion.h1 className="text-primary-main" {...FADE_IN_FIRST}>
            About
          </motion.h1>
          <motion.div className="float-right" {...FADE_IN_X}>
            <Image
              src={Me}
              width={498}
              height={885}
              className="my-0 ml-4 max-w-[8rem] md:max-w-[10rem] lg:max-w-[16rem] xl:max-w-[20rem]"
              alt="Image presenting me"
            />
          </motion.div>
          <motion.div className="prose prose-invert" {...FADE_IN_SECOND}>
            <p>
              Hi! I&#39;m Michał. I&#39;ve been learning frontend development
              since 2018. To accquire necessary skills I&#39;ve used online
              courses like freeCodeCamp, and during my studies of Algorithmic
              Computer Science in Wrocław University of Science and Technology
              I&#39;ve learned a lot about analysis. This preperation gave me
              oppurtonity to join amazing IDENTT team and work there as
              front-end developer.
            </p>
            <p>
              Right now there are many areas that I would like to improve on
              especially in Javascript environment and I am motivated to learn
              as much as possible. Frontend isn&#39;t only thing that I can do,
              also I have developed some backend servers, scripts, CI.
            </p>
            <p>
              This website I would like to treat as my playground that will
              allow me to improve my coding skills and also showcase projects.
              Blog posts will allow me to share my knowledge and mainly it could
              help me consolidate things I&#39;ve learned. So feel free to
              contact me and I will be glad to help!
            </p>
            <h2>Currently used stack</h2>
            <Icons
              icons={[
                'react',
                'nextjs',
                'nodejs',
                'tailwindcss',
                'gatsby',
                'typescript',
                'supabase',
              ]}
              size="lg"
              className="flex list-none flex-wrap gap-x-10 gap-y-4 pl-0 sm:gap-x-4"
            />
            <h3>Links:</h3>
            <ul className="mt-4 flex list-none items-center gap-8 pl-0">
              <li className="pl-0">
                <StyledLink
                  target="_blank"
                  href="https://github.com/liebner12"
                  StartIcon={SiGithub}
                  color="text-primary-main"
                >
                  Github
                </StyledLink>
              </li>
              <li className="flex items-center gap-2">
                <StyledLink
                  target="_blank"
                  href="https://github.com/liebner12"
                  StartIcon={SiLinkedin}
                  color="text-primary-main"
                >
                  Linkedin
                </StyledLink>
              </li>
            </ul>
          </motion.div>
        </div>
      </Container>
    </>
  );
};

export default About;
