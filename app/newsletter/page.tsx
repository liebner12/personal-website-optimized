import Image from 'next/image';
import { HiOutlineMail } from 'react-icons/hi';
import Mail from 'assets/images/mail.svg';
import { BackButton } from 'components/BackButton';
import { PushView } from 'components/PushView';
import { Heading } from 'components/Heading';
import { Button } from 'components/Button';
import { Container } from 'components/containers/Container';

const Newsletter = () => {
  return (
    <>
      <PushView slug="newsletter" />
      <Container>
        <BackButton />
        <section className="fade-in my-auto flex flex-col items-center gap-20 md:flex-row">
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
          <div className="mb-auto flex flex-1 justify-center">
            <Image src={Mail} height={400} width={400} alt="mail" />
          </div>
        </section>
      </Container>
    </>
  );
};

export default Newsletter;
