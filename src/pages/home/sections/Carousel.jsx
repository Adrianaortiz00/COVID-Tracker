import React, { useState, useRef } from 'react';
import carouselData from '../../../data/dataCarousel';
import '../../../styles/fonts.css';
import '../../../index.css';


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

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartPosition(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentPosition = e.touches[0].clientX;
    const diff = startPosition - currentPosition;

    if (diff > 50) {
      nextSlide();
      setIsDragging(false);
    } else if (diff < -50) {
      prevSlide();
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const prevSlide = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : 0;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex < carouselData.length - 1 ? currentIndex + 1 : carouselData.length - 1;
    setCurrentIndex(newIndex);
  };

  const getClassNames = (index) => {
    if (index === currentIndex) {
      return 'opacity-100 transform scale-100';
    } else if (index === currentIndex - 1 || (currentIndex === 0 && index === carouselData.length - 1)) {
      return 'opacity-100 transform scale-100';
    } else if (index === currentIndex + 1 || (currentIndex === carouselData.length - 1 && index === 0)) {
      return 'opacity-100 transform scale-';
    } else {
      return 'opacity-70 transform scale-95';
    }
  };

  return (
    <div className="symptom-wrapper padding-50 pos-top bg-dark-blue-2 webkit-tap-highlight-color: transparent">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="section-title text-center">
              <h5 className="has-animation font-poppins-sans-serif text-[10px] text-white pt-[0.5em] ml-[3em] line-clamp-6" data-delay="0">App Feature</h5>
              <h2 className="has-animation font-poppins leading-[1em] text-[2.5em] text-white font-black pt-[0.5em] ml-[3em] line-clamp-5" data-delay="50">Basic Feature You Will Get When You Use</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            ref={containerRef}
            className="relative w-full max-w-4xl mx-auto mt-8 "
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
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)`, transition: 'transform 300ms ease-out' }}
            >
              {carouselData.map((item, index) => (
                <div
                  key={index}
                  className={`symptom-content has-animation w-full flex-shrink-0 px-4 rounded-lg transition-opacity-transform duration-500 ${getClassNames(index)}`}
                  style={{
                    marginTop: '50px',
                    backgroundColor: '#fff',
                    boxShadow: '0px 30px 60px rgba(160, 159, 202, 0.45)',
                    padding: '30px',
                    position: 'relative',
                    borderRadius: '5px',
                    width: '383px',
                    marginRight: '25px',
                    userSelect: 'none', // Evita la selección de texto en cada elemento
                  }}
                  data-delay={index * 50}
                >
                  <div className={`icon-div ${index + 1}-no`} style={{
                    backgroundColor: item.bgColor,
                    boxSizing: 'content-box',
                    width: '55px',
                    height: '60px',
                    position: 'relative',
                    margin: '0px 0px 25px',
                    borderRadius: '50% / 14%',
                    color: 'white',
                    textAlign: 'center',
                    lineHeight: '64px',
                    fontSize: '24px',
                    userSelect: 'none', // Evita la selección de texto en el icono
                  }}>
                    <i className={`ti ${item.icon}`} style={{ margin: '0', padding: '0', boxSizing: 'borderBox' }}></i>
                  </div>
                  <div className="text-justify" style={{ userSelect: 'none' }}> {/* Evita la selección de texto en la descripción */}
                    <h4 className="mb-3 font-poppins text-[24px] text-[#515184]">{item.title}</h4>
                    <p className="font-poppins-sans-serif text-[15px] text-[#515184]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;