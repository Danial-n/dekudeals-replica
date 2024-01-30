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
  Sun,
  Moon,
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
  // COUNTRY LIST
  const ctryList = [
    { name: 'Brunei', code: 'BN' },
    { name: 'Japan', code: 'JP' },
    { name: 'United States', code: 'US' },
  ];
  const [selectedCountry, setSelectedCountry] = useState(ctryList[0].code);
  const handleCountrySelect = (country: React.SetStateAction<string>) => {
    setSelectedCountry(country);
  };
  const ctry = ctryList.map((country, index) => (
    <DropdownMenuItem
      key={index}
      onClick={() => handleCountrySelect(country.code)}
    >
      {country.name}
    </DropdownMenuItem>
  ));

  // DarkMode
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <div className='w-screen flex flex-col'>
      {/* NAV 1 */}
      <div className='bg-neutral-300 dark:bg-neutral-800 2xl:flex 2xl:justify-center'>
        <nav className='flex flex-row h-[50px] items-center justify-between px-3 2xl:w-[1080px]'>
          {/* NAV LEFT */}
          <ul className='flex items-center h-full'>
            <li className='pr-5'>
              <Link href='/'>
                <Image src={logo} alt='logo' className='h-12 w-32' />
              </Link>
            </li>

            {/* REGION SELECTION - HIDDEN IN MOBILE */}
            <li
              data-dropdown-toggle='dropdown'
              className='hidden md:block h-full'
            >
              <DropdownMenu>
                <DropdownMenuTrigger className='flex flex-row space-x-1 hover:bg-zinc-700 hover:text-white h-full items-center px-3'>
                  <Globe2 />
                  <p>{selectedCountry}</p>
                </DropdownMenuTrigger>
                <DropdownMenuContent>{ctry}</DropdownMenuContent>
              </DropdownMenu>
            </li>
            {/* CONSOLE SELECTION - HIDDEN IN MOBILE */}
            <li className='hidden md:block h-full'>
              <Link
                href='/consoles'
                className='flex hover:bg-zinc-700 hover:text-white h-full items-center px-3'
              >
                <Image
                  src='/assets/switch_logo.svg'
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
                  src='/assets/ps_logo.svg'
                  width={34}
                  height={24}
                  alt='img'
                  className={`${
                    consoleStore.isPlay ? 'opacity-100' : 'opacity-30'
                  }`}
                />
                <Image
                  src='/assets/xbox_logo.svg'
                  width={24}
                  height={24}
                  alt='img'
                  className={`${
                    consoleStore.isXbox ? 'opacity-100' : 'opacity-30'
                  }`}
                />
              </Link>
            </li>
            {/* THEME SELECTION - HIDDEN IN MOBILE */}
            <li className='hidden md:block h-full'>
              <div
                className='hover:bg-zinc-700 hover:text-white h-full flex items-center px-3'
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'light' ? (
                  <Moon />
                ) : (
                  <Sun color='yellow' fill='yellow' />
                )}
              </div>
            </li>
          </ul>

          {/* NAV RIGHT */}
          <ul className='flex flex-row h-full items-center'>
            <li className='hover:bg-zinc-700 hover:text-white h-full flex items-center px-3'>
              <Link href='/signup' className='text-black dark:text-white '>
                Sign Up
              </Link>
            </li>
            <li className='hover:bg-zinc-700 hover:text-white h-full flex items-center px-3'>
              <Link href='/login' className='text-black dark:text-white'>
                Log in
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* NAV 2 */}
      {/* HIDDEN IN DESKTOP */}
      <nav className='md:hidden flex flex-row bg-neutral-200 dark:bg-neutral-900 items-center justify-between h-[50px] px-3'>
        {/* NAV LEFT */}
        <ul className='flex flex-row h-full'>
          <li data-dropdown-toggle='dropdown' className='h-full'>
            <DropdownMenu>
              <DropdownMenuTrigger className='flex flex-row space-x-1 hover:bg-zinc-700 hover:text-white h-full items-center px-3'>
                <Globe2 />
                <p>{selectedCountry}</p>
              </DropdownMenuTrigger>
              <DropdownMenuContent>{ctry}</DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li className='h-full'>
            <Link
              href='/consoles'
              className='flex hover:bg-zinc-700 hover:text-white h-full items-center px-3'
            >
              <Image
                src='/assets/switch_logo.svg'
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
                src='/assets/ps_logo.svg'
                width={34}
                height={24}
                alt='img'
                className={`${
                  consoleStore.isPlay ? 'opacity-100' : 'opacity-30'
                }`}
              />
              <Image
                src='/assets/xbox_logo.svg'
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
            <div
              className='hover:bg-zinc-700 hover:text-white h-full flex items-center px-3'
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'light' ? (
                <Moon />
              ) : (
                <Sun color='yellow' fill='yellow' />
              )}
            </div>
          </li>
        </ul>
      </nav>

      {/* NAV 3(MOBILE) & NAV 2(DESKTOP) */}
      <Collapsible className='bg-neutral-100 dark:bg-neutral-950 2xl:flex 2xl:justify-center'>
        <nav className='flex flex-row items-center justify-between space-x-5 h-[50px] px-3 2xl:w-[1080px]'>
          {/* NAV LEFT */}
          <ul className='flex flex-row h-full'>
            {/* Browse */}
            <li className='h-full'>
              <DropdownMenu>
                <DropdownMenuTrigger className='flex flex-row hover:bg-zinc-700 hover:text-white h-full items-center px-3'>
                  Browse <ChevronDown />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link
                      href='/content'
                      className='text-black dark:text-white'
                    >
                      Games
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href='/content'
                      className='text-black dark:text-white'
                    >
                      DLC
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link
                      href='/content'
                      className='text-black dark:text-white'
                    >
                      Hottest Deal
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href='/content'
                      className='text-black dark:text-white'
                    >
                      Recent Price Drop
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href='/content'
                      className='text-black dark:text-white'
                    >
                      eShop Sale
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href='/content'
                      className='text-black dark:text-white'
                    >
                      Subscription
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>

            {/* My List */}
            <li className=''>
              <DropdownMenu>
                <DropdownMenuTrigger className='flex flex-row hover:bg-zinc-700 hover:text-white h-full items-center px-3'>
                  My Lists <ChevronDown />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link
                      href='/wishlist'
                      className='text-black dark:text-white'
                    >
                      Wishlist
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href='/content'
                      className='text-black dark:text-white'
                    >
                      Collection
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          </ul>

          {/* NAV RIGHT */}
          <ul className='h-full'>
            <li className='h-full'>
              <CollapsibleTrigger className='flex flex-row md:hidden hover:bg-zinc-700 hover:text-white h-full items-center px-3'>
                Search <Search />
              </CollapsibleTrigger>
              <form className='hidden md:visible md:flex flex-row px-2 py-1'>
                <Input
                  type='search'
                  placeholder='Search'
                  className='border-solid border-2 w-[360px] bg-white text-black'
                />
                <button className='bg-sky-500 w-12 rounded-e-md flex justify-center items-center'>
                  <Search color='white' />
                </button>
              </form>
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
