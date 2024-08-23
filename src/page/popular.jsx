import { Helmet } from 'react-helmet-async';
import React, { useRef, useEffect, useState } from 'react'

import TrendList from 'section/trendlist';
import { renderPopularList, renderRateList } from 'util/getDataList';
import { getProjectList } from 'util/apiService';

const Popular = () => {

  const [data, setData] = useState([]);
  const likeRef1 = useRef(null);
  const likeRef2 = useRef(null);
  const rateRef1 = useRef(null);
  const rateRef2 = useRef(null);

  useEffect(() => {
    getProjectList()
    .then(response => {
      setData(response);
    })
    .catch(error => {
      console.error('인기 프로젝트 데이터 불러오기 실패', error);
    })
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      if (likeRef1.current) { renderPopularList(data, likeRef1.current, 0, 10); }
      if (likeRef2.current) { renderPopularList(data, likeRef2.current, 11, 21); }
      if (rateRef1.current) { renderRateList(data, rateRef1.current, 0, 10); }
      if (rateRef2.current) { renderRateList(data, rateRef2.current, 11, 21); }
    }
  }, [data]) // 빈 배열을 의존성으로 설정함으로서 처음 렌더링 시에만 실행

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
            <TrendList item={`<><span className="hashtag">이런건</span> 어떠세요?<Link to="#"><div className="ad-icon">AD</div></Link></>`} />
            <div className="list-page" data-section="rate" ref={rateRef2}></div>
        </section>
    </>
  );
}

export default Popular;
