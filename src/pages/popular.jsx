import { Header, Footer } from '.';
import { Helmet } from 'react-helmet-async';
import { renderPopularDataList } from '../utils/getDataList';
import React, { useRef, useEffect } from 'react'
import sample from '../data/sample.json'
import TrendList from '../sections/section_trendlist';

const Popular = () => {

  const likeRef1 = useRef(null);
  const likeRef2 = useRef(null);
  const rateRef1 = useRef(null);
  const rateRef2 = useRef(null);

  useEffect(() => {
      if (likeRef1.current) { renderPopularDataList(sample, likeRef1.current, 0, 10, "like"); }
      if (likeRef2.current) { renderPopularDataList(sample, likeRef2.current, 11, 21, "like"); }
      if (rateRef1.current) { renderPopularDataList(sample, rateRef1.current, 0, 10, "rate"); }
      if (rateRef2.current) { renderPopularDataList(sample, rateRef2.current, 11, 21, "rate"); }
  }, []) // 빈 배열을 의존성으로 설정함으로서 처음 렌더링 시에만 실행

  return (
    <>
      <Helmet>
        <title>FunFun - 인기 프로젝트</title>
      </Helmet>
      <Header />
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
      <Footer />
    </>
  );
}

export default Popular;
