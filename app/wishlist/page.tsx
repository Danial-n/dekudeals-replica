'use client';

import React, { useState } from 'react';
import {
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenu,
} from '@/components/ui/dropdown-menu';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp, Grid3X3, Rows3 } from 'lucide-react';
import layoutViewStore from '../data/layoutViewStore';
import sortGameStore from '../data/sortGameStore';
import Link from 'next/link';
import Wishlist from '../components/Wishlist';

const Wishpage = () => {
  // Content organise button
  const [selectedButton, setSelectedButton] = React.useState('button2');
  const handleButtonClick = (button: React.SetStateAction<string>) => {
    setSelectedButton(button);
  };

  // Filters arrow change
  const [isCollapsed, setIsCollapsed] = useState(true);
  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  // sort by list
  const sortWords = ['Name', 'Price', 'Discount'];
  const [selectedSort, setSelectedSort] = useState(sortWords[0]);
  const handleSortSelect = (word: string) => {
    sortGameStore.setSelectedSort(word);
    setSelectedSort(word);
  };
  const sortBy = sortWords.map((word, index) => (
    <DropdownMenuItem key={index} onClick={() => handleSortSelect(word)}>
      {word}
    </DropdownMenuItem>
  ));

  return (
    <div className='px-5 py-3 space-y-5 pb-12 w-screen md:w-full'>
      <Collapsible className='space-y-3'>
        {/* HEADER */}
        <div className='md:flex md:flex-row md:justify-between'>
          {/* HEADER LEFT */}
          <div className='pt-5'>
            <h2 className='text-4xl font-light'>My Wishlist</h2>
            <p>
              Share:{' '}
              <Link href='/'>
                <span>your list link.com</span>
              </Link>
            </p>
          </div>

          {/* HEADER RIGHT */}
          <div className='hidden md:flex md:flex-col md:items-end md:space-y-3'>
            <div className='md:flex md:flex-row md:items-center space-x-1'>
              {/* SORT BY */}
              <DropdownMenu>
                <DropdownMenuTrigger className='border border-neutral-200 rounded-md w-44 h-9 flex justify-center items-center text-md'>
                  Sort by: {selectedSort}
                </DropdownMenuTrigger>
                <DropdownMenuContent>{sortBy}</DropdownMenuContent>
              </DropdownMenu>

              {/* LAYOUT VIEW BTN */}
              <div className='flex'>
                <button
                  className={`h-10 w-10 border rounded-s-md flex justify-center items-center ${
                    selectedButton === 'button1'
                      ? 'bg-blue-500 text-white border-sky-500'
                      : 'bg-transparent text-black dark:text-white border-neutral-300'
                  }`}
                  onClick={() => {
                    handleButtonClick('button1');
                    layoutViewStore.handleLayout();
                  }}
                >
                  <Rows3 />
                </button>
                <button
                  className={`'h-10 w-10 border  rounded-e-md flex justify-center items-center ' ${
                    selectedButton === 'button2'
                      ? 'bg-blue-500 text-white border-sky-500'
                      : 'bg-transparent text-black dark:text-white border-neutral-300'
                  }`}
                  onClick={() => {
                    handleButtonClick('button2');
                    layoutViewStore.handleLayout();
                  }}
                >
                  <Grid3X3 />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CRITERIA MENU */}
        <div className='flex flex-col items-end space-y-2 md:hidden'>
          {/* SORT BY */}
          <DropdownMenu>
            <DropdownMenuTrigger className='border border-neutral-200 rounded-md w-44 h-9 flex justify-center items-center text-md'>
              Sort by: {selectedSort}
            </DropdownMenuTrigger>
            <DropdownMenuContent>{sortBy}</DropdownMenuContent>
          </DropdownMenu>

          <div className='flex space-x-5'>
            {/* FILTER BTN */}
            <CollapsibleTrigger
              className='border border-neutral-300 rounded-md w-20 h-10 flex justify-center items-center'
              onClick={handleToggle}
            >
              Filters
              {isCollapsed ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronUp size={16} />
              )}
            </CollapsibleTrigger>

            {/* LAYOUT VIEW BTN */}
            <div className='flex'>
              <button
                className={`h-10 w-10 border rounded-s-md flex justify-center items-center ${
                  selectedButton === 'button1'
                    ? 'bg-blue-500 text-white border-sky-500'
                    : 'bg-transparent text-black dark:text-white border-neutral-300'
                }`}
                onClick={() => {
                  handleButtonClick('button1');
                  layoutViewStore.handleLayout();
                }}
              >
                <Rows3 />
              </button>
              <button
                className={`'h-10 w-10 border  rounded-e-md flex justify-center items-center ' ${
                  selectedButton === 'button2'
                    ? 'bg-blue-500 text-white border-sky-500'
                    : 'bg-transparent text-black dark:text-white border-neutral-300'
                }`}
                onClick={() => {
                  handleButtonClick('button2');
                  layoutViewStore.handleLayout();
                }}
              >
                <Grid3X3 />
              </button>
            </div>
          </div>
        </div>

        {/* FILTER CONTENT(MOBILE) */}
        <CollapsibleContent className='flex flex-col space-y-2 w-full'>
          <div className='flex flex-col border dark:border-neutral-500 border-neutral-200 rounded-md'>
            <div className='bg-neutral-100 dark:bg-neutral-500 h-10 flex items-center p-3'>
              Type
            </div>
            <div className='flex flex-col p-3 space-y-1'>
              <div className='flex flex-row justify-between'>
                <p>Game </p>
                <p className='font-bold text-xs bg-neutral-300 rounded-md flex items-center p-1'>
                  233
                </p>
              </div>
              <div className='flex flex-row justify-between'>
                <p>DLC </p>
                <p className='font-bold text-xs bg-neutral-300 rounded-md flex items-center p-1'>
                  100
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col border border-neutral-200 rounded-md'>
            <div className='bg-neutral-100 h-10 flex items-center p-3'>
              Price
            </div>
            <div className='flex flex-col p-3 space-y-1'>
              <div className='flex flex-row justify-between'>
                <input
                  type='text'
                  className='w-10 border-2'
                  placeholder='min'
                />
                <p>to</p>
                <input
                  type='text'
                  className='w-10 border-2'
                  placeholder='max'
                />
                <button className='border-2 p-1'>{'>'}</button>
              </div>
            </div>
          </div>
          <div className='flex flex-col border border-neutral-200 rounded-md'>
            <div className='bg-neutral-100 h-10 flex items-center p-3'>
              Exclude
            </div>
            <div className='flex flex-col p-3 space-y-1'>
              <div className='flex flex-row justify-between'>
                <input type='checkbox' />
                <p>Items in your collection</p>
              </div>
              <div className='flex flex-row justify-between'>
                <input type='checkbox' />
                <p>Items in your wishlist</p>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <div className='flex space-x-5'>
        {/* FILTER CONTENT(DESKTOP) */}
        <div className='hidden md:flex flex-col space-y-2 w-1/5'>
          {/* TYPE SECT */}
          <div className='flex flex-col border dark:border-neutral-500 border-neutral-200 rounded-md'>
            <div className='bg-neutral-100 dark:bg-neutral-500 h-10 flex items-center p-3'>
              Type
            </div>
            <div className='flex flex-col p-3 space-y-1'>
              <div className='flex flex-row justify-between'>
                <p>Game </p>
                <p className='font-bold text-xs bg-neutral-300 rounded-md flex items-center p-1'>
                  233
                </p>
              </div>
              <div className='flex flex-row justify-between'>
                <p>DLC </p>
                <p className='font-bold text-xs bg-neutral-300 rounded-md flex items-center p-1'>
                  100
                </p>
              </div>
            </div>
          </div>
          {/* PRICE SECT */}
          <div className='flex flex-col border dark:border-neutral-500 border-neutral-200 rounded-md'>
            <div className='bg-neutral-100 dark:bg-neutral-500 h-10 flex items-center p-3'>
              Price
            </div>
            <div className='flex flex-col p-3 space-y-1'>
              <div className='flex flex-row justify-between'>
                <input
                  type='text'
                  className='w-14 h-8 border-2 rounded-md flex items-center'
                  placeholder='min'
                />
                <p>to</p>
                <input
                  type='text'
                  className='w-14 h-8 border-2 rounded-md flex items-center'
                  placeholder='max'
                />
                <button className='border-2 rounded-md w-7 h-8 flex items-center justify-center'>
                  {'>'}
                </button>
              </div>
            </div>
          </div>
          {/* EXCLUDE SECT */}
          <div className='flex flex-col border dark:border-neutral-500 border-neutral-200 rounded-md'>
            <div className='bg-neutral-100 dark:bg-neutral-500 h-10 flex items-center p-3'>
              Exclude
            </div>
            <div className='flex flex-col p-3 space-y-1'>
              <div className='flex flex-row space-x-3'>
                <input type='checkbox' />
                <p>Items in your collection</p>
              </div>
              <div className='flex flex-row space-x-3'>
                <input type='checkbox' />
                <p>Items in your wishlist</p>
              </div>
            </div>
          </div>
        </div>

        {/* GAME LIST */}
        {/* <Content /> */}
        <Wishlist />
      </div>
    </div>
  );
};

export default Wishpage;
