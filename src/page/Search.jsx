import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { renderData } from "util/useData";
import TrendList from "section/trendlist";
import { searchProjects } from "util/apiService";

const Search = () => {
    const location = useLocation();
    const wrapRef = useRef(null);
    const [data, setData] = useState([]);
    const [sortBy, setSortBy] = useState('upload');
    const [error, setError] = useState(null);
    
    const queryParams = new URLSearchParams(location.search);
    const searchTerm = queryParams.get('q') || '';

    useEffect(() => {
        const searchData = async () => {
            try {
                const response = await searchProjects(searchTerm, sortBy);
                setData(response);
            } catch (err) {
                setError(err);
            }
        };
        searchData();
    }, [searchTerm, sortBy]);

    useEffect(() => {
        if (wrapRef.current) {
            if (error) {
                wrapRef.current.style.setProperty('display','block')
                wrapRef.current.innerHTML = `
                    <div className="search-no-result-wrap">
                    <p class="search-no-result">검색 결과 데이터 로딩중 문제가 발생했습니다.</p>
                    </div>
                `;
            } else if (data.length > 0) {
                wrapRef.current.style.setProperty('display','grid')
                renderData(wrapRef.current, data)
            } else {
                wrapRef.current.style.setProperty('display','block')
                wrapRef.current.innerHTML = `
                    <div className="search-no-result-wrap">
                    <p class="search-no-result">검색된 프로젝트가 없습니다.</p>
                    </div>
             `;
            }
    }}, [data, error]);

    const handleSortChange = (sort) => {
        setSortBy(sort);
    };

    return (
        <>
            <Helmet>
              <title>FUNFUN - {searchTerm} 검색 결과</title>
            </Helmet>
            <section id="search" className="section-area">
                <div className="search-title-wrap">
                    <div className="section-title">
                        <p>"{searchTerm}" 검색 결과</p>
                    </div>
                    <div className="search-sort">
                        <button 
                            className={sortBy === 'upload' ? 'active' : ''} 
                            onClick={() => handleSortChange('upload')}>
                            최신순
                        </button>
                        <button 
                            className={sortBy === 'likes' ? 'active' : ''} 
                            onClick={() => handleSortChange('likes')}>
                            좋아요
                        </button>
                        <button 
                            className={sortBy === 'fun' ? 'active' : ''} 
                            onClick={() => handleSortChange('fun')}>
                            FUN 점수
                        </button>
                    </div>
                </div>
                <div className="list-page" data-section="search" ref={wrapRef}></div>
                <TrendList item={`<span className="hashtag">이런건</span> 어떠세요?`} />
            </section>
        </>
    );
};

export default Search;