import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const underlineRef = useRef(null);
  const menuRef = useRef(null);


  useEffect(() => {
    const buttons = menuRef.current.querySelectorAll('button');
    const underline = underlineRef.current;

    const moveUnderline = (button) => {
      const rect = button.getBoundingClientRect();
      const parentRect = menuRef.current.getBoundingClientRect();
      const color = button.dataset.color || 'black'; // Default to black if no color is provided

      gsap.to(underline, {
        width: rect.width,
        x: rect.left - parentRect.left,
        backgroundColor: color,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        moveUnderline(button);
      });
    });

    // Initial position of the underline
    const initialSelected = menuRef.current.querySelector('button.selected');
    if (initialSelected) {
      moveUnderline(initialSelected);
    }

  }, []);

  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <button onClick={() => navigate("/")}><img src="https://png.pngtree.com/png-vector/20240304/ourmid/pngtree-vintage-shoes-logo-vector-png-image_11891338.png" alt="Logo" /></button>
      </div>
      <div className="navbar-menu" ref={menuRef}>
        <button className="selected" data-color="red" onClick={() => navigate("/product")}>SẢN PHẨM</button>
        <span className="divider">|</span>
        <button data-color="blue" onClick={() => navigate("/male")}>NAM</button>
        <span className="divider">|</span>
        <button data-color="green" onClick={() => navigate("/female")}>NỮ</button>
        <span className="divider">|</span>
        <button data-color="orange" onClick={() => navigate("/sale")}>SALE OFF</button>
        <span className="divider">|</span>
        <button data-color="purple" onClick={() => navigate("/discover")}>DISCOVER YOU</button>
        <div className="underline" ref={underlineRef}></div>
      </div>
      <div className="navbar-search">
        <input className="text" placeholder="Tìm kiếm" />
        <i className="search-icon"></i>
      </div>
    </div>
  );
}

export default Navbar;
