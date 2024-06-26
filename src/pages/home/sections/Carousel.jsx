import React, { useState, useRef } from 'react';
import carouselData from '../../../data/dataCarousel';
import '../../../styles/fonts.css';
import '../../../index.css';


const CarouselItem = ({ item, index, currentIndex }) => {
  const getClassNames = (index) => {
    if (index === currentIndex) return 'opacity-100 transform scale-100';
    if (index === currentIndex + 1  || (currentIndex === 0 && index === carouselData.length - 1)) return 'opacity-100 transform scale-100';
    if (index === currentIndex + 2 || (currentIndex === carouselData.length - 1 && index === 0)) return 'opacity-100 transform scale-100';
    return 'opacity-70 transform scale-95';
  };

  return (
    <div
      key={index}
      className={`symptom-content has-animation flex-shrink-0 px-4 rounded-lg transition-opacity-transform duration-500 bg-[#fff] shadow-[0px_30px_60px_rgba(160,159,202,0.45)] w-[380px] h-[300px] mr-[25px] mt-[50px] p-[1.875em] rounded-[5px] px-6${getClassNames(index)}`}

      data-delay={index * 50}
    >
      <div className={`icon-div ${index + 1}-no`}
       style={{
        backgroundColor: item.bgColor,
        boxSizing: 'content-box',
        width: '53px',
        height: '60px',
        position: 'relative',
        margin: '0px 0px 25px',
        borderRadius: '50% / 14%',
        color: 'white',
        textAlign: 'center',
        lineHeight: '64px',
        fontSize: '24px',
        userSelect: 'none',
      }} >
        <i className={`ti ${item.icon}`} style={{ margin: '0', padding: '0', boxSizing: 'borderBox' }}></i>
      </div>
      <div className="text-justify" style={{ userSelect: 'none' }}>
        <h4 className="mb-3 font-poppins text-[24px] text-[#515184]">{item.title}</h4>
        <p className="font-poppins-sans-serif text-[15px] text-[#515184]">{item.description}</p>
      </div>
    </div>
  );
};

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPosition(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentPosition = e.clientX;
    const diff = startPosition - currentPosition;

    if (diff > 50) {
      nextSlide();
      setIsDragging(false);
    } else if (diff < -50) {
      prevSlide();
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleTouchStart = (e) => setStartPosition(e.touches[0].clientX);
  const handleTouchMove = (e) => handleMouseMove(e.touches[0]);
  const handleTouchEnd = () => setIsDragging(false);

  const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const nextSlide = () => setCurrentIndex((prev) => Math.min(prev + 1, carouselData.length - 1));

  return (
    <div className="symptom-wrapper padding-50 pos-top bg-dark-blue-2 webkit-tap-highlight-color: transparent overflow-hidden">
      <div className="w-screen">
        <div className="justify-content-center">
          <div className="flex  justify-center">
            <div className="text-center">
              <h5 className="has-animation font-poppins-sans-serif text-[18px] text-white pt-[4em]  line-clamp-6 " data-delay="0">App Feature</h5>
              <h2 className="has-animation font-poppins leading-[1em] text-[3.438em] text-white font-black pt-[0.3em] line-clamp-5 w-[15em] h-[2.5em]" data-delay="50">Basic Feature You Will Get When You Use</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div
            ref={containerRef}
            className="relative w-[100%] mx-auto mt-8 overflow-hidden"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ userSelect: 'none' }}
          >
            <div
              className="flex"
              style={{ transform: `translateX(-${currentIndex * 100 / carouselData.length}%)`, transition: 'transform 300ms ease-out' }}
            >
              {carouselData.map((item, index) => (
                <CarouselItem key={index} item={item} index={index} currentIndex={currentIndex} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;