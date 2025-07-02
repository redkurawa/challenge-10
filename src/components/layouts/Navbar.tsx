'use client';

import Image from 'next/image';
import SearchBar from './SearchBar';
import Link from 'next/link';

const Navbar = () => {
  return (
    <section className='w-full max-w-[1200px] mx-auto py-[18px] border-b border-neutral-300 px-4'>
      <div className='flex items-center justify-between'>
        <Link href='/' className='flex items-center'>
          <Image src='/img/yourlogo.png' alt='Logo' width={30} height={32} />
          <span className='text-2xl font-semibold ml-2.5'>Your Logo</span>
        </Link>
        <SearchBar />
        <div className='hidden sm:flex text-sm font-semibold  items-center'>
          <span className='text-primary-300'>Login</span>
          <Image
            src='/img/Line13.svg'
            alt='Line'
            width={1}
            height={23}
            className='ml-6 mr-4'
          />
          <button className='w-[182px] h-11 bg-primary-300 rounded-full text-neutral-25'>
            Register
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
