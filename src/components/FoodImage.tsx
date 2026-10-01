'use client';
import Image from 'next/image';
import { useState } from 'react';
interface Props {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}
export function FoodImage({
  src,
  alt,
  className = '',
  priority = false,
  sizes = '(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 25vw',
}: Props) {
  const [failed, setFailed] = useState(false);
  return (
    <Image
      src={failed ? '/images/fallback.svg' : src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={`food-image ${className}`}
      onError={() => setFailed(true)}
    />
  );
}
