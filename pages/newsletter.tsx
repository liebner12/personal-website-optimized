'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiOutlineMail } from 'react-icons/hi';
import { Container, Seo, Button, BackButton, Heading } from 'components';
import { FADE_IN_FIRST, FADE_IN_X } from 'data';
import { usePushView } from 'hooks';
import Mail from 'assets/images/mail.svg';

const NewsLetter = () => {
  usePushView('newsletter');

  return (
    <>
      <Seo
        templateTitle="Newsletter"
        description="Fuel your passion with valuable knowledge emailed to you each week"
      />
      <Container>
        <BackButton />
        <motion.section
          className="my-auto flex flex-col items-center gap-20 md:flex-row"
          {...FADE_IN_FIRST}
        >
          <div className="flex flex-1 flex-col items-start">
            <Heading>
              Fuel your <span className="text-primary-main">passion</span> with
              valuable <span className="text-primary-main"> knowledge</span>{' '}
              emailed to you each week
            </Heading>
            <Button
              StartIcon={HiOutlineMail}
              size="lg"
              href="https://liebner.substack.com/"
              target="_blank"
            >
              Subscribe
            </Button>
          </div>
          <motion.div
            className="mb-auto flex flex-1 justify-center"
            {...FADE_IN_X}
          >
            <Image src={Mail} height={400} width={400} alt="mail" />
          </motion.div>
        </motion.section>
      </Container>
    </>
  );
};

export default NewsLetter;
