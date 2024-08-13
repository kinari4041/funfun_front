import { Header, Footer } from '.';
import { Helmet } from 'react-helmet-async';
import React, { useRef, useEffect } from 'react';
import { renderRecentDataList } from '../utils/getDataList';
import TrendList from '../sections/section_trendlist';
import sample from '../data/sample.json'

const Recent = () => {

  const wrapRef = useRef(null);
  const wrapRef2 = useRef(null);

  useEffect(() => {
      if (wrapRef.current) { renderRecentDataList(sample, wrapRef.current, 0, 15); }
      if (wrapRef2.current) { renderRecentDataList(sample, wrapRef2.current, 16, 31); }
  }, []) // 빈 배열을 의존성으로 설정함으로서 처음 렌더링 시에만 실행

  return (
    <>
      <Helmet>
        <title>FunFun - 최신 프로젝트</title>
      </Helmet>
      <Header />
        <section id="search" className="section-area">
            <div className="section-title">
                <p>최근 프로젝트</p>
            </div>
            <div className="list-page" data-section="recent" ref={wrapRef}></div>
            <TrendList item={`<span className="hashtag">이런건</span> 어떠세요?`} />
            <div className="list-page" data-section="recent" ref={wrapRef2}></div>
        </section>
      <Footer />
    </>
  );
}

export default Recent;
