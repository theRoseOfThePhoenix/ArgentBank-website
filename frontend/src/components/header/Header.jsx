// @ts-nocheck
import React from "react";
import { Link } from "react-router-dom";
import bankLogo from "../../assets/img/argentBankLogo.png";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={bankLogo} alt="Argent Bank Logo" className="header_logo" />
      </Link>
      <Link to="/user" className="header_sign-in">
        <i className="fa fa-user-circle"></i> User temporaire
      </Link>
      <Link to="/log" className="header_sign-in">
        <i className="fa fa-user-circle"></i> Sign in
      </Link>
    </header>
  );
}

export default Header;
