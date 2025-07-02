'use client';
import React from 'react';
import { useFetchData } from '@/hooks/useFetchData';
import { InterfaceComment } from '@/interfaces/interface';

interface CommentCountProps {
  postId: number;
}

const CommentCount: React.FC<CommentCountProps> = ({ postId }) => {
  const { data: comments } = useFetchData<InterfaceComment[]>(
    `/posts/${postId}/comments`
  );

  if (!comments) return <span>Loading...</span>;

  return <span>{comments.length}</span>;
};

export default CommentCount;
