'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, ChevronsRight } from 'lucide-react';
import gameData from '../data/gameList.json';
import { observer } from 'mobx-react';
import layoutViewStore from '../data/layoutViewStore';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import selectedGameStore from '../data/selectedGameStore';

const Wishlist = () => {
  //   const wishlist = selectedGameStore.wishlist;

  return (
    <div>
      {/* game box
      {wishlist.map((wish, index) => (
        <div key={index} className='md:w-full'>
          <Link
            href='/items'
            className={`${
              layoutViewStore.isLayout ? 'space-y-3' : 'flex space-x-7'
            }`}
          >
            <Image
              src={wish.images}
              width={70}
              height={70}
              alt='img'
              className='rounded-lg shadow-xl border-2 border-gray-300'
            />
            <div
              className={`${
                layoutViewStore.isLayout
                  ? ''
                  : 'md:w-full flex space-x-5 md:justify-between'
              }`}
            >
              <p className={layoutViewStore.isLayout ? '' : 'order-1'}>
                {wish.title}
              </p>
              <p
                className={`text-black dark:text-white ${
                  layoutViewStore.isLayout ? '' : 'order-3'
                }`}
              >
                {wish.price}
              </p>
            </div>
          </Link>
        </div>
      ))} */}
    </div>
  );
};

export default Wishlist;
