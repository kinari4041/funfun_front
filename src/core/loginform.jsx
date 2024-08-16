import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Naver from "img/ico_naver.png";

const LoginForm = () => {
    // 로그인, 비밀번호 에러 메시지 출력을 위한 useState 사용 
    const [loginId, setLoginId] = useState('');
    const [loginPw, setLoginPw] = useState('');
    const [iderror, setIdError] = useState('');
    const [pwerror, setPwError] = useState('');

    // 미입력시 focus를 하게하기 위해 DOM을 직접 컨트롤 할 수 있게 useRef 정의
    const idRef = useRef();
    const pwRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        setIdError('');
        setPwError('');
        
        // const loginId = document.getElementById('loginId');
        // const loginPw = document.getElementById('loginPw');

        if(loginId.trim().length === 0 && loginPw.trim().length === 0) {
            setIdError("아이디가 입력되지 않았습니다.");
            setPwError("비밀번호가 입력되지 않았습니다.");
            idRef.current.classList.remove('no-error');
            pwRef.current.classList.remove('no-error');
            idRef.current.focus();
            return;
        } else if (loginPw.trim().length === 0) {
            setPwError("비밀번호가 입력되지 않았습니다.");
            pwRef.current.focus();
            return;
        }  else {
            alert("로그인 테스트");
        }
    };

    const close = () => {
        setIdError('');
        setPwError('');
        idRef.current.classList.add('no-error');
        pwRef.current.classList.add('no-error');
    }

    useEffect(() => {
        idRef.current.classList.add('no-error');
        pwRef.current.classList.add('no-error');
    }, []);

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
                <label htmlFor="loginID" className="sr-only">아이디</label>
                <input 
                    type="text" 
                    id="loginId" 
                    placeholder="이메일 아이디"
                    value={loginId}
                    onChange={(e) => setLoginId(e.target.value)} 
                    ref={idRef}
                />
                {iderror && <div className="login-message" ><p>{iderror}</p></div>}
                <label htmlFor="loginPW" className="sr-only">비밀번호</label>
                <input 
                    type="password" 
                    id="loginPw" 
                    placeholder="비밀번호" 
                    value={loginPw}
                    onChange={(e) => setLoginPw(e.target.value)}
                    ref={pwRef}
                    autoComplete="off"
                />
                {pwerror && <div className="login-message"><p>{pwerror}</p></div>}
                <div className="login-btn-area">
                    <p className="forgot">아이디 / 비밀번호 찾기</p>
                    <button type="submit" className="login"> 로그인 </button>
                </div>
                <div className="login-stripe">
                  <span className="stripe-line"></span>
                  <span className="stripe-text">간편 로그인</span>
                  <span className="stripe-line"></span>
                </div>
                <div className="login-method">
                    <div className="login-method-control">
                        <Link to="#" className="login-method-action">
                            <i className="fa-brands fa-google-plus" />
                        </Link>
                    </div>
                    <div className="login-method-control">
                            <Link to="#" className="login-method-action">
                        <i className="fa-brands fa-facebook" />
                        </Link>
                    </div>
                    <div className="login-method-control">
                        <Link to="#" className="login-method-action">
                            <img src={Naver} alt="네이버 로고" className="fa-naver"/>
                        </Link>
                    </div>
                    <div className="login-method-control">
                        <Link to="#" className="login-method-action">
                            <i className="fa-brands fa-instagram" />
                        </Link>
                    </div>
                </div>
            </fieldset>
            <div className="login-form-bottom">
                <div className="login-btn-area">
                    <p className="not-member">아직 회원이 아니신가요?</p>
                    <Link to="./register" className="register"> 회원가입 </Link>
                </div>
            </div>
        </form>
    </div> 
    );
};

export default LoginForm;