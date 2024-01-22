'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, ChevronsRight } from 'lucide-react';
import gameData from '../data/gameList.json';
import { observer } from 'mobx-react';
import layoutViewStore from '../data/layoutViewStore';

const Content = () => {
  // hide "view all" box in "/content" only
  const [shouldHideDiv, setShouldHideDiv] = useState(false);
  useEffect(() => {
    const currentHref = window.location.href;
    const shouldHide = currentHref.includes('/content');
    setShouldHideDiv(shouldHide);
  }, []);

  // hide "collection button" in "/" only
  const [hideColBtn, sethideColBtn] = useState(false);
  useEffect(() => {
    const currentPathname = window.location.pathname;
    const shouldHide = currentPathname === '/';
    sethideColBtn(shouldHide);
  }, []);

  // path for slicing
  const [shouldCut, setshouldCut] = useState(false);
  useEffect(() => {
    const currentPathname = window.location.pathname;
    const shouldCut = currentPathname === '/';
    setshouldCut(shouldCut);
  }, []);

  return (
    <div
      className={`md:w-full ${
        layoutViewStore.isLayout
          ? 'w-full grid grid-cols-2 gap-x-5 gap-y-10 pb-8 md:grid-cols-6'
          : 'pb-8 space-y-5'
      }`}
    >
      {/* game box */}
      {gameData.games
        .slice(0, shouldCut ? 11 : undefined) // <== cut item to 11 only
        .map((game, index) => (
          <div key={index} className='md:w-full'>
            <Link
              href='/items'
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
                className={`${
                  layoutViewStore.isLayout
                    ? ''
                    : 'md:w-full flex space-x-5 md:justify-between'
                }`}
              >
                <p>{game.title}</p>
                <p className='text-black dark:text-white'>{game.price}</p>
                {!hideColBtn && (
                  <div>
                    <button className='text-black border border-neutral-200 p-3 rounded-md flex hover:bg-neutral-400 hover:text-white'>
                      Add to <ChevronDown />
                    </button>
                  </div>
                )}
              </div>
            </Link>
          </div>
        ))}

      {/* view all box */}
      {!shouldHideDiv && (
        <Link href='/content'>
          <div className='flex justify-center items-center text-center font-bold resize-none size-[170px] px-6 rounded-lg shadow-lg border-2 border-gray-300 '>
            View all current deals »
          </div>
        </Link>
      )}
    </div>
  );
};

export default Content;
