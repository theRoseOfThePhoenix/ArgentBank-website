import Home from "./pages/homes/Home";
import Error from "./pages/error/Error";
import { Routes, Route } from "react-router-dom";
import React from "react";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/*" element={<Error />}></Route>
    </Routes>
  );
}

export default Router;
