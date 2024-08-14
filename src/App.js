import "./style.css";
import "./css/default.css";

import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./core/home";
import Search from "./page/search";
import Register from "./page/register";
import Popular from "./page/popular";
import Recent from "./page/recent";

const App = () => {
    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/recent" element={<Recent />} />
        <Route path="/search/:query" element={<Search />} />
      </Routes>
    );
  }

export default App;
