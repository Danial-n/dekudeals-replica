'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Bell } from 'lucide-react';
import Shop from './Shop';
import PriceHistory from './PriceHistory';
import DescriptionSect from './DescriptionSect';
import ItemDetails from './ItemDetails';

const items = () => {
  return (
    <div className='px-5 py-3 md:w-full'>
      <div className='hidden md:block md:w-full'>
        <h1>Celeste</h1>
      </div>
      <div className='space-y-5 pb-12 md:flex md:w-full md:space-x-5'>
        {/* img&title(mobile) // img&detail(desktop) */}
        <div className='flex space-x-3 md:flex-col md:w-1/3'>
          <div>
            <Image
              src='/assets/w500.jpg'
              width={96}
              height={96}
              alt='img'
              className='rounded-lg shadow-xl border-2 border-gray-300 md:size-64'
            />
          </div>
          <div className='flex items-center md:hidden'>
            <p className='text-5xl font-thin'>Celeste</p>
          </div>
          <div className='hidden md:block'>
            <ItemDetails />
          </div>
        </div>

        <div className='md:w-2/4'>
          {/* ADD TO BTN */}
          <div className='flex flex-col space-y-3'>
            <div className='flex flex-row-reverse '>
              <div className='border border-yellow-500 rounded-md w-48 h-9 flex justify-center'>
                <Link
                  href=''
                  className='flex flex-row items-center space-x-2 text-black'
                >
                  <Bell size='16px' />
                  <p>Add to wishlist</p>
                </Link>
              </div>
            </div>
            <div className='bg-neutral-200 rounded-md text-center p-3'>
              <p>Sign up to get notified next time this goes on sale</p>
            </div>
          </div>

          {/* SHOP SECT */}
          <Shop />

          {/* PRICE HISTORY */}
          <PriceHistory />

          {/* COLLAPSIBLE SECT */}
          <DescriptionSect />
        </div>

        {/* DETAILS */}
        <div className='md:hidden'>
          <ItemDetails />
        </div>
      </div>
      {/* OTHERS RECC */}
      <div>
        <p className='text-2xl'>Other users also liked...</p>
        <div className='w-full flex flex-row space-x-5'>
          <div>
            <Image
              src='/assets/w500.jpg'
              width={162}
              height={162}
              alt='img'
              className='rounded-lg shadow-xl border-2 border-gray-300'
            />
            <p className='text-sky-500'>Celeste</p>
            <p>BND$5.00</p>
          </div>
          <div>
            <Image
              src='/assets/w500.jpg'
              width={162}
              height={162}
              alt='img'
              className='rounded-lg shadow-xl border-2 border-gray-300'
            />
            <p className='text-sky-500'>Celeste</p>
            <p>BND$5.00</p>
          </div>
          <div>
            <Image
              src='/assets/w500.jpg'
              width={162}
              height={162}
              alt='img'
              className='rounded-lg shadow-xl border-2 border-gray-300'
            />
            <p className='text-sky-500'>Celeste</p>
            <p>BND$5.00</p>
          </div>
          <div>
            <Image
              src='/assets/w500.jpg'
              width={162}
              height={162}
              alt='img'
              className='rounded-lg shadow-xl border-2 border-gray-300'
            />
            <p className='text-sky-500'>Celeste</p>
            <p>BND$5.00</p>
          </div>
          <div>
            <Image
              src='/assets/w500.jpg'
              width={162}
              height={162}
              alt='img'
              className='rounded-lg shadow-xl border-2 border-gray-300'
            />
            <p className='text-sky-500'>Celeste</p>
            <p>BND$5.00</p>
          </div>
          <div>
            <Image
              src='/assets/w500.jpg'
              width={162}
              height={162}
              alt='img'
              className='rounded-lg shadow-xl border-2 border-gray-300'
            />
            <p className='text-sky-500'>Celeste</p>
            <p>BND$5.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default items;
