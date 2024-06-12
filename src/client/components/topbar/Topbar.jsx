import React, { useEffect, useState } from 'react';
import './Topbar.css';
import Login from '../login/Login';

const Topbar = ({ setSelectedButton, selectedButton, isOpenAuthen, setIsOpenAuthen }) => {

  const handleButtonClick = (index) => {
    setSelectedButton(index);
    setIsOpenAuthen(!isOpenAuthen)
  };


  useEffect(() => {
    handleButtonClick(0);
  }, []);

  return (
    <>
      <div className="topbar">
        <div className="topbar-left">
          <span>taovietduc@gmail.com</span>
          <span className="divider-topbar">/</span>
          <span>0971467418</span>
        </div>
        <div className="topbar-right">
          {["Đăng nhập", "/", "Đăng ký"].map((buttonName, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              className={selectedButton === index ? 'selected' : ''}
            >
              {buttonName}
            </button>
          ))}
        </div>
      </div>
      <Login isOpen={isOpenAuthen} onClose={handleButtonClick} />
    </>
  );
}

export default Topbar;
