import "css/style.css";
import "css/default.css";

import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Popular from "page/popular";
import Recent from "page/recent";
import Search from "page/search";
import PjtRegist from "page/PjtRegist";
import LoginContext from "util/LoginContext";

const AppRouter = () => {
    return (
      <>
        <BrowserRouter>
            <Routes>
                  <Route index element={<LoginContext />} />
                  {/* <Route path="/" element={<Home />} /> */}
                  <Route path="/popular" element={<Popular />} />
                  <Route path="/recent" element={<Recent />} />
                  <Route path="/pjtregist" element={<PjtRegist />} />
                  <Route path="/search" element={<Search />} />
            </Routes>
        </BrowserRouter>
      </>
    );
}

export default AppRouter;
