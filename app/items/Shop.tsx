import { observer } from 'mobx-react';
import Link from 'next/link';
import React from 'react';
import selectedGameStore from '../data/selectedGameStore';
import currencyStore from '../data/currencyStore';

const Shop = observer(() => {
  const { price } = selectedGameStore.selectedGame;

  // CURRENCY SELECTION
  const newPrice = currencyStore.selectedCurrency;

  return (
    <div>
      <p className='text-2xl'>Current prices</p>
      <div className='bg-sky-200 p-3 flex flex-row justify-between text-xs'>
        <div>Nintendo eShop</div>
        <div>Digital</div>
        <div>
          <div className='bg-sky-600 text-white py-3 px-5 rounded-sm'>
            <Link href='/' className='text-white'>
              {(price as any)[newPrice]}
            </Link>
          </div>
        </div>
      </div>
      <div className=' p-3 flex flex-row justify-between text-xs'>
        <div>amazon.com</div>
        <div>Digital</div>
        <div>
          <div className='border border-neutral-600 py-3 px-5 rounded-sm'>
            <Link href='/' className='text-neutral-600'>
              {(price as any)[newPrice]}
            </Link>
          </div>
        </div>
      </div>
      <div className=' p-3 flex flex-row justify-between text-xs border-t border-neutral-200'>
        <div>Humble Store</div>
        <div>Digital</div>
        <div>
          <div className='border border-neutral-600 py-3 px-5 rounded-sm'>
            <Link href='/' className='text-neutral-600'>
              {(price as any)[newPrice]}
            </Link>
          </div>
        </div>
      </div>
      <p className='text-sm border-b'>
        Available on{' '}
        <Link href='/' className='text-sky-500'>
          other platforms
        </Link>
      </p>
    </div>
  );
});

export default Shop;
