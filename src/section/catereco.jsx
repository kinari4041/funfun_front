import React, { useRef, useEffect, useCallback, useMemo } from "react";

import Aside from "section/rank";
import sample from "data/sample"

const CateRecommand = () => {
    const wrapRef = useRef(null);

    const mainList = useMemo(() => [
        "식품", "커피", "향초", "반려 동물", "헬스케어", "디지털 미디어"
    ], []);

    // 모든 리스트들을 무작위로 가져오는 메서드
    const getRandomSubjectList = (data, subject) => {
        const item = [...data].filter(item => item.category === subject).sort(() => 0.5 - Math.random()).slice(0, 1);
        return item[0];
    };

    const renderList = useCallback((data, subject) => {
        const itemDiv = document.createElement("div")
        const item = getRandomSubjectList(data, subject)
        itemDiv.innerHTML = `
            <div class="project-subject">
                <p class="project-subject-title"><i class="${item.icon}"></i>${item.category}</p>
                <p class="project-subject-more" onClick={window.location.replace("#")}>더 보기</p>
            </div>
            <div class="project-cate-thumb-wrap" onclick={window.location.replace("#")}>
                <div class="project-cate-thumb"> <!-- 이미지 썸네일 영역 -->
                    <img src="https://picsum.photos/400/400?random=${item.id}">
                </div>
                <p class="project-cate title"> <!-- 프로젝트 제목 영역 -->
                    ${item.title}
                </p>
                <div class="project-cate rate">
                    <p class="project-cate-rate percent font14"> <!-- 달성 % 표시 영역 -->
                        <b>100%</b> 달성
                    </p>
                    <p class="project-cate-rate star font14"> <!-- 달성 % 표시 영역 -->
                        ★ 4.0
                    </p>
                </div>
                <p class="project-cate name font14"> <!-- 창작자/단체명 영역 -->
                    ${item.author}
                </p>
            </div>
        `;
        itemDiv.classList.add('project-cate-wrap');
        wrapRef.current.appendChild(itemDiv);
    }, [wrapRef]);

    useEffect(() => {
        if (wrapRef.current) { 
            mainList.forEach((subject) => {
                renderList(sample, subject); 
            }); 
        }
    }, [mainList, renderList]);

    return (
        <section id="section1" className="section-area">
            <div className="section-wrap">
                <div className="section-title">
                    <p>주제별 추천 프로젝트!</p>
                    <span>FunFun에서 선정한 주제별 추천 프로젝트</span>
                </div>
                <div className="main-cate-project" ref={wrapRef}>
                </div>
            </div>
            <Aside />
        </section>
    )
}
export default CateRecommand;