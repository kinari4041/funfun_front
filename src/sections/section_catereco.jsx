import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getPopularProjects } from "../utils/getPopularProjects";
import sample from "../data/sample"

class CateRecommand extends Component {

    appendRank = (tempData) => {
        const maxCount = 10;
        let count = 0;
        // 차후 데이터는 쿼리문을 통해 랭킹순으로 불러와서 출력
        tempData.forEach((data) => {
            const template = document.createElement("li");
            template.innerHTML = `
                    <a href="">
                        <div class="rank-items">
                            <div class="rank-items__front">
                                <p class="rank-number">${data.rank}</p>
                                <p class="rank-title">${data.title}</p>
                            </div>
                            <div class="rank-items__back">
                                <p class="rank-like">
                                    <i class="fa-solid fa-heart"></i>
                                    ${data.like}
                                </p>
                                <p class="rank-title">${data.author}</p>
                            </div>
                        </div>
                    </a>
                `;
            if (count < maxCount) {
                document.querySelector(".rank-wrap").append(template);
                count++;
            } 
        });
    }

    appendEl = (tempData, index) => {
        const cateWraps = document.querySelector('.main-cate-project');
        const template = document.createElement("div");
        template.classList.add('project-cate-wrap');
        template.innerHTML = `
            <div class="project-subject">
                <p class="project-subject-title"><i class="${tempData[index].icon}"></i>${tempData[index].category}</p>
                <Link to="#" class="project-subject-more">더 보기</Link>
            </div>
            <div class="project-cate-thumb-wrap" onclick={window.location.replace("#")}>
                <div class="project-cate-thumb"> <!-- 이미지 썸네일 영역 -->
                    <img src="https://picsum.photos/400/400?random=${tempData[index].id}">
                </div>
                <p class="project-cate title"> <!-- 프로젝트 제목 영역 -->
                    ${tempData[index].title}
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
                    ${tempData[index].author}
                </p>
            </div>
        `;
        cateWraps.append(template);
    }

    componentDidMount() {
        let count = 0; const maxCount = 6;
        const mainList = ["식품", "커피", "향초", "반려 동물", "헬스케어", "디지털 미디어"]

        sample.forEach((data) => {
            if (count < maxCount) {
                let dataset = mainList[count];

                if (dataset === `${data.category}`) {
                    const tempData = sample.filter(
                        data => data.category === mainList[count]);
                    const index = (Math.floor(Math.random()*tempData.length));
                    this.appendEl(tempData, index);
                    count++;
                }
            } 
        });
        this.appendRank(getPopularProjects(sample, 10));
    }

    render() {
        return (
            <section id="section1" className="section-area">
                <div className="section-wrap">
                    <div className="section-title">
                        <p>주제별 추천 프로젝트!</p>
                        <span>FunFun에서 선정한 주제별 추천 프로젝트</span>
                    </div>
                    <div className="main-cate-project">
                    </div>
                </div>

                <aside>
                    <p className="aside-title"><i className="fa-solid fa-ranking-star"></i>실시간 프로젝트 랭킹</p>
                    <ul className="rank-wrap">
                    </ul>
                    <Link to="#">
                        <div className="aside-ad">
                            <p>AD AREA</p>
                        </div>
                    </Link>
                </aside>
            </section>
        )
    }
}
export default CateRecommand;