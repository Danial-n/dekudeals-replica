import React from 'react';
import selectedGameStore from '../data/selectedGameStore';
import { observer } from 'mobx-react';

const ItemDetails = observer(() => {
  const { price } = selectedGameStore.selectedGame;

  return (
    <div className='flex flex-col space-y-3 '>
      <p className='text-3xl'>Details</p>
      <p>Demo Available</p>
      <p>MSRP: {price}</p>
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
      </div>
    </div>
  );
});

export default ItemDetails;
