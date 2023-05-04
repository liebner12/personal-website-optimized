'use client';
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Container, ContactButton, Seo, Heading } from 'components';
import { FADE_IN_SECOND } from 'data';
import { usePushView } from 'hooks';

const Contact = () => {
  usePushView('contact');

  return (
    <>
      <Seo
        templateTitle="Contact"
        description="Have a question or want to discuss? Feel free to contact me!"
      />
      <Container className="w-full">
        <div className="my-auto">
          <Heading>
            Have a <span className="text-primary-main">question</span> or want
            to discuss? Feel free to
            <span className="text-primary-main"> contact me!</span>
          </Heading>
          <motion.ul
            className="mt-12 grid max-w-4xl grid-cols-1 gap-12 pl-0 text-primary-main md:grid-cols-2 md:grid-rows-2"
            {...FADE_IN_SECOND}
          >
            <ContactButton
              Icon={FiGithub}
              text="Github"
              showedLink="https://github.com/liebner12"
              link="https://github.com/liebner12"
            />
            <ContactButton
              Icon={FiMail}
              text="Email"
              showedLink="liebner.michal@outlook.com"
              link="mailto:liebner.michal@outlook.com"
            />
            <ContactButton
              Icon={FiLinkedin}
              text="LinkedIn"
              showedLink="Michał Liebner"
              link="https://www.linkedin.com/in/micha%C5%82-liebner-352034229"
            />
            <ContactButton
              Icon={FiTwitter}
              text="Twitter"
              showedLink="@liebner12"
              link="https://twitter.com/liebner12"
            />
          </motion.ul>
        </div>
      </Container>
    </>
  );
};

export default Contact;
