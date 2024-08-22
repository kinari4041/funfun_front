import React, { useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';

import subCategory from "util/subCategory";
import stickyNav from "util/stickyNav";
import headerPopups from "util/headerPopups";
import SearchForm from "./searchform";
import LoginForm from "./loginform"
import cateData from "data/catedata.json"

const Header = () => {
    const location = useLocation();
    const isPage = (page) => location.pathname === page;

    useEffect(() => {
        stickyNav();
        headerPopups();
        subCategory(cateData);
    }, [])

    return (
        <header>
            <div id="top-nav">
                <div className="top-nav-site-wrap">
                    <Link to="/" className="top-nav-title">
                        <div className="top-nav-logo"><i className="fa-regular fa-face-smile-wink" /></div>
                        <h3>FUNFUN</h3>
                    </Link>
                    <div className="top-nav-site-menu">
                        <ul>
                            <Link to="/"><li className={isPage("/") ? 'active' : ''}>메인</li></Link>
                            <Link to="/popular"><li className={isPage("/popular") ? 'active' : ''}>인기</li></Link>
                            <Link to="/recent"><li className={isPage("/recent") ? 'active' : ''}>최신</li></Link>
                            <Link to="#"><li className={isPage("/open") ? 'active' : ''}>오픈예정</li></Link>
                            <Link to="#"><li className={isPage("/story") ? 'active' : ''}>스토리</li></Link>
                        </ul>
                    </div> 
                </div> 
                <div className="top-nav-btn-wrap">
                     <div className="top-nav-menu-login">
                        <LoginForm />
                    </div>
                <Link to="/pjtregist" className="top-nav-btn-project">프로젝트 만들기</Link>
                </div> 
            </div>
            <div id="cate-nav">
                <div className="cate-nav-wrap">
                    <div className="cate-title">
                        <div className="cate-title-block">
                            <div className="cate-title-el" data-text="식품"><span>식품</span></div>
                            <div className="cate-title-el" data-text="커피"><span>커피</span></div>
                            <div className="cate-title-el" data-text="향초"><span>향초</span></div>
                            <div className="cate-title-el" data-text="반려 동물"><span>반려 동물</span></div>
                            <div className="cate-title-el" data-text="헬스 케어"><span>헬스케어</span></div>
                            <div className="cate-title-el" data-text="디지털 미디어"><span>디지털 미디어</span></div>
                            <div className="cate-title-el" data-text="홈/리빙"><span>홈/리빙</span></div>
                            <div className="cate-title-el" data-text="패션"><span>패션</span></div>
                            <div className="cate-title-el" data-text="문구"><span>문구</span></div>
                        </div>
                    </div>
                     <div className="top-nav-menu-search">
                        <div className="search-icon">
                           <i className="fa-solid fa-magnifying-glass" />
                           <span></span>프로젝트 검색
                        </div>
                        <SearchForm />
                    </div>
                </div>
            </div> 
        </header>
    );
}

export default Header;