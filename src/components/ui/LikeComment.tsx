'use client';

import Image from 'next/image';
import React from 'react';

interface LikeCommentProps {
  likes: number;
  // comments?: number;
  comments?: React.ReactNode;
}

const LikeComment: React.FC<LikeCommentProps> = ({ likes, comments }) => {
  return (
    <div className='flex items-center text-sm text-neutral-600 gap-5'>
      <div className='flex items-center gap-1'>
        <Image src='/img/LikeIcon.svg' alt='like' width={18} height={18} />
        {likes}
      </div>
      <div className='flex items-center gap-1'>
        <Image
          src='/img/CommentIcon.svg'
          alt='comment'
          width={18}
          height={18}
        />
        {comments}
      </div>
    </div>
  );
};

export default LikeComment;
