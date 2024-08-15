import { Helmet } from 'react-helmet-async';

const Register = () => {
  return (
    <>
      <Helmet>
        <title>FUNFUN - 회원가입</title>
      </Helmet>
      <div className="container">
          <form name="frmJoin" className="registration-form">
              <h2>회원가입</h2>
              <label htmlFor="email">*Email</label>
              <input type="email" id="email" name="email" required />
              
              <label htmlFor="name">*이름</label>
              <input type="text" id="name" name="name" required />
              
              <label htmlFor="pw">*비밀번호</label>
              <input type="password" id="pw" name="pw" required />
              
              <label htmlFor="confirm-password">*비밀번호확인</label>
              <input type="password" id="confirm-password" name="confirm-password" required />
              
              <label htmlFor="birthdate">*생년월일</label>
              <div className="birthdate">
                  <input type="text" id="year" name="year" placeholder="YYYY" required />
                  <select id="month" name="month" required>
                      <option value="MM">MM</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                  </select>
                  <select id="day" name="day" required>
                      <option value="DD">DD</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                  </select>
              </div>
              
              <label htmlFor="phone">*휴대전화</label>
              <input type="tel" id="phone" name="phone" required />
              
              
              <button type="submit">가입하기</button>
          </form>
      </div>
    </>
  );
}

export default Register;
