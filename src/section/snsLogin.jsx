import React from 'react';
import { Link } from 'react-router-dom';
import btn_naver from 'img/btn_naver.svg'
import btn_kakao from 'img/btn_kakao.svg'

const SnsLogin = (props) => {

    if (props.type === 'login') {
        console.log('SNS 간편 로그인 화면')
    } else {
        console.log('SNS 간편 회원가입 화면')
    }

    return (
        <div className="login-method">
            <div className="login-method-control">
                <Link to="#" className="login-method-action">
                    <img src={btn_naver} alt="네이버 로고" className="fa-naver"/>
                </Link>
            </div>
            <div className="login-method-control">
                <Link to="#" className="login-method-action">
                    <img src={btn_kakao} alt="카카오 로고" className="fa-kakao"/>
                </Link>
            </div>
            <div className="login-method-control">
                <Link to="#" className="login-method-action ready">
                    <i className="fab fa-google" />
                </Link>
            </div>
            <div className="login-method-control">
                <Link to="#" className="login-method-action ready">
                    <i className="fa-brands fa-facebook" />
                </Link>
            </div>
            <div className="login-method-control">
                <Link to="#" className="login-method-action ready">
                    <i className="fa-brands fa-instagram" />
                </Link>
            </div>
        </div>
    )
}
export default SnsLogin;