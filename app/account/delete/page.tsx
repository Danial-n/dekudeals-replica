import React from 'react';
import Link from 'next/link';

const accountdelete = () => {
  return (
    <div className='md:w-2/4 px-5 py-3 space-y-5 pb-16'>
      <form className='space-y-3'>
        <h2 className='font-light'>Delete Your Account</h2>
        <p>
          Deleting your account is permanent and irreversible. Doing so
          immediately removes all data associated with your account including
          your email address & other personal data, wishlist, collection, and
          custom lists.
        </p>
        <p>
          For your safety, please confirm you wish to delete all data associated
          with yourEmail@gmail.com by typing &quot;
          <span className='font-bold'>confirm</span>&quot; below.
        </p>
        <div className='space-y-10'>
          <input
            type='text'
            name='deleteAccount'
            className='border border-neutral-200 rounded-md h-8 w-full'
          />
          <button className='bg-red-400 text-white px-3 py-2 rounded-sm'>
            Delete my account
          </button>
        </div>
      </form>
    </div>
  );
};

export default accountdelete;
