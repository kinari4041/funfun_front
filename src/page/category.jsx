import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { renderData } from "util/useData";
import TrendList from "section/trendlist";
import { discoverProjects } from "util/apiService";

const Category = () => {
    const location = useLocation();
    const wrapRef = useRef(null);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [sortBy, setSortBy] = useState('upload');
    const [currentSub, setCurrentSub] = useState('');

    const params = new URLSearchParams(location.search);
    const main = decodeURIComponent(params.get('main'));
    const sub = decodeURIComponent(params.get('sub') || '');

    useEffect(() => {
        setCurrentSub(sub === 'all' ? '' : sub);
    }, [sub])

    useEffect(() => {
        const cateData = async () => {
            try {
                const response = await discoverProjects(main, currentSub, sortBy);
                setData(response);
            } catch (err) {
                setError(err);
            }
        };
        cateData();
    }, [main, currentSub, sortBy]);

    useEffect(() => {
        if (wrapRef.current) {
            if (error) {
                wrapRef.current.style.setProperty('display','block')
                wrapRef.current.innerHTML = `
                    <div className="search-no-result-wrap">
                    <p class="search-no-result">데이터 로딩중 문제가 발생했습니다.</p>
                    </div>
                `;
            } else if (data.length > 0) {
                wrapRef.current.style.setProperty('display','grid')
                renderData(wrapRef.current, data)
            } else {
                wrapRef.current.style.setProperty('display','block')
                wrapRef.current.innerHTML = `
                    <div className="search-no-result-wrap">
                    <p class="search-no-result">해당 카테고리의 프로젝트가 아직 없습니다.</p>
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
              <title>FUNFUN - {(sub === 'all') ? main : `${main}, ${sub}`} 프로젝트</title>
            </Helmet>
            <section id="category" className="section-area">
                <div className="search-title-wrap">
                    <div className="section-title">
                        <p>{(currentSub === 'all') ? main : `${main} - ${currentSub}`} 관련 프로젝트</p>
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

export default Category;