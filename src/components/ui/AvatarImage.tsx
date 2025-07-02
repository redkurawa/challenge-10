'use client';

import Image from 'next/image';
import React from 'react';

interface AvatarImageProps {
  src?: string;
  alt?: string;
  size?: number;
}

const AvatarImage: React.FC<AvatarImageProps> = ({
  src,
  alt = 'avatar',
  size = 40,
}) => {
  const baseURL = 'https://blogger-wph-api-production.up.railway.app';

  const isValidSrc =
    src && src.trim() !== ''
      ? src.startsWith('http')
        ? src
        : `${baseURL}${src}`
      : '/img/iconface.png';

  return (
    <div
      className='rounded-full overflow-hidden'
      style={{ width: size, height: size }}
    >
      <Image
        src={isValidSrc}
        alt={alt}
        width={size}
        height={size}
        className='object-cover'
      />
    </div>
  );
};

export default AvatarImage;
