'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo.svg';
import {
  Globe2,
  Search,
  SunMoon,
  ChevronDown,
  ChevronsRight,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Input } from '@/components/ui/input';
import consoleStore from '../data/consoleStore';
import { observer } from 'mobx-react';

const Navbar = observer(() => {
  // DarkMode
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  // COUNTRY LIST
  const ctryList = ['Brunei', 'Japan', 'United State'];
  const ctry = ctryList.map((country, index) => (
    <DropdownMenuItem key={index}>{country}</DropdownMenuItem>
  ));

  return (
    <div className='w-screen flex flex-col'>
      {/* NAV 1 */}
      <div className='bg-neutral-300 dark:bg-neutral-800 2xl:flex 2xl:justify-center'>
        <nav className='flex flex-row h-[50px] items-center justify-between px-3 2xl:w-[1080px]'>
          {/* NAV LEFT */}
          <ul className='flex space-x-5 items-center'>
            <li>
              <Link href='/'>
                <Image src={logo} alt='logo' className='h-10 w-24  ' />
              </Link>
            </li>

            {/* HIDDEN IN MOBILE */}
            <li data-dropdown-toggle='dropdown' className='hidden md:block'>
              <DropdownMenu>
                <DropdownMenuTrigger className='flex flex-row space-x-1'>
                  <Globe2 />
                  <p>BN</p>
                </DropdownMenuTrigger>
                <DropdownMenuContent>{ctry}</DropdownMenuContent>
              </DropdownMenu>
            </li>
            {/* HIDDEN IN MOBILE */}
            <li className='hidden md:block'>
              <Link href='/consoles' className='flex'>
                <Image
                  src='/assets/icons8-n-16.png'
                  width={24}
                  height={24}
                  alt='img'
                  className={`${
                    consoleStore.isNintendo
                      ? 'opacity-100 dark:-white'
                      : 'opacity-30 dark:fill-white'
                  }`}
                />
                <Image
                  src='/assets/icons8-p-16.png'
                  width={24}
                  height={24}
                  alt='img'
                  className={`${
                    consoleStore.isPlay ? 'opacity-100' : 'opacity-30'
                  }`}
                />
                <Image
                  src='/assets/icons8-x-16.png'
                  width={24}
                  height={24}
                  alt='img'
                  className={`${
                    consoleStore.isXbox ? 'opacity-100' : 'opacity-30'
                  }`}
                />
              </Link>
            </li>
            {/* HIDDEN IN MOBILE */}
            <li className='hidden md:block'>
              <SunMoon
                className={`bg-transparent dark:bg-[#212933]`}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'light' ? 'Dark' : 'Light'}
              </SunMoon>
            </li>
          </ul>

          {/* NAV RIGHT */}
          <ul className='flex flex-row space-x-3'>
            <li>
              <Link href='/signup' className='text-black dark:text-white'>
                Sign Up
              </Link>
            </li>
            <Link href='/login' className='text-black dark:text-white'>
              Log in
            </Link>
          </ul>
        </nav>
      </div>

      {/* NAV 2 */}
      {/* HIDDEN IN DESKTOP */}
      <nav className='md:hidden flex flex-row bg-neutral-200 dark:bg-neutral-900 items-center justify-between space-x-5 h-[50px] px-3'>
        {/* NAV LEFT */}
        <ul className='flex flex-row space-x-3'>
          <li data-dropdown-toggle='dropdown'>
            <DropdownMenu>
              <DropdownMenuTrigger className='flex flex-row space-x-1'>
                <Globe2 />
                <p>BN</p>
              </DropdownMenuTrigger>
              <DropdownMenuContent>{ctry}</DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li>
            <Link href='/consoles' className='flex'>
              <Image
                src='/assets/icons8-n-16.png'
                width={24}
                height={24}
                alt='img'
                className={`${
                  consoleStore.isNintendo
                    ? 'opacity-100 dark:-white'
                    : 'opacity-30 dark:fill-white'
                }`}
              />
              <Image
                src='/assets/icons8-p-16.png'
                width={24}
                height={24}
                alt='img'
                className={`${
                  consoleStore.isPlay ? 'opacity-100' : 'opacity-30'
                }`}
              />
              <Image
                src='/assets/icons8-x-16.png'
                width={24}
                height={24}
                alt='img'
                className={`${
                  consoleStore.isXbox ? 'opacity-100' : 'opacity-30'
                }`}
              />
            </Link>
          </li>
        </ul>
        {/* NAV RIGHT */}
        <ul>
          <li>
            <SunMoon
              className={`bg-slate-200 dark:bg-[#212933]`}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'light' ? 'Dark' : 'Light'}
            </SunMoon>
          </li>
        </ul>
      </nav>

      {/* NAV 3 */}
      <Collapsible className='bg-neutral-100 dark:bg-neutral-950 2xl:flex 2xl:justify-center'>
        <nav className='flex flex-row items-center justify-between space-x-5 h-[50px] px-3 2xl:w-[1080px]'>
          {/* NAV LEFT */}
          <ul className='flex flex-row space-x-3'>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className='flex flex-row'>
                  Browse <ChevronDown />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Games</DropdownMenuItem>
                  <DropdownMenuItem>DLC</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Hottest Deal</DropdownMenuItem>
                  <DropdownMenuItem>Recent Price Drop</DropdownMenuItem>
                  <DropdownMenuItem>eShop Sale</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>

            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className='flex flex-row'>
                  My Lists <ChevronDown />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Wishlist</DropdownMenuItem>
                  <DropdownMenuItem>Collection</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          </ul>

          {/* NAV RIGHT */}
          <ul>
            <li>
              <CollapsibleTrigger className='flex flex-row'>
                Search <Search />
              </CollapsibleTrigger>
            </li>
          </ul>
        </nav>

        {/* SEARCH BAR */}
        <CollapsibleContent>
          <form className='flex flex-row px-2 py-1 '>
            <Input
              type='search'
              placeholder='Search'
              className='border-solid border-2  border-sky-500'
            />
            <button className='bg-sky-500 w-12 rounded-e-md flex justify-center items-center'>
              <ChevronsRight color='white' />
            </button>
          </form>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
});

export default Navbar;