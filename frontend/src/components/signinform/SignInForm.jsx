import React from "react";
import GreenButton from "../greenbtn/GreenBtn";
import "./_signinform.scss";

function SignInForm() {
  return (
    <div className="formulaire">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1 className="formulaire_titleFormulaire">Sign In</h1>
      <form className="formulaire_form">
        <span className="formulaire_errors"></span>
        <div className="formulaire_form-input">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            //value={email}
          />
        </div>
        <div className="formulaire_form-input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            //value={password}
          />
        </div>
        <div className="formulaire_remember">
          <input
            type="checkbox"
            id="remember-me"
            className="formulaire_remember-me"
            //checked={rememberMe}
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <GreenButton text="Sign In" onClick="" />
      </form>
    </div>
  );
}

export default SignInForm;
