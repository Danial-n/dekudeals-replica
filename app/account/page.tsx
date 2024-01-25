import React from 'react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

const account = () => {
  // GAME TYPE LIST
  const gameTypeList = [
    'All games',
    'Digital games only',
    'Physical games only',
  ];
  const gameType = gameTypeList.map((word, index) => (
    <div className='flex flex-row space-x-2 pl-5' key={index}>
      <input type='radio' name='nsGame' />
      <p>{word}</p>
    </div>
  ));

  // GAME TYPE OPT
  const gameList = ['Nintendo Switch', 'Playstation 5', 'Xbox Series X/S'];
  const gameForm = gameList.map((word, index) => (
    <Collapsible key={index}>
      <CollapsibleTrigger className='flex flex-row space-x-2'>
        <input type='checkbox' />
        <p>{word}</p>
      </CollapsibleTrigger>
      <CollapsibleContent>{gameType}</CollapsibleContent>
    </Collapsible>
  ));

  return (
    <Collapsible className='px-5 py-3 space-y-5 pb-12'>
      <CollapsibleContent className='border border-lime-300 bg-lime-100 rounded-sm text-green-800 px-5 py-3'>
        <p>Account updated!</p>
      </CollapsibleContent>
      <div className='space-y-3'>
        <h2>My account</h2>
      </div>
      <div>
        <p className='text-2xl'>Login details</p>
        <form className='space-y-5'>
          <div className='flex flex-col space-y-2'>
            <label>Email</label>
            <input
              type='text'
              name='email'
              className='border border-neutral-200 rounded-md h-10 pl-3'
            />
          </div>
          <div className='flex flex-col space-y-2'>
            <label>
              Password{' '}
              <span className='text-sm'>
                (Must contain at least 8 characters)
              </span>
            </label>
            <input
              type='text'
              name='password'
              className='border border-neutral-200 rounded-md h-10 pl-3'
            />
          </div>
          <DropdownMenu>
            <p>Country</p>
            <DropdownMenuTrigger className='border border-neutral-200 w-full h-10 rounded-sm text-left pl-3 flex flex-row justify-between items-center'>
              <p>Brunei</p>
              <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-[344px] h-32 overflow-scroll'>
              <DropdownMenuItem>Argentina</DropdownMenuItem>
              <DropdownMenuItem>Brunei</DropdownMenuItem>
              <DropdownMenuItem>Japan</DropdownMenuItem>
              <DropdownMenuItem>United State</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className='space-y-2'>
            <p className='text-2xl'>Platforms and preferred format</p>
            <div className='flex flex-col '>{gameForm}</div>
          </div>
          <div>
            <p className='text-2xl'>Default notification price</p>
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
            <p className='text-2xl'>Email subscriptions</p>
            <div>
              <div className='flex space-x-1'>
                <input type='checkbox' />
                <p>
                  Send me an email any time there&apos;s a deal for items on my
                  wishlist
                </p>
              </div>
              <div className='flex space-x-1'>
                <input type='checkbox' />
                <p>
                  Send me an email every Friday with the best deals from that
                  week
                </p>
              </div>
            </div>
          </div>
          <div className='space-y-2'>
            <p className='text-2xl'>Hiding</p>
            <p>
              Hidden items don&apos;t appear when browsing games, on the
              homepage, or in the weekly email. View your hidden items
            </p>
            <div>
              <div className='flex space-x-1'>
                <input type='checkbox' />
                <p>Hide all of my collection items</p>
              </div>
              <div className='flex space-x-1'>
                <input type='checkbox' />
                <p>Hide all of my wishlist items</p>
              </div>
            </div>
          </div>
          <div className='space-y-3'>
            <p className='text-2xl'>Sharing</p>
            <p>Display name (Appears on your shared wishlist/collection)</p>
            <input
              type='text'
              name='displayName'
              className='border border-neutral-200 rounded-md h-10 pl-3 w-full'
            />
            <div className='flex space-x-1'>
              <input type='checkbox' />
              <p>
                Allow my wishlist to be publicly viewed at
                dekudeals.com/wishlist/qnxjnx8559
              </p>
            </div>
            <div className='flex space-x-1'>
              <input type='checkbox' />
              <p>
                Allow my collection to be publicly viewed at
                dekudeals.com/collection/qnxjnx8559
              </p>
            </div>
          </div>
          <CollapsibleTrigger className='rounded-sm bg-green-500 text-white  w-20 h-9'>
            Update!
          </CollapsibleTrigger>
        </form>
        <div className='py-14'>
          <Link href='/account/delete' className='text-red-500 text-sm'>
            Click here to delete your account
          </Link>
        </div>
      </div>
    </Collapsible>
  );
};

export default account;
