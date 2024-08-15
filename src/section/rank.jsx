import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import  { getProjectRankList } from "util/getDataList";
import sample from "data/sample.json";

const Aside = () => {
    const wrapRef = useRef(null);

    useEffect(() => {
        if (wrapRef.current) { renderList() }
    }, [])

    const renderList = () => {
        // 차후 데이터는 쿼리문을 통해 랭킹순으로 불러와서 출력
        getProjectRankList(sample, 10).forEach((data) => {
            const liList = document.createElement("li")
            liList.innerHTML = `
                <Link to="/">
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
                </Link>
            `
            wrapRef.current.appendChild(liList);
        });
    }

    return (
        <aside>
            <p className="aside-title"><i className="fa-solid fa-ranking-star"></i>실시간 프로젝트 랭킹</p>
            <ul className="rank-wrap" ref={wrapRef}>
            </ul>
            <Link to="#">
                <div className="aside-ad">
                    <p>AD AREA</p>
                </div>
            </Link>
        </aside>
    )
}

export default Aside;