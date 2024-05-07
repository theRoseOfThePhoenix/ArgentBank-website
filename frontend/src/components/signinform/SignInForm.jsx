import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/actions/logActions.js";
import { useNavigate } from "react-router-dom";
import GreenButton from "../greenbtn/GreenBtn";

import "./_signinform.scss";

function SignInForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
      rememberMe: rememberMe,
    };

    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const responseData = await response.json();
        const token = responseData.body.token;
        if (rememberMe) {
          localStorage.setItem("token", token);
        } else {
          sessionStorage.setItem("token", token);
        }
        navigate("/user");
        dispatch(userLogin({ token })); //envoie l'action userLogin au store qui contien le token //
      } else if (response.status === 400) {
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        setErrorMessage("Invalid Email or Password");
      }
    } catch (error) {
      console.error("Erreur :", error);
    }
  };

  return (
    <div className="formulaire">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1 className="formulaire_titleFormulaire">Sign In</h1>
      {errorMessage && <p className="formulaire_errors">{errorMessage}</p>}
      <form className="formulaire_form">
        <div className="formulaire_form-input">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="formulaire_form-input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="formulaire_remember">
          <input
            type="checkbox"
            id="remember-me"
            className="formulaire_remember-me"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label className="remember-me" htmlFor="remember-me">
            Remember me
          </label>
        </div>
        <GreenButton text="Sign In" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default SignInForm;
