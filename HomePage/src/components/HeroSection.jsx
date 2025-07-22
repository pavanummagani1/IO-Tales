import React from 'react';

const slides = [
  {
    title: "LOREM IPSUM",
    subtitle: "DOLOR SIT AMET",
    desc: "Lorem ipsum dolor sit amet consectetur. Eu tristique sed blandit aliquam neque odio tortor in sit.",
    btnText: "SHOP NOW"
  },
  {
    title: "KIDS COLLECTION",
    subtitle: "SUMMER SALE",
    desc: "Get the best outfits for your little ones. Trendy, comfy and colorful.",
    btnText: "EXPLORE NOW"
  },
  {
    title: "NEW ARRIVALS",
    subtitle: "LIMITED EDITION",
    desc: "Fresh styles just landed! Discover the latest in kids fashion.",
    btnText: "SEE MORE"
  }
];

const HeroCarousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide hero-carousel" data-bs-ride="carousel">
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
            <div className="d-flex flex-column align-items-center justify-content-center text-white text-center" style={{ minHeight: '400px', backgroundColor: '#00c47a' }}>
              <h1 className="mb-2">{slide.title}</h1>
              <h3 className="mb-3">{slide.subtitle}</h3>
              <p className="mb-3" style={{ maxWidth: '600px' }}>{slide.desc}</p>
              <button className="btn btn-light px-4 py-2">{slide.btnText}</button>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
      </button>
    </div>
  );
};

export default HeroCarousel;
