// ProductShowcase.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProductShowcase = () => {
  const products = [
    { id: 1, image: '/kids1.jpg', price: '₹999', desc: 'Fresh & Juicy Fruit' },
    { id: 2, image: '/kids2.jpg', price: '₹799', desc: 'Organic Delight' },
    { id: 3, image: '/kids1.jpg', price: '₹1299', desc: 'Healthy Snack Pack' },
  ];

  return (
    <section className="product-showcase">
      <div className="title">
        <h2>Lorem Ipsum Dolor</h2>
        <p>Lorem ipsum dolor sit amet consectetur. In feugiat euismod ipsum...</p>
      </div>

      <div className="menu-buttons">
        {['Menu 01', 'Menu 02', 'Menu 03', 'Menu 04', 'Menu 05'].map((menu, index) => (
          <button className={`menu ${index === 0 ? 'active' : ''}`} key={index}>{menu}</button>
        ))}
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        loop
        className="slider"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="slide">
              <div className="product-info">
                <img src={product.image} alt="Product" className="product-image" />
                <div className="price-tag">{product.price}</div>
                <div className="heart">&#10084;</div>
                <div className="price-label">Best Deal</div>
                <p className="desc">{product.desc}</p>
                <button className="shop-btn">Shop Now</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductShowcase;
