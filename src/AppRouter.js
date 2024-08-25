import "css/style.css";
import "css/default.css";

import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { LoginProvider } from "util/LoginProvider";

import Popular from "page/Popular";
import Recent from "page/Recent";
import Search from "page/Search";
import Upload from "page/Upload";
import Comming from "page/Comming";
import Home from "page/Home";
import Header from "page/Header";
import Footer from "page/Footer";
import Category from "page/Category";
import NoticeBoard from "section/noticeBoard";
import FeeInformation from "section/feeInformation";
import ExaminationGuideline from "section/examinationGuideline";
import UtilizationPolicy from "section/utilizationPolicy";
import ProjectDetail from "page/ProjectDetail";
import Story from "page/Story";
import ScrollToTop from "util/scrollToTop"

const AppRouter = () => {
    const location = useLocation();
    const isFooterNeed = !['/search', '/category'].includes(location.pathname);

    return (
      <LoginProvider>
          <Header />
          <ScrollToTop />
            <Routes>
            {/* 메인 index 페이지 */}
              <Route index element={<Home />} />
              
              {/* 기능 페이지 */}
              <Route path="/popular" element={<Popular />} />
              <Route path="/recent" element={<Recent />} />
              <Route path="/search" element={<Search />} />
              <Route path="/category" element={<Category />} />
              <Route path="/comming_soon" element={<Comming />} />

              {/* 프로젝트 세부페이지 */}
              <Route path="/project" element={<ProjectDetail />} />

              {/* 업로드 페이지 */}
              <Route path="/pjtregist" element={<Upload />} />

              {/* 스토리 페이지 */}
              <Route path="/story" element={<Story />} />

              {/* footer 세부 */}
              <Route path="/notice-Board" element={<NoticeBoard />} />
              <Route path="/fee-information" element={<FeeInformation />} />
              <Route path="/examination-guideline" element={<ExaminationGuideline />} />
              <Route path="/utilization-policy" element={<UtilizationPolicy />} />
            </Routes>
          {isFooterNeed && <Footer />}
      </LoginProvider>
    );
}

export default AppRouter;
