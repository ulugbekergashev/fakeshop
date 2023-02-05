import React from "react";
import LoGo from "../../img/cart-removebg-preview.png";
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Link to={"/"} className="logo" >
      <header>
      <img className="header__logo" src={LoGo} alt="" />
      <h1>FakeShopping</h1>
      </header>
    </Link>
  );
};

export default Header;
