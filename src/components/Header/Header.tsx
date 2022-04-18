import React from "react";
import "./Header.scss";
import headerChairImage from "../../assets/header-chair.png";
const Header: React.FC = () => {
  return (
    <header className="hekto__header">
      <div className="hekto__content-container">
        <div className="hekto__text-container">
          <h1>New Furniture Collection Trends in 2022</h1>
          <h4>Best Furniture For Your Castle....</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <button className="hekto__header-btn">Shop Now</button>
        </div>
        <div className="hekto__header-img_lamp" />
      </div>
      <div className="hekto__header-img">
        <img src={headerChairImage} alt="chair" />
        <div className="overlay-circle-1"></div>
        <div className="overlay-circle-2"></div>
      </div>
    </header>
  );
};

export default Header;
