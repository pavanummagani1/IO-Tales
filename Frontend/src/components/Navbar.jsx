import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className='custom-navbar position-relative'>
      {/* Offer Banner */}
      <div className="offer-bar text-white py-1 text-center">
        <i className="bi bi-heart-fill me-2 text-danger"></i>
        5% Discount On Your First Purchase Code : FIRST BUYS
      </div>

      {/* Header */}
      <div className='header d-flex justify-content-between align-items-center px-4 py-3 bg-white'>
        <div className='logo fw-bold fs-3'>BRAND LOGO</div>

        {/* Desktop Menu */}
        <div className='menu d-none d-lg-flex gap-4 justify-content-center flex-grow-1'>
          <span className='menu-item rounded-pill px-3 py-1 border'>MENU 01</span>
          <span className='menu-item'>MENU 02</span>
          <span className='menu-item'>MENU 03</span>
          <span className='menu-item'>MENU 04</span>
          <span className='menu-item'>MENU 05</span>
          <span className='menu-item'>MENU 06</span>
        </div>

        {/* Icons */}
        <div className='icons d-flex gap-3 align-items-center'>
          <i className="bi bi-search"></i>
          <i className="bi bi-person"></i>
          <i className="bi bi-cart4 position-relative">
            <span className="cart-dot bg-danger"></span>
          </i>
          <i className="bi bi-list fs-2 d-lg-none" onClick={() => setMenuOpen(true)}></i>
        </div>
      </div>

      {/* Fullscreen Mobile Menu Modal */}
      {menuOpen && (
        <div className="mobile-menu-overlay" ref={menuRef}>
          <div className="mobile-menu-content">
            <i className="bi bi-x-lg close-icon" onClick={() => setMenuOpen(false)}></i>
            <span className='d-block py-2' onClick={() => setMenuOpen(false)}>MENU 01</span>
            <span className='d-block py-2' onClick={() => setMenuOpen(false)}>MENU 02</span>
            <span className='d-block py-2' onClick={() => setMenuOpen(false)}>MENU 03</span>
            <span className='d-block py-2' onClick={() => setMenuOpen(false)}>MENU 04</span>
            <span className='d-block py-2' onClick={() => setMenuOpen(false)}>MENU 05</span>
            <span className='d-block py-2' onClick={() => setMenuOpen(false)}>MENU 06</span>
          </div>
        </div>
      )}

      <div className="bottom-wave"></div>
    </div>
  );
};

export default Navbar;
