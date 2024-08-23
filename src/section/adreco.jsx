import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { useData } from "util/useData";
import horizontalScroll from "util/horizontalScroll";

const AdRecommand = () => {
    const wrapRef = useRef(null);
    const scrollRef = useRef(null);

    const [ adError ] = useData(wrapRef.current, 10, 'premium'); 

    if (adError) {
        return <div>데이터 로딩에 문제가 발생했습니다.</div>
    }
    
    useEffect(() => {
        if (scrollRef.current) {
            horizontalScroll(scrollRef.current);
        }
    }, []);

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