import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';
import { Heading } from 'components/Heading';
import { ContactButton } from 'components/ContactBlock';
import { Container } from 'components/containers/Container';
import { PageView } from 'components/PageView';

export default function Contact() {
  return (
    <>
      <PageView slug="contact" />
      <Container className="w-full">
        <div className="my-auto">
          <Heading className="fade-in">
            Have a <span className="text-primary-main">question</span> or want
            to discuss? Feel free to
            <span className="text-primary-main"> contact me!</span>
          </Heading>
          <ul className="fade-in mt-12 grid max-w-4xl grid-cols-1 gap-12 pl-0 text-primary-main md:grid-cols-2 md:grid-rows-2">
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
          </ul>
        </div>
      </Container>
    </>
  );
}
