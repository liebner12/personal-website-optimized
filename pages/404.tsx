'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button, Container, Missing, Seo } from 'components';
import { FADE_IN_FIRST } from 'data';
import { theme } from 'tailwind.config';
import Stars from 'assets/images/stars.svg';

type Props = {
  statusCode?: number;
};

const Error = ({ statusCode }: Props) => {
  return (
    <>
      <Seo templateTitle="Not found" />
      <Container>
        <motion.div
          className="flex h-full max-h-full w-full flex-col items-center justify-center gap-8 text-center md:flex-row md:gap-20 lg:gap-40"
          {...FADE_IN_FIRST}
        >
          <div className="relative">
            <Image
              src={Stars}
              width={600}
              className="absolute left-1/2 -top-60 -z-10 -translate-x-1/2 lg:-top-96 lg:max-w-max"
              alt="stars"
            />
            <Missing color={theme.colors.error} />
          </div>
          <div>
            <h1 className="text-4xl font-bold leading-tight text-primary-main lg:text-[6rem]">
              Error {statusCode}
            </h1>
            <p className="mt-2 mb-8 text-lg text-grey-300">
              {statusCode === 404 ? 'Page Not Found' : 'Unexpected error'}
            </p>
            <Button size="lg" href="/">
              Get To Home Page
            </Button>
          </div>
        </motion.div>
      </Container>
    </>
  );
};

export default Error;
