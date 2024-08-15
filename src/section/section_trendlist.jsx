import React, { useRef, useEffect, useState } from "react";
import parse from 'html-react-parser';

import { renderDataList } from "util/getDataList";
import horizontalScroll from "util/horizontalScroll";
import sample from "data/sample.json";

const TrendList = (props) => {

    const [item] = useState(props.item);
    // userRef로 DOM 요소를 직접 참조할 수 있는 변수 생성
    const scrollRef = useRef(null);
    const wrapRef = useRef(null);

    // 컴포넌트가 렌더링되면서 useEffect가 실행됨
    useEffect(() => {
        // 컴포넌트가 렌더링되고 renderRandomDataList 메서드를 사용하여
        // trend-project-list에 프로젝트 데이터 목록을 렌더링함
        if (wrapRef.current) { 
            renderDataList(sample, wrapRef.current, 10); 
        }
        // renderRandomDataList를 통해 목록이 렌더링된 이후
        // 스크롤 및 버튼 이벤트 리스너를 설정함
        if (scrollRef.current) {
            // 컴포넌트가 언마운트될 때 호출될 정리 함수를 생성하고 scrollRef가 존재하면
            // horizontalScroll 메서드의 매개변수로 scrollRef를 사용하여
            // trend-project-wrap을 매개변수로 보냄
            const cleanup = horizontalScroll(scrollRef.current);
            return cleanup;
        }
    }, []);

    return (
        <div className="trend-project-wrap" ref={scrollRef}>
            <p className="trend-project-title">{parse(item)}</p>
            <span className="trend-project-btn right"><i className="fa-solid fa-angle-right"></i></span>
            <span className="trend-project-btn left"><i className="fa-solid fa-angle-left"></i></span>
            <div className="trend-project-block" data-section="trend-like">
                <div className="trend-project-list" ref={wrapRef}></div>
            </div>
        </div>
    )
}
export default TrendList;