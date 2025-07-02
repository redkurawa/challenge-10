'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import PostDateAuthor from '../ui/DateAuthor';
import LikeComment from '../ui/LikeComment';
import PostTags from '../ui/PostTags';
// import { useFetchData } from '@/hooks/useFetchData';
// import { InterfaceComment } from '@/interfaces/interface';
import AvatarImage from '../ui/AvatarImage';
import { useAvatarUrl } from '@/hooks/useAvatarUrl';
import CommentCount from '../ui/CommentCount';

interface Props {
  id: number;
  title: string;
  tags: string[];
  content: string;
  createdAt: string;
  imageUrl: string;
  author: string;
  authorId: number;
  likes: number;
  comments: number;
}

const PostCard: React.FC<Props> = ({
  id,
  title,
  tags,
  content,
  createdAt,
  imageUrl,
  author,
  authorId,
  likes,
  // comments,
}) => {
  // const { data: pagesComment } = useFetchData<InterfaceComment[]>(
  //   `/posts/${id}/comments`
  // );

  const { avatarSrc } = useAvatarUrl(authorId);

  return (
    <Link href={`/posts/${id}`}>
      <div className='border-b border-neutral-200 pb-6 mb-6 max-w-[807px] flex gap-6'>
        <div className='hidden sm:block flex-none relative w-[340px] h-[258px]'>
          <Image
            src={imageUrl}
            alt={title}
            fill
            className='object-cover rounded-sm'
            sizes='340px'
          />
        </div>

        <div className='flex-1'>
          <h2 className='text-xl text-neutral-900 font-bold mb-3'>{title}</h2>
          <div className='mb-3'>
            <PostTags tags={tags} />
          </div>
          <p className='mb-4 text-sm font-normal text-gray-800 line-clamp-2'>
            {content}
          </p>
          <div className='mb-4 flex items-center gap-2'>
            <AvatarImage src={avatarSrc} />
            <PostDateAuthor author={author} date={createdAt} />
          </div>
          {/* <LikeComment likes={likes} comments={pagesComment?.length} /> */}
          <LikeComment likes={likes} comments={<CommentCount postId={id} />} />
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
