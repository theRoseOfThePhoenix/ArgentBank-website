import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/homes/Home";
import Login from "./pages/login/Login";
import User from "./pages/user/User";
import Error from "./pages/error/Error";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/log" element={<Login />}></Route>
      <Route path="/user" element={<User />}></Route>
      <Route path="/*" element={<Error />}></Route>
    </Routes>
  );
}

export default Router;
