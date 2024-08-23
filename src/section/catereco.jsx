import React, { useRef, useEffect, useCallback, useMemo, useState } from "react";
import { getProjectList } from "util/apiService";

import Aside from "section/rank";

const CateRecommand = () => {
    const [data, setData] = useState([]);
    const wrapRef = useRef(null);

    const mainList = useMemo(() => [
        "식품", "커피", "향초", "반려 동물", "헬스케어", "디지털 미디어"
    ], []);

    // 모든 리스트들을 무작위로 가져오는 메서드
    const getRandomSubjectList = (subject) => {
        const item = [...data].filter(item => item.projectMainCate === subject).sort(() => 0.5 - Math.random()).slice(0, 1);
        return item[0];
    };

    const renderList = useCallback((subject) => {
        const itemDiv = document.createElement("div")
        const item = getRandomSubjectList(data, subject)
        itemDiv.innerHTML = `
            <div class="project-subject">
                <p class="project-subject-title"><i class=""></i>${item.projectMainCate}</p>
                <p class="project-subject-more" onClick={window.location.replace("#")}>더 보기</p>
            </div>
            <div class="project-cate-thumb-wrap" onclick={window.location.replace("#")}>
                <div class="project-cate-thumb"> <!-- 이미지 썸네일 영역 -->
                    <img src="https://picsum.photos/400/400?random=${item.projectId}">
                </div>
                <p class="project-cate title"> <!-- 프로젝트 제목 영역 -->
                    ${item.articleTitle}
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
                    ${item.userNickname}
                </p>
            </div>
        `;
        itemDiv.classList.add('project-cate-wrap');
        wrapRef.current.appendChild(itemDiv);
    }, [wrapRef]);

    useEffect(() => {
        getProjectList()
        .then(response => {
          setData(response);
        })
        .catch(error => {
          console.error('메인 주제별 프로젝트 데이터 불러오기 실패', error);
        })
      }, []);
    a
    useEffect(() => {
        if (wrapRef.current) { 
            mainList.forEach((subject) => {
                renderList(data, subject); 
            }); 
        }
    }, [data, mainList, renderList]);

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