import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const about = () => {
  return (
    <div className='px-5 py-3 space-y-5 pb-16 md:w-[60%]'>
      <div className='space-y-5'>
        <h2>About</h2>
        <p>
          Hi! We're glad you're here and on your way to finding your next great
          game.
        </p>
        <p>
          Deku Deals is dedicated to helping you find great discounts on top
          games or discover the next great game for your collection. Deku Deals
          makes it easy to find the best deals on games across all major stores
          and be alerted to the next top sale.
        </p>
        <p>
          Deku Deals started in 2017 after Michael bought a Switch and soon grew
          annoyed at how hard it was to find out about game sales. While sites
          like IsThereAnyDeal could highlight PC game deals across multiple
          stores, nothing similar existed for the Switch as well. Deku Deals
          officially launched in March 2018, and has steadily grown to be the
          top site for finding deals across Switch, and since 2021, PlayStation
          and Xbox as well.{' '}
        </p>
      </div>
      <div className='space-y-5'>
        <h2>Who is Team Deku?</h2>
        <div className='w-full flex justify-center'>
          <Link
            href='/content'
            className='border-2 border-sky-500 rounded-sm px-3 py-2'
          >
            See all of Team Deku's favorite games
          </Link>
        </div>
        <div className='flex flex-col space-y-5'>
          <div className='flex border-2'>
            <Image
              src='/assets/avatar1.jpg'
              alt='avatar'
              width={232}
              height={232}
            />
            <div className='flex flex-col'>
              <div className=' px-3 pt-3 '>
                <h3>Micheal</h3>
              </div>
              <div className='p-3 '>
                <p className='border-t-2 pt-3'>
                  Michael is the founder and fearless leader of Deku Deals. He's
                  a software developer, indie game maker, and world traveler.
                  These days he can be found in Seattle with his wife, son, and
                  pet tarrasque "Alonzo".
                </p>
                <p>Desert island game? Outer Wilds</p>
              </div>
            </div>
          </div>
          <div className='flex border-2'>
            <Image
              src='/assets/avatar2.jpg'
              alt='avatar'
              width={232}
              height={232}
            />
            <div className='flex flex-col'>
              <div className=' px-3 pt-3 '>
                <h3>Andrew</h3>
              </div>
              <div className='p-3 '>
                <p className='border-t-2 pt-3'>
                  Michael is the founder and fearless leader of Deku Deals. He's
                  a software developer, indie game maker, and world traveler.
                  These days he can be found in Seattle with his wife, son, and
                  pet tarrasque "Alonzo".
                </p>
                <p>Desert island game? Outer Wilds</p>
              </div>
            </div>
          </div>
          <div className='flex border-2'>
            <Image
              src='/assets/avatar3.jpg'
              alt='avatar'
              width={232}
              height={232}
            />
            <div className='flex flex-col'>
              <div className=' px-3 pt-3 '>
                <h3>Scott</h3>
              </div>
              <div className='p-3 '>
                <p className='border-t-2 pt-3'>
                  Michael is the founder and fearless leader of Deku Deals. He's
                  a software developer, indie game maker, and world traveler.
                  These days he can be found in Seattle with his wife, son, and
                  pet tarrasque "Alonzo".
                </p>
                <p>Desert island game? Outer Wilds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
