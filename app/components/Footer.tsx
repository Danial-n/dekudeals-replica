import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='bg-neutral-200 dark:bg-neutral-800 px-3 py-5 pb-32 md:flex md:justify-center'>
      <div className='flex flex-col space-y-3 text-sm font-light leading-relaxed md:w-10/12 2xl:w-[1080px]'>
        <div>
          <p>
            Deku Deals is made by <Link href='/about'>Team Deku</Link>
          </p>
          <p>
            Get in touch at <Link href='/'>hello@dekudeals.com</Link>
          </p>
          <p>
            <Link href='/'>Feature requests</Link>
          </p>
        </div>
        <div className='flex flex-col space-y-2'>
          <Link
            href=''
            className='bg-blue-500 text-white rounded-md w-40 h-10 flex items-center justify-center'
          >
            Join our Discord
          </Link>
          <Link
            href=''
            className='bg-red-500 text-white rounded-md w-40 h-10 flex items-center justify-center'
          >
            Become a patron
          </Link>
        </div>
        <div>
          <p>
            <Link href='/'>Privacy Policy</Link>
          </p>
          <p>
            <Link href='/'>Do Not Sell My Personal Information</Link>
          </p>
          <p>
            This site uses affiliate links and earns a commission from certain
            links. This does not affect your purchases or the price you may pay.
          </p>
          <p> As an Amazon Associate we earn from qualifying purchases</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
