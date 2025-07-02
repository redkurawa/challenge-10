'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/pageSearch?query=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className='hidden sm:flex w-[373px] h-12 border border-neutral-300 rounded-xl items-center px-4 py-3'
    >
      <Image src='/img/search-md.png' alt='Search' width={18} height={18} />
      <input
        type='text'
        placeholder='Search'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='text-sm text-neutral-500 ml-2 w-full focus:outline-none'
      />
    </form>
  );
};

export default SearchBar;
