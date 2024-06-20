import React, { useState, useRef } from 'react';

const items = [
  {
    icon: 'ti-lock',
    title: 'Fever',
    description: "Fever is a key symptom, experts say. Don't fixate on a number, but know it's really not a fever until your temperature reaches at least 100",
  },
  {
    icon: 'ti-panel',
    title: 'Cough',
    description: "Coughing is another key symptom, but it's not just any cough, said Schaffner. It should be a dry cough that you feel in your chest.",
  },
  {
    icon: 'ti-package',
    title: 'Difficulty Breathing',
    description: "Shortness of breath can be a third -- and very serious -- manifestation of Covid-19, and it can occur on its own, without a cough.",
  },
];

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
    const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="symptom-wrapper padding-50 pos-top">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="section-title text-center">
              <h5 className="has-animation" data-delay="0">App Feature</h5>
              <h2 className="has-animation" data-delay="50">Basic Feature You Will Get When You Use</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            ref={containerRef}
            className="relative w-full max-w-4xl mx-auto mt-8 overflow-hidden"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / items.length)}%)` }}
            >
              {items.map((item, index) => (
                <div
                  key={index}
                  className="symptom-content has-animation w-full flex-shrink-0 px-4 bg-blue-500 rounded-lg"
                  style={{ width: '303.333px', marginRight: '25px' }}
                  data-delay={index * 50}
                >
                  <div className={`icon-div ${index + 1}-no`}><i className={item.icon}></i></div>
                  <h4 className="mb-3">{item.title}</h4>
                  <p>{item.description}</p>
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