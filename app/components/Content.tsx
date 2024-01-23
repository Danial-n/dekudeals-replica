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
import ReactPaginate from 'react-paginate';

const Content = observer(() => {
  // hide item in "/content" only
  const [hideFromContent, sethideFromContent] = useState(false);
  useEffect(() => {
    const currentHref = window.location.href;
    const shouldHide = currentHref.includes('/content');
    sethideFromContent(shouldHide);
  }, []);

  // hide items in "/" only
  const [hideFromHome, sethideFromHome] = useState(false);
  useEffect(() => {
    const currentPathname = window.location.pathname;
    const shouldHide = currentPathname === '/';
    sethideFromHome(shouldHide);
  }, []);

  // path for slicing
  // const [shouldCut, setshouldCut] = useState(false);
  // useEffect(() => {
  //   const currentPathname = window.location.pathname;
  //   const shouldCut = currentPathname === '/';
  //   setshouldCut(shouldCut);
  // }, []);

  //  PAGINATION
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 30;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = gameData.games.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(gameData.games.length / itemsPerPage);
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % gameData.games.length;
    setItemOffset(newOffset);
  };

  // display for home or content page
  const currentPathname = window.location.pathname;
  const atHome = currentPathname === '/';
  const displayedGames = atHome ? gameData.games.slice(0, 11) : currentItems;

  return (
    <div
      className={`md:w-full ${
        layoutViewStore.isLayout
          ? 'w-full grid grid-cols-2 gap-x-5 gap-y-10 pb-8 md:grid-cols-6'
          : 'pb-8 space-y-5'
      }`}
    >
      {/* game box */}
      {displayedGames.map((game, index) => (
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
              <p className={layoutViewStore.isLayout ? '' : 'order-1'}>
                {game.title}
              </p>
              <p
                className={`text-black dark:text-white ${
                  layoutViewStore.isLayout ? '' : 'order-3'
                }`}
              >
                {game.price}
              </p>
              {!hideFromHome && (
                <DropdownMenu>
                  <DropdownMenuTrigger
                    className={`text-black dark:text-white h-10 border border-neutral-200 px-3 rounded-md flex hover:bg-neutral-400 hover:text-white 
                      ${layoutViewStore.isLayout ? '' : 'order-2'}`}
                  >
                    Add to <ChevronDown />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Add to wishlist</DropdownMenuItem>
                    <DropdownMenuItem>Add to collection</DropdownMenuItem>
                    <DropdownMenuItem>Rating</DropdownMenuItem>
                    <DropdownMenuItem>Hide</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          </Link>
        </div>
      ))}

      {/* PAGINATION */}
      {!hideFromHome && (
        <ReactPaginate
          className='flex flex-row border border-neutral-200 rounded-md h-10 w-56 justify-between items-center divide-x-2'
          breakLabel='...'
          // next sect
          nextLabel='>'
          nextClassName='pl-3 py-2 flex justify-center items-center'
          // page handler
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageClassName='pl-3 py-2 flex justify-center items-center'
          pageCount={pageCount}
          // prev sect
          previousLabel='<'
          previousClassName='pl-3 py-2 flex justify-center items-center'
          renderOnZeroPageCount={null}
        />
      )}

      {/* view all box */}
      {!hideFromContent && (
        <Link href='/content'>
          <div className='flex justify-center items-center text-center font-bold resize-none size-[170px] px-6 rounded-lg shadow-lg border-2 border-gray-300 '>
            View all current deals »
          </div>
        </Link>
      )}
    </div>
  );
});

export default Content;
