import { Helmet } from 'react-helmet-async';
import React, { useRef } from 'react';

import { useData } from 'util/useData';
import TrendList from 'section/trendlist';

const Recent = () => {

  const wrapRef = useRef(null);
  const wrapRef2 = useRef(null);

  const [ errorRecent1 ] = useData(wrapRef.current, 15, 'recent', 0, 15);
  const [ errorRecent2 ] = useData(wrapRef2.current, 15, 'recent', 16, 31);
  
  if (errorRecent1 || errorRecent2 ){
    return <div>데이터 로딩에 문제가 발생했습니다.</div>
  }

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
