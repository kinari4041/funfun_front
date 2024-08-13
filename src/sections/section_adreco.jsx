import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import sample from "../data/sample.json";
import { renderDataList } from "../utils/getDataList";
import { addHorizontalScrollListener } from "../utils/horizontalScroll";

const AdRecommand = () => {
    const wrapRef = useRef(null);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (wrapRef.current) { 
            renderDataList(sample, wrapRef.current, 10, true, true); 
        }

        if (scrollRef.current) {
            const cleanup = addHorizontalScrollListener(scrollRef.current);
            return cleanup;
        }
    }, [])

    return (
        <section id="section2"  className="section-area">
            <div className="section-title">
                <div className="ad-section-title">
                    <p>FunFun's 추천 프로젝트</p>
                    <Link to="#"><div className="ad-icon">AD</div></Link>
                </div> 
                <span>당신에게 맞춤추천</span>
            </div>
            <div ref={scrollRef} className="ad-recommand-projects">
                <span className="trend-project-btn right">
                    <i className="fa-solid fa-angle-right" />
                </span>
                <span className="trend-project-btn left">
                    <i className="fa-solid fa-angle-left" />
                </span>
                <div className="trend-project-block" data-section="recommand">
                    <div ref={wrapRef} className="trend-project-list ad-projects" />
                </div>
            </div>
            <Link to="#">
                <div className="banner">
                    <p>AD AREA</p>
                </div>
            </Link>
        </section>
    )
}
export default AdRecommand;