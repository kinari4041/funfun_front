import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import Naver from '../img/ico_naver.png'

const Register = () => {
    const navigate = useNavigate()
    const [nowPage, setNowPage] = useState(1);
    const [registerForm, setRegisterForm] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        nickname: '',
        birthdate: '',
        phone: '',
        termsAccepted: false,
        privacyAccepted: false,
        error: ''
    });
  // 페이드인 부분 초기설정
  const [fadeIn, setFadeIn] = useState(false);
  
  // from 부분 초기 여백 설정을 위한 dom 접근객체 생성
  const formRef = useRef();

  const pageHandler = (e) => {
    e.preventDefault();
    setRegisterForm(prevState => ({ ...prevState, error: ''}));
    if (nowPage === 1) {
      if (!registerForm.email) {
        setRegisterForm(prevState => ({ ...prevState, error: '아이디가 입력되지 않았습니다.'}));
        return;
      } else if (!registerForm.password) {
        setRegisterForm(prevState => ({ ...prevState, error: '비밀번호가 입력되지 않았습니다.'}));
        return;
      } else if (registerForm.password !== registerForm.confirmPassword) {
        setRegisterForm(prevState => ({ ...prevState, error: '비밀번호가 일치하지 않습니다.'}));
        return;
      }
    } else if (nowPage === 2) {
      if (!registerForm.name || !registerForm.nickname || !registerForm.birthdate || !registerForm.phone) {
        return;
      }
    } else if (nowPage === 3) {
      if (!registerForm.termsAccepted || !registerForm.privacyAccepted) {
        return;
      }
      window.location.href = '/'
      return;
    }

    setNowPage(prevPage => prevPage + 1);
  };

  const handleBackPage = () => {
    if (nowPage === 1) { navigate('/'); }
    setNowPage(prevPage => prevPage - 1);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegisterForm(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // useEffect 로 컴포넌트가 모두 로드되었을 때 페이드인 시작
  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className={`register-form-wrapper ${fadeIn ? 'fade-in' : ''}`}>
      <div className="register-form" style={{ transform: `translateX(-${(nowPage - 1) * 100}%)` }}>
        {/* 첫번재 페이지 */}
        {nowPage === 1 && (
          <div className="register-page">
          <Helmet>
            <title>FUNFUN - 회원가입1</title>
          </Helmet>
            <div className="logo">펀딩을 재밌게! FUNFUN</div>
            {/* <h1>가입을 환영합니다</h1> */}
                <div className="login-stripe">
                  <span className="stripe-line"></span>
                  <span className="stripe-text">정보 입력</span>
                  <span className="stripe-line"></span>
                </div>
                <span className="stripe-text">아이디와 비밀번호를 입력해주세요.</span>
                <form className="register-wrap">
            <input
              type="email"
              name="email"
              placeholder="이메일"
              value={registerForm.email}
              onChange={handleChange}
              required
              ref={formRef}
            />
            {registerForm.error && <div className="login-message" ><p>{registerForm.error}</p></div>}
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              value={registerForm.password}
              onChange={handleChange}
              autoComplete='off'
              required
              ref={formRef}
            />
            {registerForm.error && <div className="login-message" ><p>{registerForm.error}</p></div>}
            <input
              type="password"
              name="confirmPassword"
              placeholder="비밀번호 확인"
              value={registerForm.confirmPassword}
              onChange={handleChange}
              autoComplete='off'
              required
              ref={formRef}
            />
            </form>
            {registerForm.error && <div className="login-message" ><p>{registerForm.error}</p></div>}
            <div className="register-button-wrap">
                <button onClick={handleBackPage} className="prev-page">메인</button>
                <button onClick={pageHandler} className="next-page">다음</button>
            </div>
                <div className="login-stripe">
                  <span className="stripe-line"></span>
                  <span className="stripe-text">간편 가입하기</span>
                  <span className="stripe-line"></span>
                </div>
              <div className="sns-signup">
                  <button className="login-method-control">
                      <Link to="#" className="login-method-action">
                          <i className="fa-brands fa-google-plus" />
                      </Link>
                  </button>
                  <button className="login-method-control">
                      <Link to="#" className="login-method-action">
                        <i className="fa-brands fa-facebook" />
                      </Link>
                  </button>
                  <button className="login-method-control">
                      <Link to="#" className="login-method-action">
                          <img src={Naver} alt="네이버 로고" className="fa-naver"/>
                      </Link>
                  </button>
                  <button className="login-method-control">
                      <Link to="#" className="login-method-action">
                        <i className="fa-brands fa-instagram" />
                      </Link>
                  </button>
          </div>
          </div>
        )}

        {/* Page 2 */}
        {nowPage === 2 && (
          <div className="register-page">
          <Helmet>
            <title>FUNFUN - 회원가입2</title>
          </Helmet>
            <h1>회원정보 입력</h1>
            <input
              type="text"
              name="name"
              placeholder="이름"
              value={registerForm.name}
              onChange={handleChange}
              required
              ref={formRef}
            />
            <input
              type="text"
              name="nickname"
              placeholder="닉네임"
              value={registerForm.nickname}
              onChange={handleChange}
              required
              ref={formRef}
            />
            <input
              type="date"
              name="birthdate"
              placeholder="생년월일"
              value={registerForm.birthdate}
              onChange={handleChange}
              required
              ref={formRef}
            />
            <input
              type="tel"
              name="phone"
              placeholder="휴대전화"
              value={registerForm.phone}
              onChange={handleChange}
              required
              ref={formRef}
            />
            <div className="register-button-wrap">
                <button onClick={handleBackPage} className="prev-page">이전</button>
                <button onClick={pageHandler} className="next-page">다음</button>
            </div>
          </div>
        )}

        {/* Page 3 */}
        {nowPage === 3 && (
          <div className="register-page">
          <Helmet>
            <title>FUNFUN - 회원가입(동의)</title>
          </Helmet>
            <h1>{registerForm.name}님 가입을 환영합니다!</h1>
            <label>
              <input
                type="checkbox"
                name="termsAccepted"
                checked={registerForm.termsAccepted}
                onChange={handleChange}
                required
                ref={formRef}
              />
              서비스 이용 약관 동의
            </label>
            <label>
              <input
                type="checkbox"
                name="privacyAccepted"
                checked={registerForm.privacyAccepted}
                onChange={handleChange}
                required
                ref={formRef}
              />
              개인정보 처리방침 동의
            </label>
            <button onClick={handleBackPage}>이전</button>
            <button onClick={pageHandler} className="next-page">가입하기</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
