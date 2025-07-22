import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const CarouselSection = () => {
  return (
    <section className="carousel-section position-relative py-5 text-white overflow-hidden">
      {/* Top Cloud SVG */}
      <div className="cloud-top">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-100">
          <path fill="#fff" fillOpacity="1" d="M0,32L48,58.7C96,85,192,139,288,160C384,181,480,171,576,149.3C672,128,768,96,864,117.3C960,139,1056,213,1152,234.7C1248,256,1344,224,1392,208L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>

      <div className="container text-center position-relative z-1">
        {/* Rainbow and Icons */}
        <div className="rainbow-icon mx-auto mb-3">
          <svg viewBox="0 0 100 60" width="60" height="60">
            <defs>
              <linearGradient id="rainbow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ff0000" />
                <stop offset="20%" stopColor="#ff9900" />
                <stop offset="40%" stopColor="#ffff00" />
                <stop offset="60%" stopColor="#33cc33" />
                <stop offset="80%" stopColor="#3399ff" />
                <stop offset="100%" stopColor="#9900cc" />
              </linearGradient>
            </defs>
            <path d="M10 50 A40 40 0 0 1 90 50" stroke="url(#rainbow)" strokeWidth="10" fill="none" />
          </svg>
        </div>
        <h2 className="carousel-heading fw-bold display-5">Craft your Tales</h2>
        <p className="carousel-sub mb-4 mx-auto">
          Lorem ipsum dolor sit amet consectetur. Adipiscing id est interdum nulla condimentum fermentum. Scelerisque
          suspendisse gravida cras sit tincidunt vulputate. Lobortis venenatis est sed rhoncus pharetra et.
        </p>

        {/* Carousel */}
        <div className="carousel-wrapper d-flex justify-content-center align-items-center position-relative">
          <button className="carousel-control-prev">
            <i className="bi bi-chevron-left"></i>
          </button>

          <div className="carousel-cards d-flex gap-4">
            {/* Card 1 */}
            <div className="carousel-card border-yellow">
              <div className="card-image-container">
                <div className="product-placeholder"></div>
                <div className="play-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="#fff" stroke="#000" strokeWidth="2" />
                    <polygon points="10,8 16,12 10,16" fill="#000" />
                  </svg>
                </div>
              </div>
              <div className="card-details">
                <h5 className="card-title">Shadow Box Mahabharata</h5>
                <p className="price">₹ 1499.00</p>
                <button className="btn btn-success btn-sm">SHOP NOW</button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="carousel-card border-blue">
              <div className="card-image-container">
                <div className="product-placeholder"></div>
                <div className="play-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="#fff" stroke="#000" strokeWidth="2" />
                    <polygon points="10,8 16,12 10,16" fill="#000" />
                  </svg>
                </div>
              </div>
              <div className="card-details">
                <h5 className="card-title">Cube Tales</h5>
                <p className="price">₹ 1499.00</p>
                <button className="btn btn-success btn-sm">SHOP NOW</button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="carousel-card border-yellow">
              <div className="card-image-container">
                <div className="product-placeholder"></div>
                <div className="play-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="#fff" stroke="#000" strokeWidth="2" />
                    <polygon points="10,8 16,12 10,16" fill="#000" />
                  </svg>
                </div>
              </div>
              <div className="card-details">
                <h5 className="card-title">3D Buddies</h5>
                <p className="price">₹ 1499.00</p>
                <button className="btn btn-success btn-sm">SHOP NOW</button>
              </div>
            </div>
          </div>

          <button className="carousel-control-next">
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>

        {/* View More Button */}
        <div className="mt-4">
          <button className="btn btn-danger btn-lg px-4">VIEW MORE</button>
        </div>
      </div>

      {/* Bottom Cloud SVG */}
      <div className="cloud-bottom">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-100">
          <path fill="#fff" fillOpacity="1" d="M0,96L48,106.7C96,117,192,139,288,133.3C384,128,480,96,576,101.3C672,107,768,149,864,154.7C960,160,1056,128,1152,106.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default CarouselSection;
