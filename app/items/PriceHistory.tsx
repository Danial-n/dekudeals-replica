import React from 'react';

const PriceHistory = () => {
  return (
    <div className='flex flex-col space-y-1 pb-14 border-b w-full'>
      <p className='text-2xl '>Price history</p>
      <div className=' text-center w-1/2 space-y-1'>
        <p className='font-bold border-b border-neutral-300'>All time low</p>
        <div className='flex flex-row text-sm '>
          <div className='flex flex-col'>
            <p>Digital</p>
            <p>
              BND$1.99 <span className='text-sm text-neutral-500'>(-20%)</span>
            </p>
          </div>
          <div>
            <p>Physical</p>
            <p>
              BND$1.99 <span className='text-sm text-neutral-500'>(-20%)</span>
            </p>
          </div>
        </div>
      </div>
      <div className='border h-52 flex justify-center items-center'>A GRID</div>
    </div>
  );
};

export default PriceHistory;
