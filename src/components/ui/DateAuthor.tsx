'use client';

import { formatDate } from '@/app/utils/formatDate';
import React from 'react';

interface PostDateAuthorProps {
  id?: number;
  author: string;
  date: string | Date;
}

const PostDateAuthor: React.FC<PostDateAuthorProps> = ({
  id,
  author,
  date,
}) => {
  return (
    <p className='text-sm font-medium  text-gray-600 capitalize'>
      {id} {author} •{' '}
      <span className='text-sm font-normal'>{formatDate(date)}</span>
    </p>
  );
};

export default PostDateAuthor;
