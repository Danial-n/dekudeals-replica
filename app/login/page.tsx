import React from 'react';
import Link from 'next/link';

const login = () => {
  return (
    <div className='px-5 py-3 space-y-5 pb-16 md:w-2/4'>
      <div className='space-y-3'>
        <h1>Log in</h1>
        <p>
          Don&apos;t have an account? <Link href='/signup'>Sign up</Link>
        </p>
      </div>
      <div className='space-y-3'>
        <form className='space-y-5 '>
          <div className='flex flex-col space-y-2'>
            <label>Email</label>
            <input
              type='text'
              name='email'
              className='border border-neutral-200 rounded-md h-10'
            />
          </div>
          <div className='flex flex-col space-y-2'>
            <label>Password</label>
            <input
              type='password'
              name='password'
              className='border border-neutral-200 rounded-md h-10'
            />
          </div>
          <div>
            <Link href='/account'>
              <button className='rounded-sm bg-green-500 text-white  w-20 h-9'>
                Log in!
              </button>
            </Link>
          </div>
        </form>
        <div>
          <p>
            Forgot your password? <Link href='/signup'>Reset it</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default login;
