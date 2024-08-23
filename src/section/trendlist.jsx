import React, { useRef, useEffect, useState } from "react";
import parse from 'html-react-parser';

import { useData, renderData } from "util/useData";

const TrendList = (props) => {

    // userRef로 DOM 요소를 직접 참조할 수 있는 변수 생성
    const scrollRef = useRef(null);
    const wrapRef = useRef(null);

    const [ item ] = useState(props.item);
    const [ data, error ] = useData(10, 'default', 0, 10); 


    useEffect(() => {
        if (wrapRef.current && data.length > 0) {
            renderData(wrapRef.current, data)
        }
    }, [data]);

    useEffect(() => {
        if (scrollRef.current && wrapRef.current) {
            const container = scrollRef.current;
            const block = container.querySelector('.trend-project-list');
            const rightBtn = container.querySelector('.right');
            const leftBtn = container.querySelector('.left');
            const itemWidth = block.querySelector('.list-project-wrap')?.offsetWidth || 0;
        
            const buttonVisibility = () => {
                const { scrollWidth, clientWidth, scrollLeft } = block;
                leftBtn.style.display = scrollLeft > 0 ? 'flex' : 'none';
                rightBtn.style.display = scrollWidth > clientWidth + scrollLeft ? 'flex' : 'none';
            };

            const scrollHandler = () => {
                buttonVisibility();
            };

            const rightButtonHandler = () => {
                const scrollAmount = itemWidth * 2;
                block.scrollTo({left: block.scrollLeft + scrollAmount, behavior: 'smooth'});
            };

            const leftButtonHandler = () => {
                const scrollAmount = itemWidth * 2;
                block.scrollTo({left: block.scrollLeft - scrollAmount, behavior: 'smooth'});
            };

            rightBtn.addEventListener('click', rightButtonHandler);
            leftBtn.addEventListener('click', leftButtonHandler);
            block.addEventListener('scroll', scrollHandler);

            buttonVisibility();
            
            return () => {
                rightBtn.removeEventListener('click', rightButtonHandler);
                leftBtn.removeEventListener('click', leftButtonHandler);
                block.removeEventListener('scroll', scrollHandler);
            };   
        }
    }, [data]);

    if (error) {
        return <div>데이터를 불러오는데 문제가 발생했습니다.</div>
    }

    return (
        <div className="trend-project-wrap" ref={scrollRef}>
            <div className="trend-project-title">{parse(item)}</div>
            <span className="trend-project-btn right"><i className="fa-solid fa-angle-right"></i></span>
            <span className="trend-project-btn left"><i className="fa-solid fa-angle-left"></i></span>
            <div className="trend-project-block" data-section="trend-like">
                <div className="trend-project-list" ref={wrapRef}></div>
            </div>
        </div>
    )
}

export default TrendList;