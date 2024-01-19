import React from 'react';
import { ChevronLeftCircle, ChevronRightCircle, Gift } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Feed = () => {
  return (
    <div>
      {/* Header - button function*/}
      <Carousel className='border-y-2 bg-neutral-100 dark:bg-neutral-800 py-2 px-3 space-y-2'>
        <div className='flex flex-row justify-between items-center'>
          <div>The Feed</div>
          <div className='flex flex-row space-x-2'>
            <CarouselPrevious>
              <ChevronLeftCircle />
            </CarouselPrevious>
            <CarouselNext>
              <ChevronRightCircle />
            </CarouselNext>
          </div>
        </div>

        {/* Content - add carousel*/}
        <div>
          <CarouselContent className='space-x-5'>
            <CarouselItem className='flex flex-row space-x-2 border-t border-yellow-500 h-22 w-10/12 pt-2 basis-auto'>
              <div>
                <Gift size={75} color='white' className=' bg-yellow-500 p-1' />
              </div>
              <p className='flex flex-col text-xs'>
                <span className='text-yellow-500 uppercase'>Mystery gift</span>
                Free Pokemon blabblaabbl
              </p>
            </CarouselItem>
            <CarouselItem className='flex flex-row space-x-2 border-t border-red-500 h-22 w-10/12 pt-2 basis-auto'>
              <div>
                <Gift size={75} color='white' className=' bg-red-500 p-1' />
              </div>
              <p className='flex flex-col text-xs'>
                <span className='text-red-500 uppercase'>Mystery gift</span>
                Free Pokemon blabblaabbl
              </p>
            </CarouselItem>
            <CarouselItem className='flex flex-row space-x-2 border-t border-blue-500 h-22 w-10/12 pt-2 basis-auto'>
              <div>
                <Gift size={75} color='white' className=' bg-blue-500 p-1' />
              </div>
              <p className='flex flex-col text-xs'>
                <span className='text-blue-500 uppercase'>Mystery gift</span>
                Free Pokemon blabblaabbl
              </p>
            </CarouselItem>
          </CarouselContent>

          {/* <ul>
          <li className='flex flex-row space-x-2 border-t border-yellow-500 h-22 w-10/12 pt-2'>
            <div>
              <Gift size={75} color='white' className=' bg-yellow-500 p-1' />
            </div>
            <p className='flex flex-col text-xs'>
              <span className='text-yellow-500 uppercase'>Mystery gift</span>
              Free Pokemon blabblaabbl
            </p>
          </li>
          {/* <li className='flex flex-row'>
            <div>img</div>
            <p className='flex flex-col'>
              <span className='text-yellow-500'>Mystery gift</span>
              Free Pokemon blabblaabbl
            </p>
          </li>
          <li className='flex flex-row'>
            <div>img</div>
            <p className='flex flex-col'>
              <span className='text-yellow-500'>Mystery gift</span>
              Free Pokemon blabblaabbl
            </p>
          </li> 
        </ul> */}
        </div>
      </Carousel>
    </div>
  );
};

export default Feed;
