'use client';

import React from 'react';
import consoleStore from '../data/consoleStore';
import { observer } from 'mobx-react';

const consoles = observer(() => {
  return (
    <div className='px-5 py-10'>
      <div>
        <form className='space-y-5'>
          <div className='space-y-2'>
            <p className='text-2xl'>Which consoles do you own?</p>
            <p>And what format do you prefer your games?</p>
            <div className='flex flex-col '>
              <div className='flex flex-row space-x-2'>
                <input
                  type='checkbox'
                  onChange={() => consoleStore.handleNintendo()}
                />
                {/* <button onClick={consoleStore.handleNintendo()}>aaa</button> */}
                <p>Nintendo Switch</p>
              </div>
              <div>
                <div className='flex flex-row space-x-2 pl-5'>
                  <input type='radio' name='nsGame2' />
                  <p>All games</p>
                </div>
                <div className='flex flex-row space-x-2 pl-5'>
                  <input type='radio' name='nsGame2' />
                  <p>Digital games only</p>
                </div>
                <div className='flex flex-row space-x-2 pl-5'>
                  <input type='radio' name='nsGame2' />
                  <p>Physical games only</p>
                </div>
              </div>
              <div className='flex flex-row space-x-2'>
                <input
                  type='checkbox'
                  onChange={() => consoleStore.handlePlay()}
                />
                <p>PlayStation 5</p>
              </div>
              <div className='flex flex-row space-x-2'>
                <input
                  type='checkbox'
                  onChange={() => consoleStore.handleXbox()}
                />
                <p>Xbox Series X</p>
              </div>
            </div>
          </div>
          <button className='rounded-sm bg-sky-500 text-white  w-16 h-9'>
            Save!
          </button>
        </form>
      </div>
    </div>
  );
});

export default consoles;
