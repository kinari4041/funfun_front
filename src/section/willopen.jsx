import React, { useRef, useEffect } from "react";

import { renderDataList } from "util/getDataList";
import sample from "data/sample.json";

const WillOpen = () => {
    const wrapRef = useRef(null);

    useEffect(() => {
        if (wrapRef.current) {
            renderDataList(sample, wrapRef.current, 10);
        }
    });

    return (
        <section id="section4" className="section-area">
            <div className="section-title">
                <p>모두 주목! 오픈 예정 프로젝트</p>
                <span>얼리버드 혜택 받아가세요</span>
            </div>
            <div className="list-page" data-section="scheduled" ref={wrapRef}></div>
        </section>
    )
}
export default WillOpen;