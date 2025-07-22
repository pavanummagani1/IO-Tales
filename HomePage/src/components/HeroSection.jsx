import React, { useState } from 'react';

const slides = [
  {
    title: 'LOREM IPSUM',
    subtitle: 'DOLOR SIT AMET',
    desc: 'Lorem ipsum dolor sit amet consectetur. Eu tristique sed blandit aliquam neque odio tortor in sit. Facilisis est rhoncus sed commodo nec ipsum.',
    btnText: 'SHOP NOW',
  },
  {
    title: 'KIDS COLLECTION',
    subtitle: 'SUMMER SALE',
    desc: 'Get the best outfits for your little ones. Trendy, comfy and colorful.',
    btnText: 'EXPLORE NOW',
  },
  {
    title: 'NEW ARRIVALS',
    subtitle: 'LIMITED EDITION',
    desc: 'Fresh styles just landed! Discover the latest in kids fashion.',
    btnText: 'SEE MORE',
  },
];

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="hero-carousel">
      {slides.map((slide, index) => (
        <div
          className={`hero-slide ${index === activeIndex ? 'active' : ''}`}
          key={index}
        >
          <div className="hero-content">
            <h1 className="hero-title">{slide.title}</h1>
            <h1 className="hero-title hero-title-secondary">{slide.subtitle}</h1>
            <p className="hero-subtitle">{slide.desc}</p>
            <button className="shop-btn">{slide.btnText}</button>
          </div>
        </div>
      ))}

      {/* Custom Arrows */}
      <button className="hero-arrow prev" onClick={handlePrev}>
        <span>&larr;</span>
      </button>
      <button className="hero-arrow next" onClick={handleNext}>
        <span>&rarr;</span>
      </button>
    </div>
  );
};

export default HeroCarousel;
