import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './register.css';

const Register = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    nickname: '',
    birthdate: '',
    phone: '',
    termsAccepted: false,
    privacyAccepted: false
  });
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleNextPage = () => {
    if (currentPage === 1) {
      if (!formData.email || !formData.password || formData.password !== formData.confirmPassword) {
        return;
      }
    } else if (currentPage === 2) {
      if (!formData.name || !formData.nickname || !formData.birthdate || !formData.phone) {
        return;
      }
    } else if (currentPage === 3) {
      if (!formData.termsAccepted || !formData.privacyAccepted) {
        return;
      }
      window.location.href = '/home'
      return;
    }

    setCurrentPage(prevPage => prevPage + 1);
  };

  const handleBackPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className={`register-container ${fadeIn ? 'fade-in' : ''}`}>
      <div className="register-form" style={{ transform: `translateX(-${(currentPage - 1) * 100}%)` }}>
        {/* Page 1 */}
        {currentPage === 1 && (
          <div className="page">
          <Helmet>
            <title>FUNFUN - 회원가입1</title>
          </Helmet>
            <div className="logo">펀딩을 재밌게! FUNFUN</div>
            <h1>가입을 환영합니다</h1>
            <div className="divider" />
            <div className="sns-signup">
              <button className="sns-button"><i className="fab fa-google"></i></button>
              <button className="sns-button"><i className="fab fa-facebook-f"></i></button>
              <button className="sns-button"><i className="fab fa-instagram"></i></button>
            </div>
            <div className="divider" />
            <input
              type="email"
              name="email"
              placeholder="이메일"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="비밀번호 확인"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <button onClick={handleNextPage}>다음</button>
          </div>
        )}

        {/* Page 2 */}
        {currentPage === 2 && (
          <div className="page">
          <Helmet>
            <title>FUNFUN - 회원가입2</title>
          </Helmet>
            <h1>회원정보 입력</h1>
            <input
              type="text"
              name="name"
              placeholder="이름"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="nickname"
              placeholder="닉네임"
              value={formData.nickname}
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="birthdate"
              placeholder="생년월일"
              value={formData.birthdate}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="휴대전화"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <button onClick={handleBackPage}>이전</button>
            <button onClick={handleNextPage}>다음</button>
          </div>
        )}

        {/* Page 3 */}
        {currentPage === 3 && (
          <div className="page">
          <Helmet>
            <title>FUNFUN - 회원가입(동의)</title>
          </Helmet>
            <h1>{formData.name}님 가입을 환영합니다!</h1>
            <label>
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                required
              />
              서비스 이용 약관 동의
            </label>
            <label>
              <input
                type="checkbox"
                name="privacyAccepted"
                checked={formData.privacyAccepted}
                onChange={handleChange}
                required
              />
              개인정보 처리방침 동의
            </label>
            <button onClick={handleBackPage}>이전</button>
            <button onClick={handleNextPage}>가입하기</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
