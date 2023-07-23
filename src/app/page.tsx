import Image from 'next/image';

import MainGraphic from './MainGraphic';
import siteLogo from '../../public/site-logo.png';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header id='header' className='bg-black flex justify-around items-center py-3'>
        <Link href={'#'}>
          <Image src={siteLogo} alt='Sal Castoro website logo' width={75}></Image>
        </Link>
        <nav className='flex items-center gap-5'>
          <Link href={'/#socials'} className='hover:opacity-80'>
            socials
          </Link>
          <Link href={'/#about'} className='hover:opacity-80'>
            about
          </Link>
          <Link
            className='bg-white text-light-black px-2 rounded-sm hover:opacity-80'
            href={'mailto:hi@salcastoro.com'}
          >
            Let&#39;s Chat
          </Link>
        </nav>
      </header>
      <main id='main' className='flex items-center justify-center gap-6 h-[80vh]'>
        <MainGraphic className='hidden md:block' fill='#151517'></MainGraphic>
        <div className='flex flex-col justify-center'>
          <h1 className='text-5xl'>Sal Castoro</h1>
          <p className='text-light-blue'>Full Stack Web Developer</p>
        </div>
      </main>
      <section id='about' className='flex justify-center'>
        <div className='container bg-black py-16 px-20 flex flex-col gap-5'>
          <h2 className='text-3xl'>About me</h2>
          <p>
            As a proficient Full Stack Web Developer, I create websites and web applications that
            align perfectly with the ever-evolving business needs in today&#39;s dynamic digital
            marketplace. My skill set spans both front-end and back-end development, giving me the
            ability to create and integrate diverse functionalities into a seamless, user-friendly
            whole.
          </p>
          <p>
            My experience includes a wide range of projects, from simple business websites to
            intricate web applications. These ventures have always been focused on enhancing
            business growth and improving operational efficiency. I prioritize adhering to best
            practices, ensuring each project I undertake is secure, high-performing, and
            user-friendly.
          </p>
          <p>
            Clear communication and transparency form the core of my work ethics. I diligently bring
            client visions to life, regardless of the project&#39;s size or complexity. Let&#39;s
            connect and discuss how we can transform your ideas into impactful digital experiences.
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
        className='bg-black py-10 mt-72 flex flex-col items-center justify-center'
      >
        <div className='flex justify-around w-4/5'>
          <Image src={siteLogo} alt='Sal Castoro website logo' width={75}></Image>
          <div className='relative'>
            <p className='text-light-blue'>social media</p>
            <div className='socials'>
              <Link className='pr-4 hover:opacity-80' href={'github.com/scastoro'}>
                github
              </Link>
              <Link href={'#'} className='hover:opacity-80'>
                linkedIn
              </Link>
            </div>
          </div>
        </div>
        <p className='text-light-grey pt-10'>&copy; Sal Castoro {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}
