import React, { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { renderSubCateEl } from "../utils/renderSubCateEl";
import { addStickyNavListener } from "../utils/stickyNavListener";
import { addLoginSearchListener } from "../utils/headerLoginSearch";
import { useLocation } from "react-router-dom";
import cateData from "../data/catedata.json"

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isRegister = location.pathname === '/register';

    useEffect(() => {
        addStickyNavListener();
        addLoginSearchListener();
        renderSubCateEl(cateData);
    }, [])

    const doLogin = () => {
        const loginId = document.getElementById('loginId');
        const loginPw = document.getElementById('loginPw');

        if(loginId.value.length === 0) {
            alert("아이디를 입력해주세요.");
            loginId.focus();
            return false;
        } else if (loginPw.value.length === 0) {
            alert("비밀번호를 입력해주세요.");
            loginPw.focus();
            return false;
        }  else {
            alert("로그인 테스트");
        }
    }

    const doSearch = (e) => {
        e.preventDefault();
        const searchInput = document.querySelector('.search-field');
        const query = searchInput.value.trim();

        if (searchInput.value.length > 1) {
            let queryUri = `/search/${encodeURIComponent(query)}`
            navigate(queryUri);
            const searchEl = document.querySelector('.top-nav-menu-search .search-form-wrap');
            searchEl.classList.remove('search-activate');
        } else {
            alert("입력한 단어가 너무 짧거나 없습니다.");
            searchInput.focus();
            return false;
        }
    }
    
    return (
        <header className={isRegister ? 'hide' : ''}>
            <div id="top-nav">
                <div className="top-nav-site-wrap">
                    <Link to="/" className="top-nav-title">
                        <div className="top-nav-logo"><i className="fa-regular fa-face-smile-wink" /></div>
                        <h3>FUNFUN</h3>
                    </Link>
                    <div className="top-nav-site-menu">
                        <ul>
                            <Link to="/"><li>메인</li></Link>
                            <Link to="#"><li>인기</li></Link>
                            <Link to="#"><li>최신</li></Link>
                            <Link to="#"><li>오픈예정</li></Link>
                            <Link to="#"><li>스토어</li></Link>
                        </ul>
                    </div> 
                </div> 
                <div className="top-nav-btn-wrap">
                     <div className="top-nav-menu-login">
                        <div className="login-button">
                            <Link to="#">로그인 / 회원가입</Link>
                        </div>
                        <div className="login-form-wrap">
                            <form action="#" name="loginField" className="login-form">
                                <div className="login-form-title">
                                    <p>로그인 / 회원가입</p>
                                    <div className="login-form-close" data-focus="top-login-icon">
                                        <i className="fa-solid fa-xmark" />
                                    </div>
                                </div>
                                <fieldset>
                                    <div className="login-message">
                                    </div>
                                    <input type="text" name="id" id="loginId" placeholder="Username" />
                                    <input type="password" name="pw" id="loginPw" placeholder="Password" />
                                    <div className="login-btn-area">
                                        <p className="forgot">아이디 / 비밀번호 찾기</p>
                                        <button type="button" className="login" onClick={doLogin}> 로그인 </button>
                                    </div>
                                    <div className="login-stripe">
                                      <span className="stripe-line"></span>
                                      <span className="stripe-text">또는</span>
                                      <span className="stripe-line"></span>
                                    </div>
                                    <div className="login-method">
                                        <div className="login-method-control">
                                          <Link to="#" className="login-method-action">
                                            <i className="fa-brands fa-google" />
                                            <span>구글 계정으로 로그인</span>
                                          </Link>
                                        </div>
                                        <div className="login-method-control">
                                          <Link to="#" className="login-method-action">
                                            <i className="fa-brands fa-facebook-f" />
                                            <span>페이스북 계정으로 로그인</span>
                                          </Link>
                                        </div>
                                    </div>
                                </fieldset>
                                <div className="login-form-bottom">
                                    <p className="not-member">아직 회원이 아니신가요?</p>
                                    <Link to="./register" className="register"> 회원가입 </Link>
                                </div>
                            </form>
                        </div> 
                    </div>
                <Link to="#" className="top-nav-btn-project">프로젝트 만들기</Link>
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
                           <Link to="#"><i className="fa-solid fa-magnifying-glass" /><span></span>프로젝트 검색</Link>
                        </div>
                        <div className="search-form-wrap">
                            <form className="search-form">
                                <label>
                                    <input type="search" className="search-field" placeholder="프로젝트 검색…" />
                                </label>
                                <button type="submit" className="search-submit" onClick={doSearch}>검색</button>
                            </form>
                            <div className="search-form-close" data-focus="top-search-icon">
                                <Link to="#">
                                    <i className="fa-solid fa-xmark" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </header>
    );
}

export default Header;