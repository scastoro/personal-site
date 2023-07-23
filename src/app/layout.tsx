import './globals.css';
import type { Metadata } from 'next';
import { Inter, Oswald, Poppins, Source_Code_Pro } from 'next/font/google';

const oswald = Oswald({ subsets: ['latin'], display: 'swap', variable: '--font-oswald' });
const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-code',
});
const poppins = Poppins({
  weight: ['200', '400', '600', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Sal Castoro | Web Development | UI Design | UI Development | Freelance',
  description: 'Sal Castoro fullstack freelance web developer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='overflow-x-hidden scroll-smooth'>
      <body
        className={`${oswald.variable} ${sourceCodePro.variable} ${poppins.variable} ${poppins.className} relative overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
