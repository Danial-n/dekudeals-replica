import React from 'react';
import Image from 'next/image';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

const DescriptionSect = () => {
  return (
    <div className='text-3xl space-y-5'>
      {/* DESCRIPTION */}
      <Collapsible className='border-b pb-5'>
        <CollapsibleTrigger className='w-full flex justify-start'>
          Description
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className='text-base pt-5'>
            Sint consectetur nisi exercitation nostrud minim ut nulla. Aute enim
            voluptate qui do commodo qui ex consectetur exercitation officia
            mollit qui dolore. Sit id ea et sint deserunt consectetur nostrud
            Lorem tempor. Esse est exercitation aliqua deserunt nostrud nulla
            nostrud voluptate duis. Cillum cupidatat ad laborum consequat in
            nostrud deserunt voluptate aliquip deserunt. Consequat qui veniam
            quis et occaecat et enim officia eiusmod esse in excepteur. Dolor
            ipsum dolor ullamco exercitation laboris cupidatat veniam Lorem
            exercitation elit ut. Sunt nostrud tempor qui voluptate fugiat. Est
            anim anim enim aliquip voluptate aute nisi deserunt qui sit est. Et
            cupidatat consequat qui nisi occaecat quis ea. Est culpa nostrud
            nostrud nisi veniam cupidatat officia. Ex eiusmod commodo esse
            incididunt cupidatat aute do et dolor labore non est. Consectetur
            pariatur ex aliqua incididunt elit aute anim nisi. Quis nulla sint
            pariatur dolore non elit ea consectetur sint fugiat est cupidatat.
            Ullamco nisi non mollit dolore tempor. Ipsum tempor enim aliqua duis
            sit qui.
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* SCREENSHOT */}
      <Collapsible className='border-b pb-5'>
        <CollapsibleTrigger className='w-full flex justify-start'>
          Screenshots
        </CollapsibleTrigger>
        <CollapsibleContent className='pt-5'>
          <div className='flex flex-col items-center'>
            <Image
              src='/assets/w500.jpg'
              width={240}
              height={96}
              alt='img'
              className='rounded-lg shadow-xl border-2 border-gray-300 object-fill'
            />
            <Image
              src='/assets/w500.jpg'
              width={240}
              height={96}
              alt='img'
              className='rounded-lg shadow-xl border-2 border-gray-300'
            />
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* DLC */}
      <Collapsible className='border-b pb-5'>
        <CollapsibleTrigger className='w-full flex justify-start'>
          DLC
        </CollapsibleTrigger>
        <CollapsibleContent className='pt-5'>
          <div className='flex text-base space-x-5'>
            <Image
              src='/assets/w500.jpg'
              width={142}
              height={142}
              alt='img'
              className=''
            />
            <p>DLC 1 VOL 1</p>
            <p>BND$1.99</p>
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* INCLUDED IN */}
      <Collapsible className='border-b pb-5'>
        <CollapsibleTrigger className='w-full flex justify-start'>
          Included In
        </CollapsibleTrigger>
        <CollapsibleContent className='pt-5'>
          <div className='flex text-base space-x-5'>
            <Image
              src='/assets/w500.jpg'
              width={142}
              height={142}
              alt='img'
              className=''
            />
            <p>DLC 1 VOL 1</p>
            <p>BND$1.99</p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default DescriptionSect;
