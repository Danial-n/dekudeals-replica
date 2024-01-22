'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Content from '../components/Content';
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

const content = () => {
  // Content organise button
  const [selectedButton, setSelectedButton] = useState('button2');
  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  // Filters arrow change
  const [isCollapsed, setIsCollapsed] = useState(true);
  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  // sort by list
  const sortWords = ['Time', 'Price', 'Discount'];
  const sortBy = sortWords.map((word, index) => (
    <DropdownMenuItem key={index}>{word}</DropdownMenuItem>
  ));

  return (
    <div className='px-5 py-3 space-y-5 pb-12 w-full'>
      <Collapsible className='space-y-3'>
        {/* HEADER */}
        <div className='md:flex md:flex-row md:justify-between'>
          {/* HEADER LEFT */}
          <div className='pt-5'>
            <p className='text-4xl font-light'>Recent Price Drops</p>
            <p>The freshest discounts</p>
          </div>

          {/* HEADER RIGHT */}
          <div className='hidden md:flex md:flex-col md:items-end md:space-y-3'>
            <div className='md:flex md:flex-row md:items-center space-x-1'>
              {/* SORT BY */}
              <DropdownMenu>
                <DropdownMenuTrigger className='border border-neutral-200 rounded-md w-44 h-9 flex justify-center items-center text-sm'>
                  Sort by: Sale start time
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
            {/* PAGINATION */}
            <div className='flex flex-col items-end space-y-3'>
              <nav className='flex flex-row items-center space-x-3'>
                <p>1-36 of 240</p>
                <ul className='flex flex-row border border-neutral-200 rounded-md'>
                  <li className='border-l px-3 py-2'>{'<'}</li>
                  <li className='border-l px-3 py-2'>1</li>
                  <li className='border-l px-3 py-2'>2</li>
                  <li className='border-l px-3 py-2'>...</li>
                  <li className='border-l px-3 py-2'>9</li>
                  <li className='border-l px-3 py-2'>{'>'}</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {/* CRITERIA MENU */}
        <div className='flex flex-col items-end space-y-2 md:hidden'>
          {/* SORT BY */}
          <DropdownMenu>
            <DropdownMenuTrigger className='border border-neutral-200 rounded-md w-44 h-9 flex justify-center items-center text-sm'>
              Sort by: Sale start time
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

        {/* FILTER CONTENT */}
        <CollapsibleContent className='flex flex-col space-y-2 w-full'>
          <div className='flex flex-col border border-neutral-200 rounded-md'>
            <div className='bg-neutral-100 h-10 flex items-center p-3'>
              Discount
            </div>
            <div className='flex flex-col p-3 space-y-1'>
              <div className='flex flex-row justify-between'>
                <p>Currently </p>
                <p className='font-bold text-xs bg-neutral-300 rounded-md flex items-center p-1'>
                  100
                </p>
              </div>
              <div className='flex flex-row justify-between'>
                <p>Currently </p>
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
                <p>Currently </p>
                <p className='font-bold text-xs bg-neutral-300 rounded-md flex items-center p-1'>
                  100
                </p>
              </div>
              <div className='flex flex-row justify-between'>
                <p>Currently </p>
                <p className='font-bold text-xs bg-neutral-300 rounded-md flex items-center p-1'>
                  100
                </p>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <div className='flex space-x-5'>
        {/* FILTER CONTENT */}
        <div className='hidden md:flex flex-col space-y-2 w-1/5'>
          <div className='flex flex-col border border-neutral-200 rounded-md'>
            <div className='bg-neutral-100 h-10 flex items-center p-3'>
              Discount
            </div>
            <div className='flex flex-col p-3 space-y-1'>
              <div className='flex flex-row justify-between'>
                <p>Currently </p>
                <p className='font-bold text-xs bg-neutral-300 rounded-md flex items-center p-1'>
                  100
                </p>
              </div>
              <div className='flex flex-row justify-between'>
                <p>Currently </p>
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
                <p>Currently </p>
                <p className='font-bold text-xs bg-neutral-300 rounded-md flex items-center p-1'>
                  100
                </p>
              </div>
              <div className='flex flex-row justify-between'>
                <p>Currently </p>
                <p className='font-bold text-xs bg-neutral-300 rounded-md flex items-center p-1'>
                  100
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* GAME LIST */}
        <Content />
      </div>

      {/* PAGINATION */}
      <div className='flex flex-col items-end space-y-3'>
        <nav className='flex flex-row items-center space-x-3'>
          <p>1-36 of 240</p>
          <ul className='flex flex-row border border-neutral-200 rounded-md'>
            <li className='border-l px-3 py-2'>{'<'}</li>
            <li className='border-l px-3 py-2'>1</li>
            <li className='border-l px-3 py-2'>2</li>
            <li className='border-l px-3 py-2'>...</li>
            <li className='border-l px-3 py-2'>9</li>
            <li className='border-l px-3 py-2'>{'>'}</li>
          </ul>
        </nav>
        <Link href='/'>Show all on one page</Link>
      </div>
    </div>
  );
};

export default content;
