import React from 'react';
function AboutSection() {
  return (
    <section className="about-section position-relative overflow-hidden">
      {/* Top Cloud */}
      <div className="cloud-layer top-cloud"></div>

      <div className="container text-center position-relative z-1">
        <h2 className="section-tag">ABOUT</h2>
        <h1 className="section-title">io tales</h1>
        <p className="section-sub">Small team, big tales, endless play.</p>

        <div className="about-decor-wrapper mx-auto position-relative ">

          <div className="about-box position-relative rounded p-4 shadow">
            <p>
              Lorem ipsum dolor sit amet consectetur. Quam scelerisque lectus egestas purus est ultricies enim enim massa. Egestas nibh nibh venenatis dapibus pretium in diam sodales. Eu volutpat condimentum pharetra elementum felis eu euismod velit augue. Gravida elementum urna suspendisse.
            </p>
            <p>
              Nisi sagittis enim aliquam egestas. At aliquam sed diam vulputate auctor mi. Eu sed euismod leo urna id blandit. Luctus massa gravida eget egestas pharetra ultricies massa magna. Tempus elit sed pharetra sed pellentesque elit. Suspendisse viverra elementum nunc adipiscing cras.
            </p>
          </div>
            <svg className="about-curve position-absolute top-0 start-0 w-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none">
            <path d="M0,75 C150,0 350,150 500,75" stroke="#ffe75d" strokeWidth="8" fill="none" />
          </svg>
        </div>
      </div>

      {/* Bottom Cloud */}
      <div className="cloud-layer bottom-cloud"></div>
    </section>
  );
}

export default AboutSection;
