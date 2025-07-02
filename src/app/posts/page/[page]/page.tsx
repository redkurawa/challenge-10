'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import PostCard from '@/components/cards/PostCard';
import MostLikedCard from '@/components/cards/MostLikedCard';
import { PageInteface } from '@/interfaces/interface';
import { useFetchData } from '@/hooks/useFetchData';
import Pagination from '@/components/ui/Pagination';

const PaginatedHomePage = () => {
  const { page } = useParams();
  const currentPage = parseInt(page as string, 10) || 1;
  const limit = 10;

  const { data: pagesRec, total } = useFetchData<PageInteface[]>(
    `/posts/recommended?limit=${limit}&page=${currentPage}`
  );

  const { data: pagesLike } = useFetchData<PageInteface[]>(
    '/posts/most-liked?limit=3&page=1'
  );

  const totalPages = total ? Math.ceil(total / limit) : 0;

  return (
    <>
      <section className='w-full mt-12 max-w-[1200px] mx-auto relative grid grid-cols-1 md:grid-cols-3 gap-12'>
        <div className='hidden md:block absolute top-0 bottom-0 left-2/3 w-px bg-neutral-300' />

        {/* Recommend For You */}
        <div className='col-span-2 text-display-sm font-bold relative z-10 px-4 sm:px-0'>
          Recommend For You
          <div className='mt-6'>
            {pagesRec?.map((item) => (
              <PostCard
                key={item.id}
                id={item.id}
                title={item.title}
                tags={item.tags}
                content={item.content}
                createdAt={item.createdAt}
                imageUrl={item.imageUrl}
                author={item.author.name}
                authorId={item.author.id}
                likes={item.likes}
                comments={item.comments}
              />
            ))}

            <Pagination currentPage={currentPage} totalPages={totalPages} />
          </div>
        </div>

        {/* Most Liked */}
        <div className='text-display-sm font-bold relative z-10 px-4 sm:px-0'>
          Most Liked
          <div className='mt-4 space-y-8'>
            {pagesLike?.map((item) => (
              <MostLikedCard
                id={item.id}
                key={item.id}
                title={item.title}
                content={item.content}
                likes={item.likes}
                comments={item.comments}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PaginatedHomePage;
