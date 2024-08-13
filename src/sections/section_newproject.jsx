import React, { useEffect, useRef } from "react";
import sample from "../data/sample.json";
import { renderRecentDataList } from "../utils/getDataList";

const NewProject = () => {

    const wrapRef = useRef(null);

    useEffect(() => {
        if (wrapRef.current) {
            renderRecentDataList(sample, wrapRef.current, 0, 10);
        }
    }, []) // 빈 배열을 의존성으로 설정함으로서 처음 렌더링 시에만 실행

    return (
        <section id="section5" className="section-area">
            <div className="section-title">
                <p>최근 오픈한 프로젝트</p>
                <span>따끈따끈! 방금 오픈한 프로젝트들</span>
            </div>
            <div className="list-page" data-section="recent" ref={wrapRef}></div>
        </section>
    )
}
export default NewProject;