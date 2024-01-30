'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bell, ChevronDown } from 'lucide-react';
import Shop from './Shop';
import PriceHistory from './PriceHistory';
import DescriptionSect from './DescriptionSect';
import ItemDetails from './ItemDetails';
import selectedGameStore from '../data/selectedGameStore';
import { observer } from 'mobx-react';
import gameData from '../data/gameList.json';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import layoutViewStore from '../data/layoutViewStore';

const items = observer(() => {
  // get title and img
  const { title, images } = selectedGameStore.selectedGame;
  console.log(`from item page = ${title}`);

  // get selected item - to add in wishlist/collection
  const itemHandler = (id: number) => {
    const selectedGame = gameData.games.find((game) => game.id === id);
    if (selectedGame) {
      selectedGameStore.updateSelectedGame(selectedGame);
      console.log(selectedGame);
    } else {
      console.error(`No game found with id ${id}`);
    }
  };

  return (
    <div className='px-5 py-3 w-screen pb-20'>
      {/* TITLE - HIDDEN IN MOBILE */}
      <div className='hidden md:block w-full'>
        <h1>{title}</h1>
      </div>
      <div className='space-y-5 pb-12 md:flex w-full md:space-x-5'>
        {/* img&title(mobile) // img&detail(desktop) */}
        <div className='flex space-x-3 md:flex-col md:w-1/3'>
          <div>
            <Image
              src={images}
              width={96}
              height={96}
              alt='img'
              className='rounded-lg shadow-xl border-2 border-gray-300 md:size-64'
            />
          </div>
          <div className='flex items-center md:hidden'>
            <p className='text-5xl font-thin'>{title}</p>
          </div>

          {/* DETAILS - HIDDEN IN MOBILE */}
          <div className='hidden md:block'>
            <ItemDetails />
          </div>
        </div>

        <div className='md:w-2/4'>
          {/* ADD TO BTN */}
          <div className='flex flex-col space-y-3'>
            <div className='flex flex-row-reverse '>
              <DropdownMenu>
                <DropdownMenuTrigger className='border border-neutral-500 rounded-md w-44 h-10 flex justify-center items-center hover:bg-neutral-500 hover:text-white'>
                  Add to <ChevronDown />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Add to wishlist</DropdownMenuItem>
                  <DropdownMenuItem>Add to collection</DropdownMenuItem>
                  <DropdownMenuItem>Rating</DropdownMenuItem>
                  <DropdownMenuItem>Hide</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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

      {/* OTHERS REC */}
      <div>
        <h3>Other users also liked...</h3>
        <div className='md:flex justify-start md:space-x-5 grid grid-cols-2'>
          {gameData.games.slice(0, 6).map((game, index) => (
            <div
              key={index}
              className=' md:flex'
              onClick={() => itemHandler(game.id)}
            >
              <Link href='/items'>
                <Image
                  src={game.images}
                  width={160}
                  height={160}
                  alt='img'
                  className='rounded-lg shadow-xl border-2 border-gray-300'
                />
                <div className='md:w-full flex flex-col md:justify-between text-left'>
                  <p>{game.title}</p>
                  <p className='text-black dark:text-white'>{game.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default items;
