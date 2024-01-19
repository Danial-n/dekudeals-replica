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

const game = () => {
  return (
    <div className='px-5 py-3 space-y-5 pb-12'>
      <div className='flex space-x-3'>
        <div>
          <Image
            src='/assets/w500.jpg'
            width={96}
            height={96}
            alt='img'
            className='rounded-lg shadow-xl border-2 border-gray-300'
          />
        </div>
        <div className='flex items-center'>
          <p className='text-5xl font-thin'>Celeste</p>
        </div>
      </div>
      <div className='flex flex-row-reverse'>
        <div className='border border-yellow-500 rounded-md w-48 h-9 flex pl-3'>
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
      <div>
        <p className='text-2xl'>Current prices</p>
        <div className='bg-sky-200 p-3 flex flex-row justify-between text-xs'>
          <div>Nintendo eShop</div>
          <div>Digital</div>
          <div>
            <div className='bg-sky-600 text-white py-3 px-5 rounded-sm'>
              <Link href='/' className='text-white'>
                BND$3.00
              </Link>
            </div>
          </div>
        </div>
        <div className=' p-3 flex flex-row justify-between text-xs'>
          <div>amazon.com</div>
          <div>Digital</div>
          <div>
            <div className='bg-sky-600 text-white py-3 px-5 rounded-sm'>
              <Link href='/' className='text-white'>
                BND$3.00
              </Link>
            </div>
          </div>
        </div>
        <div className=' p-3 flex flex-row justify-between text-xs border-t border-neutral-200'>
          <div>amazon.com</div>
          <div>Digital</div>
          <div>
            <div className='bg-sky-600 text-white py-3 px-5 rounded-sm'>
              <Link href='/' className='text-white'>
                BND$3.00
              </Link>
            </div>
          </div>
        </div>
        <p>
          Available on{' '}
          <Link href='/' className='text-sky-500'>
            other platforms
          </Link>
        </p>
      </div>
      <div className='flex flex-col space-y-1 pb-14 border-b w-full'>
        <p className='text-2xl '>Price history</p>
        <div className=' text-center w-1/2 space-y-1'>
          <p className='font-bold border-b border-neutral-300'>All time low</p>
          <div className='flex flex-row text-sm '>
            <div className='flex flex-col'>
              <p>Digital</p>
              <p>
                BND$1.99{' '}
                <span className='text-sm text-neutral-500'>(-20%)</span>
              </p>
            </div>
            <div>
              <p>Physical</p>
              <p>
                BND$1.99{' '}
                <span className='text-sm text-neutral-500'>(-20%)</span>
              </p>
            </div>
          </div>
        </div>
        <div className='border h-52 flex justify-center items-center'>
          A GRID
        </div>
      </div>
      <div className='text-3xl space-y-5'>
        {/* DESCRIPTION */}
        <Collapsible className='border-b pb-5'>
          <CollapsibleTrigger className='w-full flex justify-start'>
            Description
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className='text-base pt-5'>
              Sint consectetur nisi exercitation nostrud minim ut nulla. Aute
              enim voluptate qui do commodo qui ex consectetur exercitation
              officia mollit qui dolore. Sit id ea et sint deserunt consectetur
              nostrud Lorem tempor. Esse est exercitation aliqua deserunt
              nostrud nulla nostrud voluptate duis. Cillum cupidatat ad laborum
              consequat in nostrud deserunt voluptate aliquip deserunt.
              Consequat qui veniam quis et occaecat et enim officia eiusmod esse
              in excepteur. Dolor ipsum dolor ullamco exercitation laboris
              cupidatat veniam Lorem exercitation elit ut. Sunt nostrud tempor
              qui voluptate fugiat. Est anim anim enim aliquip voluptate aute
              nisi deserunt qui sit est. Et cupidatat consequat qui nisi
              occaecat quis ea. Est culpa nostrud nostrud nisi veniam cupidatat
              officia. Ex eiusmod commodo esse incididunt cupidatat aute do et
              dolor labore non est. Consectetur pariatur ex aliqua incididunt
              elit aute anim nisi. Quis nulla sint pariatur dolore non elit ea
              consectetur sint fugiat est cupidatat. Ullamco nisi non mollit
              dolore tempor. Ipsum tempor enim aliqua duis sit qui.
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* SCREENSHOT */}
        <Collapsible className='border-b pb-5'>
          <CollapsibleTrigger className='w-full flex justify-start'>
            Screenshots
          </CollapsibleTrigger>
          <CollapsibleContent className='pt-5'>
            <div className='flex flex-col items-center'>
              <Image
                src='/assets/w500.jpg'
                width={240}
                height={96}
                alt='img'
                className='rounded-lg shadow-xl border-2 border-gray-300 object-fill'
              />
              <Image
                src='/assets/w500.jpg'
                width={240}
                height={96}
                alt='img'
                className='rounded-lg shadow-xl border-2 border-gray-300'
              />
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* DLC */}
        <Collapsible className='border-b pb-5'>
          <CollapsibleTrigger className='w-full flex justify-start'>
            DLC
          </CollapsibleTrigger>
          <CollapsibleContent className='pt-5'>
            <div className='flex text-base space-x-5'>
              <Image
                src='/assets/w500.jpg'
                width={142}
                height={142}
                alt='img'
                className=''
              />
              <p>DLC 1 VOL 1</p>
              <p>BND$1.99</p>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* INCLUDED IN */}
        <Collapsible className='border-b pb-5'>
          <CollapsibleTrigger className='w-full flex justify-start'>
            Included In
          </CollapsibleTrigger>
          <CollapsibleContent className='pt-5'>
            <div className='flex text-base space-x-5'>
              <Image
                src='/assets/w500.jpg'
                width={142}
                height={142}
                alt='img'
                className=''
              />
              <p>DLC 1 VOL 1</p>
              <p>BND$1.99</p>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>

      {/* DETAILS */}
      <div className='flex flex-col space-y-3'>
        <p className='text-3xl'>Details</p>
        <p>MSRP</p>
        <p>Released:</p>
        <p>Genre:</p>
      </div>
      <div>
        <p className='text-2xl'>Other users also liked...</p>
        <div className='w-full grid grid-cols-2 gap-x-5 gap-y-10 '>
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

export default game;
