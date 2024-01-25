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

const signup = () => {
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
    <div className='px-5 py-3 space-y-5 pb-12'>
      <div className='space-y-3'>
        <h1>Sign Up</h1>
        <p>
          Already have an account? <Link href='/login'>Log in</Link>
        </p>
      </div>
      <div>
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
              type='password'
              name='password'
              className='border border-neutral-200 rounded-md h-10 pl-3'
            />
          </div>
          <DropdownMenu>
            <p>
              Country{' '}
              <span className='text-sm'>
                (We&apos;ll only notify you about deals available in your
                country)
              </span>
            </p>
            <DropdownMenuTrigger className='border border-neutral-200 w-full h-10 rounded-sm text-left pl-3 flex flex-row justify-between items-center'>
              <p>Brunei</p>
              <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-[344px]'>
              <DropdownMenuItem>Argentina</DropdownMenuItem>
              <DropdownMenuItem>Brunei</DropdownMenuItem>
              <DropdownMenuItem>Japan</DropdownMenuItem>
              <DropdownMenuItem>United State</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className='space-y-2'>
            <p className='text-2xl'>Which consoles do you own?</p>
            <p>And what format do you prefer your games?</p>
            <div className='flex flex-col '>{gameForm}</div>
          </div>
          <div className='space-y-2'>
            <p className='text-2xl'>Emails</p>
            <div className='flex space-x-3'>
              <input type='checkbox' />
              <p className='pr-5'>
                Send me an email every Friday with the best deals from that week
              </p>
            </div>
          </div>
          <div>
            <Link href='/account'>
              <button className='rounded-sm bg-green-500 text-white  w-20 h-9'>
                Sign up!
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default signup;
