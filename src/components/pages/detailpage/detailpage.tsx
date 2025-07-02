'use client';

import CommentList from '@/components/layouts/CommentList';
import DetailContent from '@/components/layouts/DetailContent';
import { useAvatarUrl } from '@/hooks/useAvatarUrl';
import { useFetchData } from '@/hooks/useFetchData';
import { InterfaceComment, PageInteface } from '@/interfaces/interface';
import React from 'react';

const DetailPage = ({ id }: { id: string }) => {
  const { data: pagesDetail } = useFetchData<PageInteface>(`/posts/${id}`);
  const { data: pagesComment } = useFetchData<InterfaceComment[]>(
    `/posts/${id}/comments`
  );
  const { avatarSrc } = useAvatarUrl(pagesDetail?.author.id);

  // console.log('[Detail]', pagesDetail);
  if (!pagesDetail) return <p>Loading...</p>;

  return (
    <>
      <div className='max-w-[800px] mx-auto px-4'>
        <DetailContent
          detail={pagesDetail}
          sumComment={pagesComment?.length ?? 0}
          avatar={avatarSrc}
        />
        <CommentList comments={pagesComment ?? []} />
      </div>
    </>
  );
};

export default DetailPage;
