import React, { useState } from 'react';

const ProductImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(images);
  const goToPrevSlide = () => {
    const index = (currentIndex + images.length - 1) % images.length;
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    const index = (currentIndex + 1) % images.length;
    setCurrentIndex(index);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <div style={{ width: '450px', position: 'relative' }}>
        <img src={images[currentIndex]} alt={`carousel-img${currentIndex}`} style={{ width: '100%', height: '20rem', objectFit:'contain' }} />
        <div style={{ position: 'absolute', top: '50%', left: '20px', cursor: 'pointer' }} onClick={goToPrevSlide}>
          {"<"}
        </div>
        <div style={{ position: 'absolute', top: '50%', right: '20px', cursor: 'pointer' }} onClick={goToNextSlide}>
          {">"}
        </div>
      </div>
    </div>
  );
};

export default ProductImageCarousel;
