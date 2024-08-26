import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async';

import { renderData } from 'util/useData';
import { getPopularList } from 'util/apiService';

const Popular = () => {

  const wrapRef = useRef(null);
  const observerRef = useRef(null);

  const [data, setData] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [sortBy, setSortBy] = useState('likes');
  const [error, setError] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
  const [limit] = useState(8);

  const fetchData = useCallback(async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(false);
      try {
        const response = await getPopularList(sortBy);
        setFullData(prevData => [...prevData, ...response]);

        if (response.length < limit) {
          setHasMore(false);
        }
      } catch (err) {
        setError(err);
      } finally {
      setIsLoading(false);
      }
  }, [isLoading, hasMore, sortBy, limit]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    const observerEl = observerRef.current;
    if (!observerEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasMore && !isLoading) {
          setPage(prevPage => prevPage + 1);
        }
      },
      { threshold: 1.0 }
    );
    observer.observe(observerEl);

    return () => {
      if (observerEl) {
        observer.unobserve(observerEl);
      }
    };
  }, [hasMore, isLoading]);

  useEffect(() => {
    setData(fullData.slice(0, (page + 1) * limit));
  }, [fullData, page, limit]);

  useEffect (() => {
    if (wrapRef.current) {
      if (error) {
          wrapRef.current.style.setProperty('display','block')
          wrapRef.current.innerHTML = `
              <div className="search-no-result-wrap">
              <p class="search-no-result">데이터를 불러오는 중 문제가 발생했습니다.</p>
              </div>
          `;
      } else if (data.length > 0) {
          wrapRef.current.style.setProperty('display','grid')
          renderData(wrapRef.current, data)
      } else {
          wrapRef.current.style.setProperty('display','block')
          wrapRef.current.innerHTML = `
              <div className="search-no-result-wrap">
              <p class="search-no-result">프로젝트가 존재하지 않거나 불러오는 중 입니다.</p>
              </div>
          `;
        }
      }
    }, [data, error]);

  const handleSortChange = (sort) => {
      setSortBy(sort);
      setFullData([]);
      setPage(0);
      setHasMore(true);
  };

  return (
    <>
      <Helmet>
        <title>FunFun - 인기 프로젝트</title>
      </Helmet>
        <section id="popular" className="section-area">
            <div className="section-title">
                <p>인기 프로젝트 목록 - {(sortBy === 'likes') ? '좋아요 순' : 'FUN 점수'}</p>
            </div>
            <div className="search-sort">
                <button 
                    type="button"
                    className={sortBy === 'likes' ? 'active' : ''} 
                    onClick={() => handleSortChange('likes')}>
                    좋아요 순
                </button>
                <button 
                    type="button"
                    className={sortBy === 'fun' ? 'active' : ''} 
                    onClick={() => handleSortChange('fun')}>
                    FUN 점수
                </button>
            </div>
            <div className="list-page" ref={wrapRef}></div>
            {isLoading && 
              <div className="search-no-result-wrap">
              <p class="search-no-result">불러오는 중...</p>
              </div>}
            <div id="observer" style={{ height: "10px" }} ref={observerRef}></div>
          </section>
    </>
  );
}

export default Popular;
