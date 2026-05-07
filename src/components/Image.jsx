import { useState } from 'react';

const FALLBACK_IMAGE = '/assets/images/construction.jpeg'; // Precision engineered construction site

const Image = ({ src, alt, className, priority = false, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src || FALLBACK_IMAGE);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleError = () => {
    if (imgSrc !== FALLBACK_IMAGE) {
      setImgSrc(FALLBACK_IMAGE);
    }
  };

  return (
    <div className={`relative overflow-hidden ${className} bg-jyothi-blue/20`}>
      {/* Low-res blurred placeholder can be added here if needed in the future */}
      <img
        src={imgSrc}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'} absolute inset-0`}
        onError={handleError}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  );
};

export default Image;
