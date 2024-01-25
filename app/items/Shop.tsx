import Link from 'next/link';
import React from 'react';

const Shop = () => {
  return (
    <div>
      <p className='text-2xl'>Current prices</p>
      <div className='bg-sky-200 p-3 flex flex-row justify-between text-xs'>
        <div>Nintendo eShop</div>
        <div>Digital</div>
        <div>
          <div className='bg-sky-600 text-white py-3 px-5 rounded-sm'>
            <Link href='/' className='text-white'>
              BND$3.00
            </Link>
          </div>
        </div>
      </div>
      <div className=' p-3 flex flex-row justify-between text-xs'>
        <div>amazon.com</div>
        <div>Digital</div>
        <div>
          <div className='bg-sky-600 text-white py-3 px-5 rounded-sm'>
            <Link href='/' className='text-white'>
              BND$3.00
            </Link>
          </div>
        </div>
      </div>
      <div className=' p-3 flex flex-row justify-between text-xs border-t border-neutral-200'>
        <div>amazon.com</div>
        <div>Digital</div>
        <div>
          <div className='bg-sky-600 text-white py-3 px-5 rounded-sm'>
            <Link href='/' className='text-white'>
              BND$3.00
            </Link>
          </div>
        </div>
      </div>
      <p>
        Available on{' '}
        <Link href='/' className='text-sky-500'>
          other platforms
        </Link>
      </p>
    </div>
  );
};

export default Shop;
