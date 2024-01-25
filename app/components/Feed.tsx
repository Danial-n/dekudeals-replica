import React from 'react';
import {
  ChevronLeft,
  ChevronLeftCircle,
  ChevronRight,
  ChevronRightCircle,
  Gift,
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Feed = () => {
  const carouselItems = [
    {
      color: 'p-1 bg-yellow-500',
      borderColor:
        'flex flex-row space-x-2 border-t border-yellow-500 h-22 w-10/12 md:w-1/4 pt-2 basis-auto',
      textColor: 'text-yellow-500 uppercase',
      title: 'Mystery gift',
      description: 'Free Pokemon blabblaabbl',
    },
    {
      color: 'p-1 bg-blue-500',
      borderColor:
        'flex flex-row space-x-2 border-t border-blue-500 h-22 w-10/12 md:w-1/4 pt-2 basis-auto',
      textColor: 'text-blue-500 uppercase',
      title: 'Adventure gift',
      description: 'Explore new worlds blabblaabbl',
    },
    {
      color: 'p-1 bg-green-500',
      borderColor:
        'flex flex-row space-x-2 border-t border-green-500 h-22 w-10/12 md:w-1/4 pt-2 basis-auto',
      textColor: 'text-green-500 uppercase',
      title: 'Ocean gift',
      description: 'Dive into the unknown blabblaabbl',
    },
    {
      color: 'p-1 bg-red-500',
      borderColor:
        'flex flex-row space-x-2 border-t border-red-500 h-22 w-10/12 md:w-1/4 pt-2 basis-auto',
      textColor: 'text-red-500 uppercase',
      title: 'Fiery gift',
      description: 'Ignite your journey blabblaabbl',
    },
  ];
  const combinedCarouselItems = [...carouselItems, ...carouselItems];

  return (
    <Carousel className='border-y-2 2xl:border-2 bg-neutral-100 dark:bg-neutral-800 py-2 px-3 space-y-2'>
      <div className='flex flex-row justify-between items-center'>
        <div>The Feed</div>
        <div className='flex flex-row space-x-2'>
          <CarouselPrevious>
            <ChevronLeft />
          </CarouselPrevious>
          <CarouselNext>
            <ChevronRight />
          </CarouselNext>
        </div>
      </div>

      <div>
        <CarouselContent className='space-x-5'>
          {combinedCarouselItems.map((item, index) => (
            <CarouselItem key={index} className={item.borderColor}>
              <div>
                <Gift size={75} color='white' className={item.color} />
              </div>
              <p className='flex flex-col text-xs'>
                <span className={item.textColor}>{item.title}</span>
                {item.description}
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </div>
    </Carousel>
  );
};

export default Feed;
