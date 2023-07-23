import Image from 'next/image';

import MainGraphic from './MainGraphic';
import siteLogo from '../../public/site-logo.png';
import Link from 'next/link';
import BackgroundIcon from './BackgroundIcon';

export default function Home() {
  return (
    <>
      <BackgroundIcon className='absolute scale-50 sm:scale-100 -right-[101%] sm:-right-96 -z-10 sm:top-[50rem]' />
      <header id='header' className='bg-black flex justify-around items-center py-3'>
        <Link href={'#'}>
          <Image src={siteLogo} alt='Sal Castoro website logo' width={75}></Image>
        </Link>
        <nav className='flex items-center gap-5'>
          <Link href='/#socials' className='hover:opacity-80'>
            socials
          </Link>
          <Link href='/#about' className='hover:opacity-80'>
            about
          </Link>
          <Link
            className='bg-white text-light-black px-2 rounded-sm hover:opacity-80'
            href='mailto:hi@salcastoro.com'
            scroll={false}
          >
            Let&#39;s Chat
          </Link>
        </nav>
      </header>
      <main
        id='main'
        className='flex items-center justify-center gap-6 h-[50vh] sm:h-[70vh] md:h-[80vh]'
      >
        <MainGraphic className='hidden md:block' fill='transparent'></MainGraphic>
        <div className='flex flex-col justify-center gap-5'>
          <h1 className='text-5xl font-oswald'>Sal Castoro</h1>
          <p className='text-light-blue font-code'>Full Stack Web Developer</p>
        </div>
      </main>
      <section id='about' className='flex justify-center'>
        <div className='container bg-black py-16 px-10 md:px-20 flex flex-col gap-5'>
          <h2 className='text-3xl font-oswald'>About me</h2>
          <p>
            Hello there! I&#39;m a Full Stack Web Developer with a knack for turning complex ideas
            into user-friendly websites and applications. I know the ins and outs of both front-end
            and back-end development, meaning I can take an idea from the drawing board all the way
            to a live, fully functional site.
          </p>
          <p>
            I&#39;ve been lucky enough to work on a bunch of different projects, from simple
            websites that get businesses online, to complex applications that streamline operations
            and promote growth. I&#39;m all about the details, making sure everything I build is
            safe, speedy, and easy to use.
          </p>
          <p>
            I&#39;m a big believer in open communication and keeping things transparent. I love
            collaborating with clients to bring their vision to life, no matter how big or small the
            project might be. If you&#39;re looking for a developer who can make the techy stuff a
            little less intimidating, let&#39;s connect! Together, we can transform your ideas into
            something amazing online.
          </p>
          <Link
            className='bg-white text-light-black mt-6 px-2 rounded-sm self-center hover:opacity-80'
            href={'mailto:hi@salcastoro.com'}
          >
            Let&#39;s Chat
          </Link>
        </div>
      </section>
      <footer
        id='footer'
        className='bg-black py-7 md:py-10 mt-40 md:mt-72 flex flex-col items-center justify-center'
      >
        <div
          id='socials'
          className='flex flex-col-reverse md:flex-row items-center md:justify-around gap-5 w-4/5'
        >
          <Image src={siteLogo} alt='Sal Castoro website logo' width={75}></Image>
          <div className='relative'>
            <p className='text-light-blue'>social media</p>
            <div className='socials'>
              <a
                className='pr-4 hover:opacity-80'
                href='https://github.com/scastoro'
                target='_blank'
                rel='noopener noreferrer'
              >
                github
              </a>
              <a
                href='https://www.linkedin.com/in/sal-castoro-3b1050178/'
                className='hover:opacity-80'
                target='_blank'
                rel='noopener noreferrer'
              >
                linkedIn
              </a>
            </div>
          </div>
        </div>
        <p className='text-light-grey pt-5 md:pt-10'>
          &copy; Sal Castoro {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
}
