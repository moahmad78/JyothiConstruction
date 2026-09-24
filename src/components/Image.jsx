import { useState } from 'react';

const FALLBACK_IMAGE = '/Jyothi/IMG_0361.JPG';

const Image = ({ src, alt, className = '', priority = false, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src || FALLBACK_IMAGE);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError && imgSrc !== FALLBACK_IMAGE) {
      setHasError(true);
      setImgSrc(FALLBACK_IMAGE);
    }
  };

  return (
    <div className={`relative overflow-hidden ${className} bg-jyothi-blue/10`}>
      <img
        src={imgSrc || FALLBACK_IMAGE}
        alt={alt || "Jyothi Construction"}
        loading={priority ? "eager" : "lazy"}
        className="w-full h-full object-cover transition-transform duration-500"
        onError={handleError}
        {...props}
      />
    </div>
  );
};

export default Image;

