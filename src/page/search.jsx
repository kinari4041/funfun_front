import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

import { renderRecentList } from "util/getDataList";
import TrendList from "section/trendlist";
import sample from "data/sample.json";

const Search = () => {
    const location = useLocation();
    const wrapRef = useRef(null);

    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('q') || '';

    useEffect(() => {
        const readyToSearch = decodeURIComponent(query.toLowerCase().trim());

        const filteredData = sample.filter(item =>
            item.title.toLowerCase().includes(readyToSearch) ||
            item.name.toLowerCase().includes(readyToSearch)
        );
        if (filteredData.length > 0) {
            wrapRef.current.style.setProperty('display','grid')
            renderRecentList(filteredData, wrapRef.current, 0, 99)
        } else {
            wrapRef.current.style.setProperty('display','block')
            wrapRef.current.innerHTML = `
                <div className="search-no-result-wrap">
                <p class="search-no-result">검색된 프로젝트가 없습니다.</p>
                </div>
            `;
        }

    }, [query])

    return (
        <>
            <Helmet>
              <title>FUNFUN - {query} 검색 결과</title>
            </Helmet>
            <section id="search" className="section-area">
                <div className="section-title">
                    <p>"{query}" 검색 결과</p>
                </div>
                <div className="list-page" data-section="search" ref={wrapRef}></div>
                <TrendList item={`<span className="hashtag">이런건</span> 어떠세요?`} />
            </section>
        </>
    );
};

export default Search;