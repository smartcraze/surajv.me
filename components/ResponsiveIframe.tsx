'use client';
import React, { memo } from 'react';

interface IframeProps {
  src: string;
  title?: string;
  allowFullScreen?: boolean;
  className?: string;
  id?: string;
}

const Iframe: React.FC<IframeProps> = ({
  src,
  title = 'Embedded content',
  allowFullScreen = true,
  className = '',
  id,
}) => {
  return (
    <div className={`w-full aspect-video mb-4 ${className}`}>
      <div className="relative w-full h-full">
        <iframe
          id={id}
          src={src}
          title={title}
          loading="lazy"
          allow={allowFullScreen ? 'fullscreen; transparency' : ''}
          allowFullScreen={allowFullScreen}
          className="absolute top-0 left-0 w-full h-full"
          style={{ border: 0 }}
        />
      </div>
    </div>
  );
};

export default memo(Iframe);
