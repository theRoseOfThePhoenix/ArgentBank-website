// @ts-nocheck
import React from "react";
import { Link } from "react-router-dom";
import bankLogo from "../../assets/img/argentBankLogo.png";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={bankLogo} alt="Argent Bank Logo" className="logo" />
      </Link>
    </header>
  );
}

export default Header;
