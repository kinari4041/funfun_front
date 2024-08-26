import "css/style.css";
import "css/default.css";

import React from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { LoginProvider } from "util/loginProvider";

import Error404 from "page/Error404";
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
    const isHeaderNeed = !['/404'].includes(location.pathname);
    const isFooterNeed = !['/404','/search', '/category'].includes(location.pathname);

    return (
      <LoginProvider>
          {isHeaderNeed && <Header />}
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

              {/* 404 에러 페이지 */}
              <Route path="/404" element={<Error404 />} />
              {/* 모든 기타 경로는 404 페이지로 리다이렉트 */}
              <Route path="*" element={<Navigate to="/404" replace />} />

            </Routes>
          {isFooterNeed && <Footer />}
      </LoginProvider>
    );
}

export default AppRouter;
