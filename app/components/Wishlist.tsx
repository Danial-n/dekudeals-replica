'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gameData from '../data/gameList.json';
import { observer } from 'mobx-react';
import selectedGameStore from '../data/selectedGameStore';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';

const Wishlist = () => {
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

  const { title } = selectedGameStore.selectedGame;

  return (
    <div className='w-screen'>
      <div className='sm:flex  justify-start sm:space-x-5 grid grid-cols-2'>
        {gameData.wishlist.map((game, index) => (
          <div
            key={index}
            className=' sm:flex sm:flex-col space-y-3'
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
              <div className='sm:w-full flex flex-col sm:justify-between text-left'>
                <p>{game.title}</p>
                <p className='text-black dark:text-white'>{game.price}</p>
              </div>
            </Link>
            <div className='flex flex-col border-x border-yellow-500 rounded-sm'>
              <button className=' border-t rounded-sm p-1 border-yellow-500 hover:bg-yellow-500 hover:text-white'>
                On Wishlist
              </button>
              <Dialog>
                <DialogTrigger
                  className=' border-b rounded-sm p-1 border-yellow-500 text-xs text-sky-500'
                  onClick={() => itemHandler(game.id)}
                >
                  {'(edit details)'}
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader className='border-b p-3'>
                    <h3>{title}</h3>
                  </DialogHeader>
                  <div>
                    <p>Desire price</p>
                    <div>
                      <div className='flex space-x-1'>
                        <input type='radio' name='notif' />
                        <p>Any significant sale</p>
                      </div>
                      <div className='flex space-x-1'>
                        <input type='radio' name='notif' />
                        <p>All time low</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p>Desire price</p>
                    <div>
                      <div className='flex space-x-1'>
                        <input type='checkbox' name='notif' />
                        <p>Switch</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p>Notes</p>
                    <textarea className='border-2 rounded-sm w-full' />
                    <div className='flex space-x-1'>
                      <input type='checkbox' name='notif' />
                      <p>Keep note private</p>
                    </div>
                  </div>
                  <div>
                    <p>Privacy</p>
                    <div className='flex space-x-1'>
                      <input type='checkbox' name='notif' />
                      <p>Hide item in shared wishlist</p>
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose className='rounded-sm bg-neutral-500 text-white px-3 py-2'>
                      Close
                    </DialogClose>
                    <button className='rounded-sm bg-sky-500 text-white px-3 py-2'>
                      Save
                    </button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger className='text-black dark:text-white h-10 border border-neutral-200 px-3 rounded-md flex hover:bg-neutral-400 hover:text-white items-center '>
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
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
