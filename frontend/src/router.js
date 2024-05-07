import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "./pages/homes/Home";
import Login from "./pages/login/Login";
import User from "./pages/user/User";
import Error from "./pages/error/Error";
import { useSelector } from "react-redux";

function Router() {
  // @ts-ignore
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="/log"
        element={isLoggedIn ? <Navigate to="/user" replace /> : <Login />}
      ></Route>
      <Route
        path="/user"
        element={isLoggedIn ? <User /> : <Navigate to="/log" replace />}
      ></Route>
      <Route path="/*" element={<Error />}></Route>
    </Routes>
  );
}

export default Router;
