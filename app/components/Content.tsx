'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronsRight } from 'lucide-react';
import gameData from '../data/gameList.json';
import { observer } from 'mobx-react';
import layoutViewStore from '../data/layoutViewStore';

const Content = () => {
  interface Gamess {
    title: string;
    price: string;
    images: string;
  }
  const path = usePathname();

  // hide "view all" box in /content
  const [shouldHideDiv, setShouldHideDiv] = useState(false);
  useEffect(() => {
    const currentHref = window.location.href;
    const shouldHide = currentHref.includes('/content');
    setShouldHideDiv(shouldHide);
  }, []);

  return (
    <div
      className={`${
        layoutViewStore.isLayout
          ? 'w-full grid grid-cols-2 gap-x-5 gap-y-10 pb-8 md:grid-cols-6'
          : 'pb-8 space-y-5 '
      }`}
    >
      {/* game box */}
      {gameData.games.map((game) => (
        <div>
          <Link
            href='/game'
            className={`${
              layoutViewStore.isLayout ? 'space-y-3' : 'flex space-x-7'
            }`}
          >
            <Image
              src={game.images}
              width={`${layoutViewStore.isLayout ? '170' : '130'}`}
              height={`${layoutViewStore.isLayout ? '170' : '130'}`}
              alt='img'
              className='rounded-lg shadow-xl border-2 border-gray-300'
            />
            <div
              className={`${layoutViewStore.isLayout ? '' : 'flex space-x-5'}`}
            >
              <p>{game.title}</p>
              <p className='text-black dark:text-white'>{game.price}</p>
            </div>
          </Link>
        </div>
      ))}

      {/* view all box */}
      {!shouldHideDiv && (
        <div className='flex justify-center items-center size-[170px] md:size-[130px] px-2 rounded-lg shadow-lg border-2 border-gray-300 '>
          <Link href='/content'>
            View all current deals <ChevronsRight />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Content;
