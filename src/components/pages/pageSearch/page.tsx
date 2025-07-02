'use client';

import PostCard from '@/components/cards/PostCard';
import { PageInteface } from '@/interfaces/interface';
import { useFetchData } from '@/hooks/useFetchData';

export default function PageSearch({ query }: { query: string }) {
  const { data: posts, loading } = useFetchData<PageInteface[]>(
    `/posts/search?query=${encodeURIComponent(query)}&limit=10&page=1`,
    !query
  );

  return (
    <div className='max-w-[1200px] mx-auto py-10 px-4'>
      <h1 className='text-2xl font-bold mb-6'>
        Search results for:{' '}
        <span className='text-primary-600'>&quot; {query} &quot; </span>
      </h1>

      {loading ? (
        <p>Loading...</p>
      ) : posts?.length === 0 ? (
        <p className='text-neutral-500'>No results found.</p>
      ) : (
        <div className='space-y-10'>
          {posts?.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              tags={post.tags}
              content={post.content}
              createdAt={post.createdAt}
              imageUrl={post.imageUrl}
              author={post.author.name}
              authorId={post.author.id}
              likes={post.likes}
              comments={post.comments}
            />
          ))}
        </div>
      )}
    </div>
  );
}
