import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { renderDataList } from "../utils/getDataList";
import sample from "../data/sample.json";
import Header from "./header";
import TrendList from "../sections/section_trendlist";

const Search = () => {
    const {query} = useParams();
    // const [results, setResults] = useState([]);
    const wrapRef = useRef(null);

    useEffect(() => {
        const readyToSearch = decodeURIComponent(query.toLowerCase().trim());

        const filteredData = sample.filter(item =>
            item.title.toLowerCase().includes(readyToSearch) ||
            item.name.toLowerCase().includes(readyToSearch)
        );
        // setResults(filteredData);
        addSearchItem(filteredData);
    }, [query])

    const addSearchItem = (data) => {
        if (data.length > 0) {
            wrapRef.current.style.setProperty('display','grid')
            renderDataList(data, wrapRef.current, 10, false)
        } else {
            wrapRef.current.style.setProperty('display','block')
            wrapRef.current.innerHTML = `
                <div className="search-no-result-wrap">
                <p class="search-no-result">검색된 프로젝트가 없습니다.</p>
                </div>
            `;
        }
    }

    return (
        <>
            <Helmet>
              <title>FUNFUN - {query} 검색 결과</title>
            </Helmet>
            <Header />
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