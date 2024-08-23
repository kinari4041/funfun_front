import React, { useEffect, useState } from "react";

import TrendList from "util/getTrendList";
import { getProjectList } from "util/apiService";

const Trend = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getProjectList()
        .then(response => {
          setData(response);
        })
        .catch(error => {
          console.error('최근 프로젝트 불러오기 실패', error);
        })
      }, []);

    return (
        <section id="section3" className="section-area">
            <div className="section-title">
                <p>요즘 뜨고 있는 프로젝트</p>
                <span>지금 핫한 프로젝트들만 모아봤어요</span>
            </div>
            <div className="trend-project">
                <TrendList item={`오늘 가장 많은 <span className="hashtag">#좋아요</span>를 받은 프로젝트`} data = {data} />
                <hr />
                <TrendList item={`실시간 <span className="hashtag">#인기</span> 프로젝트!`} data = {data} />
                <hr />
                <TrendList item={`[고객]님이 관심있는 <span className="hashtag">#키워드</span>에 대한 프로젝트!`} data = {data} />
            </div>
        </section>
    )
}
export default Trend;