import { Helmet } from 'react-helmet-async';
import React, { useRef, useEffect, useState } from 'react';

import { renderRecentList } from 'util/getDataList';
import TrendList from 'section/trendlist';
import { getProjectList } from 'util/apiService';

const Recent = () => {

  const [data, setData] = useState([]);
  const wrapRef = useRef(null);
  const wrapRef2 = useRef(null);

  useEffect(() => {
    getProjectList()
    .then(response => {
      setData(response);
    })
    .catch(error => {
      console.error('최근 프로젝트 데이터 불러오기 실패', error);
    })
  }, []);

  useEffect(() => {
      if (wrapRef.current) { renderRecentList(data, wrapRef.current, 0, 15); }
      if (wrapRef2.current) { renderRecentList(data, wrapRef2.current, 16, 31); }
  }, [data]) // 빈 배열을 의존성으로 설정함으로서 처음 렌더링 시에만 실행

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
