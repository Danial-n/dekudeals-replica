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
  const carouselItems = [
    {
      color: 'yellow',
      borderColor: 'yellow',
      textColor: 'yellow',
      title: 'Mystery gift',
      description: 'Free Pokemon blabblaabbl',
    },
    {
      color: 'green',
      borderColor: 'green',
      textColor: 'green',
      title: 'Adventure gift',
      description: 'Explore new worlds blabblaabbl',
    },
    {
      color: 'blue',
      borderColor: 'blue',
      textColor: 'blue',
      title: 'Ocean gift',
      description: 'Dive into the unknown blabblaabbl',
    },
    {
      color: 'red',
      borderColor: 'red',
      textColor: 'red',
      title: 'Fiery gift',
      description: 'Ignite your journey blabblaabbl',
    },
  ];
  const combinedCarouselItems = [...carouselItems, ...carouselItems];

  return (
    <div>
      <Carousel className='border-y-2 bg-neutral-100 dark:bg-neutral-800 py-2 px-3 space-y-2'>
        {/* Header */}
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

        {/* Content */}
        <div>
          <CarouselContent className='space-x-5'>
            {combinedCarouselItems.map((item, index) => (
              <CarouselItem
                key={index}
                className={`flex flex-row space-x-2 border-t border-${item.borderColor}-500 h-22 w-10/12 md:w-1/4 pt-2 basis-auto`}
              >
                <div>
                  <Gift
                    size={75}
                    color='white'
                    className={`p-1 bg-${item.color}-500`}
                  />
                </div>
                <p className='flex flex-col text-xs'>
                  <span className={`text-${item.textColor}-500 uppercase`}>
                    {item.title}
                  </span>
                  {item.description}
                </p>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
    </div>
  );
};

export default Feed;
