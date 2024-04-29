// @ts-nocheck
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import bankLogo from "../../assets/img/argentBankLogo.png";
import { userLogout, setLoggedIn } from "../../redux/actions/logActions.js";
import { fetchUserProfile } from "../../redux/actions/userActions";

function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userProfile = useSelector((state) => state.profile.userProfile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //Fonction logout qui appel le dispatch et la redirection
  const handleLogout = () => {
    dispatch(userLogout());
    navigate("/log");
  };
  //recupération du token et des actions
  useEffect(() => {
    const tokenLocal = localStorage.getItem("token");
    const tokenSession = sessionStorage.getItem("token");

    if (tokenLocal || tokenSession) {
      dispatch(setLoggedIn());
      dispatch(fetchUserProfile());
    }
  }, [dispatch]);

  return (
    <header className="header">
      <Link to="/">
        <img src={bankLogo} alt="Argent Bank Logo" className="header_logo" />
      </Link>
      <div className="header_">
        {/* Affichage conditionnel des éléments du header si oui ou non le user est connecté */}
        {isLoggedIn ? (
          <>
            <Link to="/user" className="header_sign-in">
              <i className="fa fa-user-circle"></i> {userProfile.userName}
            </Link>
            <div className="header_sign-in" onClick={handleLogout}>
              <i className="fa fa-sign-out"></i>
              Logout
            </div>
          </>
        ) : (
          <Link to="/log" className="header_sign-in">
            <i className="fa fa-user-circle"></i> Sign in
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
