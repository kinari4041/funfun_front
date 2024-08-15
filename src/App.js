import "css/style.css";
import "css/default.css";

import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "core/header";
import Footer from "core/footer";

import Home from "core/home";
import Register from "page/register";
import Popular from "page/popular";
import Recent from "page/recent";
import Search from "page/search";

const App = () => {
    return (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/recent" element={<Recent />} />
            <Route path="/search" element={<Search />} />
          </Routes>
          <Footer />
      </>
    );
  }

export default App;
