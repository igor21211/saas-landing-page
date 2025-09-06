import Logo from '@/assets/logosaas.png';
import SocialX from '@/assets/social-x.svg';
import SocialInstagram from '@/assets/social-insta.svg';
import SocialLinkedin from '@/assets/social-linkedin.svg';
import SocialYoutube from '@/assets/social-youtube.svg';
import SocialPin from '@/assets/social-pin.svg';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:w-full before:bg-red-500 before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image
            src={Logo}
            alt="Logo"
            width={40}
            height={40}
            className="relative"
          />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex items-center justify-center gap-6 mt-6">
          <SocialX />
          <SocialInstagram />
          <SocialLinkedin />
          <SocialYoutube />
          <SocialPin />
        </div>
        <p className="mt-6">© 2025 Light. All rights reserved.</p>
      </div>
    </footer>
  );
};
