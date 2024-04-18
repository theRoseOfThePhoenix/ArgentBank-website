import Home from "./pages/homes/Home";
import { Routes, Route } from "react-router-dom";
import React from "react";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}

export default Router;
