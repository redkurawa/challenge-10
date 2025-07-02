'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath?: string;
}

const Pagination = ({
  currentPage,
  totalPages,
  basePath = '/posts/page',
}: PaginationProps) => {
  const createPageLink = (page: number) => `${basePath}/${page}`;

  return (
    <div className='mt-8 flex items-center gap-2 flex-wrap justify-center text-xs sm:text-sm font-normal'>
      {/* Previous */}
      <Link
        href={createPageLink(Math.max(currentPage - 1, 1))}
        className='px-3 py-1  hover:bg-neutral-100 disabled:pointer-events-none disabled:opacity-50'
        aria-disabled={currentPage === 1}
      >
        <div className='flex items-center'>
          <Image
            src='/img/PrevIcon.svg'
            alt='previus'
            width={24}
            height={24}
            className='h-auto w-auto'
          />
          Previous
        </div>
      </Link>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }).map((_, i) => {
        const pageNum = i + 1;

        if (
          pageNum === 1 ||
          pageNum === totalPages ||
          Math.abs(currentPage - pageNum) <= 1
        ) {
          return (
            <Link
              key={pageNum}
              href={createPageLink(pageNum)}
              className={`size-9 sm:size-12 flex items-center justify-center rounded-full  transition ${
                currentPage === pageNum
                  ? 'bg-[#0093DD] text-white font-semibold'
                  : 'hover:bg-neutral-200'
              }`}
            >
              {pageNum}
            </Link>
          );
        }

        if (pageNum === currentPage - 2 || pageNum === currentPage + 2) {
          return (
            <span key={`ellipsis-${pageNum}`} className='px-2 text-neutral-400'>
              ...
            </span>
          );
        }

        return null;
      })}

      {/* Next */}
      <Link
        href={createPageLink(Math.min(currentPage + 1, totalPages))}
        className='px-3 py-1   hover:bg-neutral-100 disabled:pointer-events-none disabled:opacity-50'
        aria-disabled={currentPage === totalPages}
      >
        <div className='flex items-center'>
          Next
          <Image
            src='/img/NextIcon.svg'
            alt='next'
            width={24}
            height={24}
            className='h-auto w-auto'
          />
        </div>
      </Link>
    </div>
  );
};

export default Pagination;
