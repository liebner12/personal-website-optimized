'use client';
import Image from 'next/image';
import { theme } from 'tailwind.config';
import Stars from 'assets/images/stars.svg';
import { PushView } from 'components/PushView';
import { Missing } from 'components/Missing';
import { Button } from 'components/Button';
import { Container } from 'components/containers/Container';

export default function Error() {
  return (
    <>
      <PushView slug="error" />
      <Container>
        <div className="fade-in flex h-full max-h-full w-full flex-col items-center justify-center gap-8 text-center md:flex-row md:gap-20 lg:gap-40">
          <div className="relative">
            <Image
              src={Stars}
              width={600}
              className="absolute -top-60 left-1/2 -z-10 -translate-x-1/2 lg:-top-96 lg:max-w-max"
              alt="stars"
            />
            <Missing color={theme.colors.error} />
          </div>
          <div>
            <h1 className="text-4xl font-bold leading-tight text-primary-main lg:text-[6rem]">
              Error
            </h1>
            <p className="mb-8 mt-2 text-lg text-grey-300">Unexpected error</p>
            <Button size="lg" href="/">
              Get To Home Page
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}
