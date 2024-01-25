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
  // sort by title
  const sortTitle = (arr: { title: string; price: string; images: string }[]) =>
    [...arr].sort((a, b) => a.title.localeCompare(b.title));
  const titleGameData = sortTitle(gameData.games);

  // sort by price
  const sortPrice = (arr: { title: string; price: string; images: string }[]) =>
    [...arr].sort((a, b) => a.price.localeCompare(b.price));
  const priceGameData = sortPrice(gameData.games);

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
  const itemsPerPage = 30; //no. of item in a page
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = gameData.games.slice(itemOffset, endOffset); // item within range
  const pageCount = Math.ceil(gameData.games.length / itemsPerPage);
  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % gameData.games.length;
    setItemOffset(newOffset);
  };

  // display for home or content page
  const pathname = usePathname();
  const atHome = pathname === '/';
  const displayedGames = atHome ? titleGameData.slice(0, 10) : currentItems;

  return (
    <div className='flex flex-col space-y-5 w-full'>
      {/* PAGINATION */}
      {!hideFromHome && (
        <div className='hidden md:flex w-full space-x-3 items-center justify-end'>
          <div>
            <p>
              {itemOffset + 1}-{endOffset + 1} of {gameData.games.length + 1}
            </p>
          </div>
          <div>
            <ReactPaginate
              className='flex flex-row border border-neutral-200 rounded-md h-10 w-56 justify-between items-center divide-x-2'
              breakLabel='...'
              // next sect
              nextLabel='>'
              nextClassName='px-3 py-2 flex justify-center items-center'
              // page handler
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageClassName='pl-5 py-2 flex justify-center items-center'
              pageCount={pageCount}
              // prev sect
              previousLabel='<'
              previousClassName='pl-3 py-2 flex justify-center items-center'
              renderOnZeroPageCount={null}
            />
          </div>
        </div>
      )}

      {/* CONTENT */}
      <div
        className={`md:w-full ${
          layoutViewStore.isLayout
            ? 'w-full grid grid-cols-2 gap-x-5 gap-y-10 pb-8 md:grid-cols-6'
            : 'pb-8 space-y-5'
        }`}
      >
        <div className='md:w-full'>
          <Link
            href='/items'
            className={`${
              layoutViewStore.isLayout ? 'space-y-3' : 'flex space-x-7'
            }`}
          >
            <Image
              src='/assets/w504.jpg'
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
                Discount
              </p>
              <p
                className={`text-black dark:text-white ${
                  layoutViewStore.isLayout ? '' : 'order-3'
                }`}
              >
                <span className='line-through'>$9.99</span> $4.99{'   '}
                <span className='text-xs bg-red-500 rounded-sm px-1'>-50%</span>
              </p>
              <div>
                <span className='text-black text-xs font-bold bg-yellow-500 rounded-sm px-1'>
                  Lowest price ever
                </span>
                <p className='text-black dark:text-white text-xs '>
                  sales end January 29
                </p>
              </div>
              {!hideFromHome && (
                <DropdownMenu>
                  <DropdownMenuTrigger
                    className={`text-black dark:text-white h-10 border border-neutral-200 px-3 rounded-md flex hover:bg-neutral-400 hover:text-white items-center 
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
                      className={`text-black dark:text-white h-10 border border-neutral-200 px-3 rounded-md flex hover:bg-neutral-400 hover:text-white items-center 
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

        {/* view all box */}
        {!hideFromContent && (
          <Link href='/content'>
            <div className='flex justify-center items-center text-center font-bold resize-none size-[170px] px-6 rounded-lg shadow-lg border-2 border-gray-300 '>
              View all current deals »
            </div>
          </Link>
        )}
      </div>

      {/* PAGINATION */}
      {!hideFromHome && (
        <div className='flex w-full space-x-3 items-center justify-end'>
          <div>
            <p>
              {itemOffset + 1}-{endOffset + 1} of {gameData.games.length + 1}
            </p>
          </div>
          <div>
            <ReactPaginate
              className='flex flex-row border border-neutral-200 rounded-md h-10 w-56 justify-between items-center divide-x-2'
              breakLabel='...'
              // next sect
              nextLabel='>'
              nextClassName='px-3 py-2 flex justify-center items-center'
              // page handler
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageClassName='pl-5 py-2 flex justify-center items-center'
              pageCount={pageCount}
              // prev sect
              previousLabel='<'
              previousClassName='pl-3 py-2 flex justify-center items-center'
              renderOnZeroPageCount={null}
            />
          </div>
        </div>
      )}
    </div>
  );
});

export default Content;
