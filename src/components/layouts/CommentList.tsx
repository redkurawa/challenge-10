'use client';

import AvatarImage from '@/components/ui/AvatarImage';
import { formatDate } from '@/app/utils/formatDate';
import { InterfaceComment } from '@/interfaces/interface';

type Props = {
  comments: InterfaceComment[];
};

const CommentList = ({ comments }: Props) => {
  return (
    <div className='mt-6'>
      <div className='text-display-xs font-bold pt-4 pb-3'>
        Comments ({comments.length})
      </div>
      {comments.map((item) => (
        <div
          key={item.id}
          className='text-sm border-b border-neutral-300 mt-3 pb-3'
        >
          <div className='flex items-center gap-3'>
            <AvatarImage src={item.author.avatarUrl} />
            <div>
              <div className='font-semibold capitalize'>{item.author.name}</div>
              <div className='font-normal text-neutral-600'>
                {formatDate(item.createdAt)}
              </div>
            </div>
          </div>
          <div className='font-normal mt-2'>{item.content}</div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
