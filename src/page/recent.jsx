import { Helmet } from 'react-helmet-async';
import React, { useRef, useEffect } from 'react';

import { renderRecentList } from 'util/getDataList';
import TrendList from 'section/section_trendlist';
import sample from 'data/sample.json'

const Recent = () => {

  const wrapRef = useRef(null);
  const wrapRef2 = useRef(null);

  useEffect(() => {
      if (wrapRef.current) { renderRecentList(sample, wrapRef.current, 0, 15); }
      if (wrapRef2.current) { renderRecentList(sample, wrapRef2.current, 16, 31); }
  }, []) // 빈 배열을 의존성으로 설정함으로서 처음 렌더링 시에만 실행

  return (
    <>
      <Helmet>
        <title>FunFun - 최신 프로젝트</title>
      </Helmet>
        <section id="search" className="section-area">
            <div className="section-title">
                <p>최근 프로젝트</p>
            </div>
            <div className="list-page" data-section="recent" ref={wrapRef}></div>
            <TrendList item={`<span className="hashtag">이런건</span> 어떠세요?`} />
            <div className="list-page" data-section="recent" ref={wrapRef2}></div>
        </section>
    </>
  );
}

export default Recent;
