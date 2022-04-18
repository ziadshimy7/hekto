import React, { useState } from "react";
import "./Navbar.scss";
import { BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/logo.png";
const Navbar: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const links = ["Home", "Pages", "Products", "Blog", "Shop", "Contact"];
  const onMenuClick = (): void => {
    setToggleMenu((prevState) => !prevState);
  };
  return (
    <nav className="hekto__navbar">
      <div className="hekto__navbar-container">
        <div className="hekto__logo-container">
          <img src={logo} alt="logo" />
        </div>
        <ul data-testid="main-list" className="hekto__links-container">
          {links.map((link) => (
            <li className="hekto__link" key={link}>
              <a href="#!">{link}</a>
            </li>
          ))}
        </ul>
        <div className="hekto__search-container">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search products"
          />
          <div className="hekto__search-icon">
            <BsSearch color="#fff" />
          </div>
          <div data-testid="hamburger-button" className="hekto__navbar-menu">
            <button onClick={onMenuClick}>
              <GiHamburgerMenu
                title="Click to view menu"
                className="hamburger__menu-icon"
                color="#fb2e86"
                size={26}
              />
            </button>
            {toggleMenu && (
              <ul data-testid="sub-list" className="hekto__navbar-menu_links">
                {links.map((link) => (
                  <li className="hekto__navbar-menu_link" key={link}>
                    <a href="#!">{link}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
