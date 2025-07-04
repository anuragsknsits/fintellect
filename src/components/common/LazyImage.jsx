import React, { useState } from 'react';

const LazyImage = ({ src, alt, className = '', fallback = '/fallback.jpg', ...rest }) => {
  const [imgError, setImgError] = useState(false);
  const CDN_BASE = import.meta.env.VITE_CDN_BASE_URL;

  const finalSrc = imgError ? fallback : `${CDN_BASE}/${src}`;

  return (
    <img
      src={finalSrc}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setImgError(true)}
      {...rest}
    />
  );
};

export default React.memo(LazyImage);
