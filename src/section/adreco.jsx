import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { useData, renderData } from "util/useData";

const AdRecommand = () => {
    const wrapRef = useRef(null);

    const [ itemsToRender, error ] = useData(10, 'premium'); 

    useEffect(() => {

        if (wrapRef.current && itemsToRender.length > 0) {
            renderData(wrapRef.current, itemsToRender);
        }

    }, [itemsToRender]);

    if (error) {
        return <div>데이터 로딩에 문제가 발생했습니다.</div>
    }
    
    return (
        <section id="section2"  className="section-area">
            <div className="section-title">
                <div className="ad-section-title">
                    <p>FunFun's 추천 프로젝트</p>
                    <Link to="#"><div className="ad-icon">AD</div></Link>
                </div> 
                <span>당신에게 맞춤추천</span>
            </div>
            <div className="ad-recommand-projects">
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