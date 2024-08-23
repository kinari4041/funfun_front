import "css/style.css";
import "css/default.css";

import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { LoginProvider } from "util/loginProvider";

import Popular from "page/popular";
import Recent from "page/recent";
import Search from "page/search";
import Upload from "page/upload";
import Home from "core/home";
import Header from "core/header";
import Footer from "core/footer";

const AppRouter = () => {
    return (
      <>
      <LoginProvider>
        <BrowserRouter>
          <Header />
            <Routes>
                  <Route index element={<Home />} />
                  <Route path="/popular" element={<Popular />} />
                  <Route path="/recent" element={<Recent />} />
                  <Route path="/pjtregist" element={<Upload />} />
                  <Route path="/search" element={<Search />} />
            </Routes>
          <Footer />
        </BrowserRouter>
      </LoginProvider>
      </>
    );
}

export default AppRouter;
