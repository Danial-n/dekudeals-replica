import Image from 'next/image';
import Content from './components/Content';
import Feed from './components/Feed';
import Link from 'next/link';
import { ChevronsRight } from 'lucide-react';

export default function Home() {
  return (
    <div className='flex flex-col pb-10 w-screen 2xl:w-[1080px]'>
      <div className='p-3'>
        <div className='bg-neutral-300 dark:bg-neutral-800 rounded-sm p-6 space-y-3'>
          <p className='text-2xl'>Welcome to Deku Deals!</p>
          <p>
            Deku Deals tracks the prices of Nintendo Switch games on the eShop
            and at major retailers in order to find the best deals.
          </p>
          <p>
            Want to be notified when the games you want go on sale?{' '}
            <Link href='/signup'>Sign up</Link>, add some to your wishlist, and
            you'll get an email when they go on sale!
          </p>
        </div>
      </div>
      <div className='px-3'>
        <div className='py-5'>
          <h2 className='font-light'>Hottest Deals</h2>
          <p>Great deals on popular games</p>
          <Link href='/content' className='flex flex-row pt-2'>
            View all <ChevronsRight />
          </Link>
        </div>
        <Content />
      </div>
      <Feed />
      <div className='px-3'>
        <div className='py-5'>
          <h2 className='font-light'>Recent Price Drop</h2>
          <p>The freshest discounts</p>
          <Link href='/content' className='flex flex-row pt-2'>
            View all <ChevronsRight />
          </Link>
        </div>
        <Content />
      </div>
      <div className='px-3'>
        <div className='py-5'>
          <h2 className='font-light'>eShop Sales</h2>
          <p>On sale, in the eShop, right now</p>
          <Link href='/content' className='flex flex-row pt-2'>
            View all <ChevronsRight />
          </Link>
        </div>
        <Content />
      </div>
    </div>
  );
}
