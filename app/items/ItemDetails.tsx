import React from 'react';
import selectedGameStore from '../data/selectedGameStore';
import { observer } from 'mobx-react';
import { EyeOff } from 'lucide-react';
import Link from 'next/link';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import currencyStore from '../data/currencyStore';

const ItemDetails = observer(() => {
  const { price } = selectedGameStore.selectedGame;

  // CURRENCY SELECTION
  const newPrice = currencyStore.selectedCurrency;

  return (
    <div className='flex flex-col space-y-3 '>
      <p className='text-3xl'>Details</p>
      <p>Demo Available</p>
      <p>MSRP: {(price as any)[newPrice]}</p>
      <p>Released: February 15, 2020</p>
      <p>Genre: Action, Platformer</p>
      <p>Developer: Matt Makes Games</p>
      <p>Publisher: Matt Makes Games</p>
      <p>Download size: 1.5GB</p>
      <p>
        Metacritic:{' '}
        <span className='bg-lime-500 text-white p-1 rounded-sm'>92</span>{' '}
        <span className='text-lime-500'>8.6</span>
      </p>
      <div>
        <p className='underline'>How Long To Beat:</p>
        <ul className='list-disc pl-5'>
          <li> Main Story: 62½ hours</li>
          <li> Main + Extra: 102 hours</li>
          <li> Completionist: 170 hours</li>
        </ul>
      </div>
      <p>Play modes: TV, Tabletop, Handheld</p>
      <p>
        Languages: Japanese, English, Spanish, French, German, Italian, Korean,
        Chinese (Simplified), Chinese (Traditional)
      </p>
      <p>Platforms: Nintendo Switch</p>
      <button className='border rounded-sm flex justify-start items-center w-32 h-10 pl-3 space-x-1 hover:bg-neutral-500 hover:text-white'>
        <EyeOff size={20} />
        <p>Hide</p>
      </button>

      <Dialog>
        <DialogTrigger className='text-sky-500 flex'>
          Report an error on this page
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <h3>Report an error on this page</h3>
          </DialogHeader>
          <p>Details</p>
          <textarea
            placeholder='Example: The release date is wrong'
            className='border-2 h-[136px] p-1'
          />
          <p className='text-sm text-neutral-500'>
            Feel free to be brief. Basic info about the page is automatically
            recorded with your submission.
          </p>
          <DialogFooter>
            <DialogClose className='rounded-sm bg-sky-500 hover:bg-sky-700 text-white px-3 py-2'>
              Submit
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
});

export default ItemDetails;
