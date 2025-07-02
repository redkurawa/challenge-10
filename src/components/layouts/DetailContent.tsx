'use client';

import Image from 'next/image';
import LikeComment from '@/components/ui/LikeComment';
import PostDateAuthor from '@/components/ui/DateAuthor';
import PostTags from '@/components/ui/PostTags';
import { PageInteface } from '@/interfaces/interface';
import AvatarImage from '../ui/AvatarImage';

type Props = {
  detail: PageInteface;
  sumComment: number;
  avatar?: string;
};

const DetailContent = ({ detail, sumComment, avatar }: Props) => {
  return (
    <>
      <h1 className='text-display-lg font-bold mt-12 mb-4'>{detail.title}</h1>
      <PostTags tags={detail.tags} />
      <div className='text-sm text-gray-500 border-b border-neutral-300 py-4'>
        <div className='flex items-center gap-2'>
          <AvatarImage src={avatar} />
          <PostDateAuthor author={detail.author.name} date={detail.createdAt} />
        </div>
      </div>
      <div className='py-4 border-b border-neutral-300'>
        <LikeComment likes={detail.likes} comments={sumComment} />
      </div>
      <div className='w-full relative h-[450px] my-4'>
        <Image
          src={detail.imageUrl}
          alt={detail.title}
          fill
          className='object-cover rounded-sm'
        />
      </div>
      <p className='text-gray-700 pb-4 border-b border-neutral-300'>
        {detail.content}
      </p>
    </>
  );
};

export default DetailContent;
