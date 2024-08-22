import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [query, setQuery] = useState('')
    const navigate = useNavigate()
    // const searchRef = useRef(null);
    // const searchFormRef = useRef(null);

    const doSearch = (e) => {
        e.preventDefault();

        if (query.trim().length > 0) {
            let queryUri = `/search?q=${encodeURIComponent(query.trim())}`
            navigate(queryUri);
            setQuery('');
            
            // if (searchFormRef.current) {
                const searchEl = document.querySelector('.top-nav-menu-search .search-form-wrap');
                searchEl.classList.remove('search-activate');
            // }
        } else {
            alert("검색할 단어를 입력해주세요.");
            // searchRef.current.focus();
        }
    };

    return (
        <div className="search-form-wrap">
            <form className="search-form" onSubmit={doSearch} /*ref={searchFormRef}*/>
                <label htmlFor="searchItem" className="sr-only">프로젝트 검색</label>                    
                <input 
                        type="text" 
                        id="searchItem"
                        value={query} 
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="프로젝트 검색…" 
                        className="search-field" 
                    />
                <button type="submit" className="search-submit">검색</button>
            </form>
            <div className="search-form-close" data-focus="top-search-icon">
                <i className="fa-solid fa-xmark" />
            </div>
        </div>
    );
};

export default Search;