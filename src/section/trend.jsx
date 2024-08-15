import React from "react";

import TrendList from "section/trendlist";

const Trend = () => {

    return (
        <section id="section3" className="section-area">
            <div className="section-title">
                <p>요즘 뜨고 있는 프로젝트</p>
                <span>지금 핫한 프로젝트들만 모아봤어요</span>
            </div>
            <div className="trend-project">
                <TrendList item={`오늘 가장 많은 <span className="hashtag">#좋아요</span>를 받은 프로젝트`} />
                <hr />
                <TrendList item={`실시간 <span className="hashtag">#인기</span> 프로젝트!`} />
                <hr />
                <TrendList item={`[고객]님이 관심있는 <span className="hashtag">#키워드</span>에 대한 프로젝트!`} />
            </div>
        </section>
    )
}
export default Trend;