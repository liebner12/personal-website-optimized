import Image from 'next/image';
import { MdOutlineGamepad } from 'react-icons/md';
import { LuGamepad2 } from 'react-icons/lu';
import { BiGame } from 'react-icons/bi';
import { Container } from 'components/containers/Container';
import { PushView } from 'components/PushView';
import { ArrowLink } from 'components/ArrowLink';
import MeWithWera from 'assets/images/us.jpg';
import Me from 'assets/images/profileSecond.webp';

export const revalidate = 60;

export default async function About() {
  return (
    <>
      <PushView slug="about" />
      <Container className="theme-about overflow-hidden py-10">
        <section className="mx-auto grid max-w-6xl items-center gap-20 lg:grid-cols-2 lg:gap-10 xl:gap-20">
          <div className="prose prose-invert row-start-1 lg:row-start-auto">
            <h1 className="text-4xl font-bold  md:text-6xl lg:text-5xl xl:text-6xl">
              Hi, <span className="text-primary-main">I&apos;m Michał</span>
            </h1>
            <p className="text-lg">
              I&apos;m{' '}
              <span className="font-bold text-primary-main">versatile</span>{' '}
              developer fluent in JavaScript/TypeScript, passionate about
              overall programming. My main background was frontend development
              but with time I became more and more interested in backend and
              devops side.
            </p>
            <p className="text-lg">
              I love to learn new things and I&apos;m not afraid of challenges.
              Currently I am working as a web developer at{' '}
              <a
                className="font-bold text-primary-main !underline"
                href="https://identt.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                IDENTT
              </a>
              .
            </p>
            <div className="mt-8 flex">
              <ArrowLink href="#intro" direction="down">
                Get to know me
              </ArrowLink>
            </div>
          </div>
          <div>
            <Image
              alt="Picture presenting me"
              src={Me}
              placeholder="blur"
              className="rounded-xl"
            />
          </div>
        </section>
        <section
          id="intro"
          className="mx-auto grid max-w-6xl items-center gap-20 py-20 pt-60 lg:grid-cols-2 lg:gap-36 lg:pt-40 xl:gap-20"
        >
          <div className="relative">
            <ul className="abolute animate-background left-0 top-0 text-primary-main">
              {[...Array(4)].map((value, index) => (
                <li key={index}>
                  <LuGamepad2 />
                </li>
              ))}
              {[...Array(4)].map((value, index) => (
                <li key={4 + index}>
                  <MdOutlineGamepad />
                </li>
              ))}
              {[...Array(4)].map((value, index) => (
                <li key={8 + index}>
                  <BiGame />
                </li>
              ))}
            </ul>
            <Image
              src="https://res.cloudinary.com/dtce87smh/image/upload/f_auto/v1691511549/League-of-Legends-Transparent-Background_yv9gj7.png"
              alt="League of Legends champions"
              width={1400}
              height={892}
              className="relative z-10"
            />
          </div>
          <div className="prose prose-invert">
            <h2 className="text-4xl font-bold md:text-6xl lg:text-5xl xl:text-6xl">
              Besides coding{' '}
              <span className="text-primary-main">I love video games</span>
            </h2>
            <p className="text-lg">
              Unfortunately, as I age, my gaming time diminishes. Nevertheless,
              I still try to stay connected with the gaming world. In my youth,
              mostly I played{' '}
              <span className="text-primary-main">League of Legends</span>,
              whereas now, my focus lies in observing its professional league
              scene. Of course it&apos;s not just LoL - I&apos;m always up for
              exploring other exciting games too! PS. I also watch
              <span className="text-primary-main"> anime</span>!
            </p>
          </div>
        </section>
        <section className="mx-auto grid max-w-6xl items-center gap-20 py-20 lg:grid-cols-2 lg:gap-10 xl:gap-20">
          <div className="prose prose-invert row-start-1 lg:row-start-auto">
            <h1 className="text-4xl font-bold  md:text-6xl lg:text-5xl xl:text-6xl">
              My <span className="text-primary-main">personal life</span>
            </h1>
            <p className="text-lg">
              I was born in 1999. After graduating High School I went to Wrocław
              University of Science and Technology and studied Algorithmic
              Computer Science for 3.5 years, and after that I went to Wrocław
              University of Economics and Business and studied there also IT for
              2 years. I&apos;m currently living in Wrocław, Poland and most of
              my free time I share with my girlfriend Weronika.
            </p>
          </div>
          <div>
            <Image
              alt="Picture presenting me"
              src={MeWithWera}
              placeholder="blur"
              className="rounded-xl"
            />
          </div>
        </section>
      </Container>
    </>
  );
}
