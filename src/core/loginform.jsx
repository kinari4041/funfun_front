import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
    const [loginId, setLoginId] = useState('');
    const [loginPw, setLoginPw] = useState('');
    const [error, setError] = useState('');
    const idRef = useRef();
    const pwRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        setError('');
        // const loginId = document.getElementById('loginId');
        // const loginPw = document.getElementById('loginPw');

        if(loginId.trim().length === 0) {
            setError("아이디를 입력해주세요.");
            idRef.current.focus();
            return;
        } else if (loginPw.trim().length === 0) {
            setError("비밀번호를 입력해주세요.");
            pwRef.current.focus();
            return;
        }  else {
            alert("로그인 테스트");
        }
    };

    const close = (e) => {
        setError('');
    }

    return (
        <div className="login-form-wrap">
        <form onSubmit={submitHandler} className="login-form">
            <div className="login-form-title">
                <p>로그인 / 회원가입</p>
                <div className="login-form-close" data-focus="top-login-icon" onClick={close}>
                    <i className="fa-solid fa-xmark" />
                </div>
            </div>
            <fieldset>
                {error && <div className="login-message"><p>{error}</p></div>}
                <label htmlFor="loginID">아이디</label>
                <input 
                    type="text" 
                    id="loginId" 
                    placeholder="아이디(email)"
                    value={loginId}
                    onChange={(e) => setLoginId(e.target.value)} 
                    ref={idRef}
                />
                <label htmlFor="loginPW">비밀번호</label>
                <input 
                    type="password" 
                    id="loginPw" 
                    placeholder="비밀번호" 
                    value={loginPw}
                    onChange={(e) => setLoginPw(e.target.value)}
                    ref={pwRef}
                />
                <div className="login-btn-area">
                    <p className="forgot">아이디 / 비밀번호 찾기</p>
                    <button type="submit" className="login"> 로그인 </button>
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
    );
};

export default LoginForm;