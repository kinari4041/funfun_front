import { Helmet } from 'react-helmet-async';
import React, { useRef } from 'react'

import TrendList from 'section/trendlist';
import { useData } from 'util/useData';

const Popular = () => {

  const likeRef1 = useRef(null);
  const likeRef2 = useRef(null);
  const rateRef1 = useRef(null);
  const rateRef2 = useRef(null);

  const [errorLike1] = useData(likeRef1.current, 10, 'popular', 0, 10);
  const [errorLike2] = useData(likeRef2.current, 10, 'popular', 11, 21);
  const [errorRate1] = useData(rateRef1.current, 10, 'rate', 0, 10);
  const [errorRate2] = useData(rateRef2.current, 10, 'rate', 11, 21);

  if (errorLike1 || errorLike2 || errorRate1 || errorRate2 ){
    return <div>데이터 로딩에 문제가 발생했습니다.</div>
  }

  return (
    <>
      <Helmet>
        <title>FunFun - 인기 프로젝트</title>
      </Helmet>
        <section id="like" className="section-area">
            <div className="section-title">
                <p>인기 프로젝트 목록 - 좋아요 순</p>
            </div>
            <div className="list-page" data-section="like" ref={likeRef1}></div>
            <TrendList item={`<span className="hashtag">이런건</span> 어떠세요?<Link to="#"><div className="ad-icon">AD</div></Link>`} />
            <div className="list-page" data-section="like" ref={likeRef2}></div>
        </section>
        <section id="rate" className="section-area">
            <div className="section-title">
                <p>인기 프로젝트 목록 - 평점 순</p>
            </div>
            <div className="list-page" data-section="rate" ref={rateRef1}></div>
            <TrendList item={`<span className="hashtag">이런건</span> 어떠세요?<Link to="#"><div className="ad-icon">AD</div></Link>`} />
            <div className="list-page" data-section="rate" ref={rateRef2}></div>
        </section>
    </>
  );
}

export default Popular;
