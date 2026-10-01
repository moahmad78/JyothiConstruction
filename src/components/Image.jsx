import { useState } from 'react';

const FALLBACK_IMAGE = '/Jyothi/IMG_0361.JPG';

const Image = ({ src, alt, className = '', imgClassName = '', objectFit = 'object-cover', priority = false, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src || FALLBACK_IMAGE);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError && imgSrc !== FALLBACK_IMAGE) {
      setHasError(true);
      setImgSrc(FALLBACK_IMAGE);
    }
  };

  const isAbsolute = className.includes('absolute');

  return (
    <div className={`${isAbsolute ? '' : 'relative'} overflow-hidden ${className} bg-jyothi-blue/10`}>
      <img
        src={imgSrc || FALLBACK_IMAGE}
        alt={alt || "Jyothi Construction"}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={`w-full h-full ${objectFit} transition-transform duration-500 ${imgClassName}`}
        onError={handleError}
        {...props}
      />
    </div>
  );
};

export default Image;

