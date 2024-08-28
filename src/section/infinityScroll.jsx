import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async';

import { renderData } from 'util/useData';
import { getPopularList } from 'util/apiService';
import { SyncLoader } from 'react-spinners';

const InfinityScroll = () => {

  const wrapRef = useRef(null);
  const observerRef = useRef(null);
  const needSort = true;

  const [data, setData] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [sortBy, setSortBy] = useState('likes');
  const [error, setError] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(0);
  const perPage = 8;

  const fetchData = useCallback(async () => {

      setIsLoading(true);
      try {
        const response = await getPopularList(sortBy);
        setLimit(response.length);
        setFullData(prevData => [...prevData, ...response]);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
  }, [sortBy]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    // 옵저버가 탐지할 엘리먼트를 useRef를 사용하여 지정
    const observerEl = observerRef.current;

    // 무한 스크롤 구현을 위한 옵저버 생성
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasMore && !isLoading) {
          setPage(prevPage => prevPage + 1);
          if (data.length >= limit) {
            setHasMore(false);
          }
        }
      },
      { threshold: 1 }
    );
    observer.observe(observerEl);

    // 언마운트되면 클린업 함수로 옵저버 삭제
    return () => {
      if (observerEl) {
        observer.unobserve(observerEl);
      }
    };
  }, [hasMore, isLoading, page, data.length, limit]);

  useEffect(() => {
    setData(fullData.slice(0, page * perPage));
  }, [fullData, page, limit]);

  // 정렬 기준 변경시, 기존에 렌더링된 데이터 초기화
  const handleSortChange = (sort) => {
      if (sort !== sortBy) {
        setSortBy(sort);
        setFullData([]);
        setPage(1);
        setHasMore(true);
      }
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
            {/* 정렬 버튼 활성화/비활성화 */}
            {needSort &&
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
            }
            {/* 오류가 발생했을 경우, 오류 문구 출력 */}
            {error ? (
              <div className="search-no-result-wrap">
                <p className="search-no-result">데이터를 불러오지 못했습니다.</p>
                <p className="search-no-result">데이터가 없거나, 오류가 발생했습니다.</p>
            </div>
            ) : ( 
              <>
                {/* 정상적으로 로딩되면, 데이터 렌더링 메서드 호출 */}
                <div className="list-page" ref={wrapRef}></div>
                {renderData(wrapRef.current, data, sortBy)}
                {isLoading && <div className='loading-screen'><SyncLoader /></div>}
              </>
            )}
            {/* 추가 로딩중이면 불러오는 안내문구 출력 */}
            {isLoading && 
              <div className="search-no-result-wrap">
              <p className="search-no-result">불러오는 중...</p>
              </div>}
            <div id="observer" style={{ height: "10px" }} ref={observerRef}></div>
          </section>
    </>
  );
}

export default InfinityScroll;
