import {
  HiOutlineChevronDoubleRight,
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlineNewspaper,
  HiOutlinePhone,
  HiOutlineUser,
} from 'react-icons/hi';
import { SkipToContent } from 'components/SkipToContent';
import { NavbarLink } from 'components/NavbarLink';
import { MobileMenu } from 'components/MobileMenu';

const Menu = () => {
  return (
    <div className="navbar sticky left-0 top-0 z-30 mr-4 h-screen w-0 items-start text-white">
      <div className="absolute left-0 top-0 flex h-full w-auto flex-col justify-between py-16 pl-16 xl:pl-20">
        <div className="nav-arrow block">
          <HiOutlineChevronDoubleRight className="h-8 w-8 text-primary-main" />
        </div>
        <ul className="my-auto flex w-full flex-col justify-around gap-10 text-lg font-semibold">
          <NavbarLink
            path="/"
            text="Home"
            isExact
            icon={<HiOutlineHome className="h-6 w-6" />}
          />
          <NavbarLink
            path="/about"
            text="About"
            icon={<HiOutlineUser className="h-6 w-6" />}
          />
          <NavbarLink
            path="/projects"
            text="Projects"
            icon={<HiOutlineHashtag className="h-6 w-6" />}
          />
          <NavbarLink
            path="/blog"
            text="Blog"
            icon={<HiOutlineNewspaper className="h-6 w-6" />}
          />
          <NavbarLink
            path="/contact"
            text="Contact"
            icon={<HiOutlinePhone className="h-6 w-6" />}
          />
        </ul>
      </div>
    </div>
  );
};

export const Navbar = () => {
  return (
    <nav>
      <SkipToContent id="Skip navbar">
        <div className="relative hidden h-full lg:block">
          <Menu />
        </div>
      </SkipToContent>
      <div className="block lg:hidden">
        <MobileMenu />
      </div>
    </nav>
  );
};
