'use client';
import React from 'react';
import Link from 'next/link';
import LikeComment from '../ui/LikeComment';
import CommentCount from '../ui/CommentCount';

interface Props {
  id: number;
  title: string;
  content: string;
  likes: number;
  comments: number;
}

const MostLikedCard: React.FC<Props> = ({ title, content, likes, id }) => {
  return (
    <Link href={`/posts/${id}`}>
      <div className='border-b border-neutral-200 pb-4'>
        <h1 className='text-md font-bold mb-1'>{title}</h1>
        <p className='text-sm font-normal text-neutral-700 mb-2 line-clamp-2'>
          {content}...
        </p>
        <LikeComment likes={likes} comments={<CommentCount postId={id} />} />
      </div>
    </Link>
  );
};

export default MostLikedCard;
