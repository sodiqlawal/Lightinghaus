import React, { useState, useEffect } from "react";
import PhoneIcon from "@material-ui/icons/Phone";
import RoomIcon from "@material-ui/icons/Room";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Logo from "../../assets/logo.jpeg";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";
import MenuIcon from "@material-ui/icons/Menu";
import DrawerList from "./drawer";
import useWindowSize from "../../hooks/useWindowSize";
import "./index.scss";

const navList: Array<string> = [
  "LIGHTING EXPLORER",
  "OFFICE",
  "HOTEL",
  "HOME",
  "ALL PRODUCTS",
  "PENDANT LIGHT",
  "CHANDELIER",
  "SWITCHES & SOCKETS",
  "CEILING LAMP",
  "WALL LAMP",
];

type TProp = {
  sticky: boolean;
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [width] = useWindowSize();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset >= 50 && width <= 900) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let navbarClasses = ["logo"];
  useEffect(() => {
    if (scrolled) {
      navbarClasses.push("scrolled");
    }
  },[scrolled, navbarClasses]);

  return (
    <div className="navbar">
      {/* address */}
      <div className="address">
        <div className="container">
          <ul>
            <li>
              <PhoneIcon className="icon" />
              <p>+234 802 501 8557</p>
            </li>
            <li>
              <RoomIcon className="icon" />
              <p>35 Freedom Way, Lekki Phase 1, Lagos, Nigeria</p>
            </li>
            <li>
              <MailOutlineIcon className="icon" />
              <p>sales@thelightinghaus.com</p>
            </li>
          </ul>
        </div>
      </div>

      {/* end address */}

      {/* search row */}
      <div className="search-row-container">
        <div className="search-row container">
          <div className={navbarClasses.join(" ")}>
            <MenuIcon
              className="menu-icon navbar--logo"
              onClick={handleClick}
            />
            <img src={Logo} alt="logo" />
            <ShoppingCartIcon className="cart-icon" />
          </div>

          <div className="search-input input-group flex-nowrap">
            <div className="input-group-prepend">
              <span className="input-group-text" id="addon-wrapping">
                <SearchIcon className="search-icon" />
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Search for a product, category or space."
              aria-label="Search-product"
              aria-describedby="addon-wrapping"
            />
          </div>

          <ul>
            <li>
              <PersonOutlineIcon className="icon" />
              <p>MY ACCOUNT</p>
            </li>
            <li>
              <TurnedInNotIcon className="icon" />
              <p>LIST</p>
            </li>
            <li>
              <ShoppingCartIcon className="icon" />
              <p>CART</p>
            </li>
          </ul>
        </div>
      </div>

      <hr />

      {/* start list */}

      <ul className="nav-list container">
        {navList.map((list, i) => (
          <li key={i}>{list}</li>
        ))}
      </ul>

      {/* list */}

      <DrawerList
        close={() => setIsOpen(false)}
        open={() => setIsOpen(true)}
        isOpen={isOpen}
      />
    </div>
  );
};

export default NavBar;
