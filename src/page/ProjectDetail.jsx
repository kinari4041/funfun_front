import React from 'react';
import 'css/projectDetail.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import LikeButton from 'util/likeButton';
import { useLocation, } from 'react-router-dom';
import { FaShareAlt } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

const ProjectDetail = () => {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.project);
  const projectid = queryParams.get('id') || '';

  

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
        <div className="container">
          <div className="slider">
            <Slider {...sliderSettings}>
              <div>
                <img src='https://picsum.photos/400/400?random=1' alt="lorem" />
              </div>
              <div>
                <img src='https://picsum.photos/400/400?random=2' alt="lorem" />
              </div>
            </Slider>
            <div className='menu_bar'>
              <ul><a href='#project-story'>프로젝트 이야기</a></ul>
              <ul><a href='#update'>업데이트</a></ul>
              <ul><a href='#community'>커뮤니티</a></ul>
              <ul><a href='#reviews'>후기</a></ul>
            </div>
            <p>
              <br />
            </p>
            <div className='main' id="project-story">
              <br />
              <div className='main_title'>
                프로젝트 이야기
              </div>
              <br />
              <br />
              <div className='main_pic1'>
                <img src='https://picsum.photos/400/400?random=3' alt="lorem" />
              </div>
                <div className='main_content1'>
                  <div className='main_content1_one'>
                    아침의 첫 햇살이 창문을 통해 부드럽게 <br />방 안으로 스며들 때, 나는 따뜻한 커피 <br />한 잔을 손에 들고 오늘 하루를 시작합니다.
                  </div>                  
                </div>
                <div className='main_pic1'>
                <img src='https://picsum.photos/400/400?random=4' alt="lorem" />
              </div>
                <div className='main_content1'>
                  <div className='main_content1_one'>
                    <br />
                  때로는 친구와, 때로는 사랑하는 사람과, <br />커피 한잔 할 시간은 만들어 주세요.
                  </div>
                </div>
              </div>
          </div>
          <div className="info-panel">
            <div className='info-panel-bar'>
              <h1>"집안에 향기를 더하다! 지금 바로 향초를 켜고, 특별한 순간을 만들어보세요!"</h1>
              <p>"커피 애호가들을 위한 특별한 혜택! 지금 구매하시면, 추가 할인과 함께 특별한 사은품을 받아보실 수 있습니다. 커피 한 잔의 여유를 더욱 풍성하게 즐기세요."</p>
              <div className="funding-info">
                <p><strong>18,164%</strong> 달성</p>
                <p><strong>90,820,000</strong> 원 달성</p>
                <p>1,528명 참여</p>
              </div>
              <div class="bottom-section">
                <LikeButton />
                <FaShareAlt className="share-icon" />
                <button className="funding-button">펀딩하기</button>
            </div>
            
            </div>
            <div class="reward-selection">
                <h1>리워드 선택</h1>
                <p class="duration">진행기간: 7.29 - 8.29</p>
                
                <div class="reward-card">
                    <div class="reward-header">
                        <span class="price">19,000원</span>
                        <span class="remaining">현재 100개 남음!</span>
                    </div>
                    <div class="reward-content">
                        <h2>[슈퍼 얼리버드] 다크 머스코바도 시럽</h2>
                        <p>혜택: 20% 혜택 적용 + 5% 추가혜택 + 무료배송</p>
                        <p>구성: 다크 머스코바도 시럽 A</p>
                        <p>콜드브루 500ml</p>
                    </div>
                    <div class="reward-footer">
                        <p>배송비: 무료배송</p>
                        <p>발송 시작일: 2024년 08월 말순 (25~29일) 예정</p>
                        <p>제한 수량: 100개</p>
                    </div>
                </div>

                <div class="reward-card">
                    <div class="reward-header">
                        <span class="price">28,000원</span>
                        <span class="remaining">현재 100개 남음!</span>
                    </div>
                    <div class="reward-content">
                        <h2>[슈퍼 얼리버드] 다크 머스코바도 시럽</h2>
                        <p>혜택: 20% 혜택 적용 + 5% 추가혜택 + 무료배송</p>
                        <p>구성: 다크 머스코바도 시럽 B</p>
                        <p>콜드브루 1000ml</p>
                    </div>
                    <div class="reward-footer">
                        <p>배송비: 무료배송</p>
                        <p>발송 시작일: 2024년 08월 말순 (25~29일) 예정</p>
                        <p>제한 수량: 100개</p>
                    </div>
                </div>

                <div class="reward-card">
                    <div class="reward-header">
                        <span class="price">46,000원</span>
                        <span class="remaining">현재 50개 남음!</span>
                    </div>
                    <div class="reward-content">
                        <h2>[슈퍼 얼리버드] 다크 머스코바도 시럽</h2>
                        <p>혜택: 20% 혜택 적용 + 5% 추가혜택 + 10% 커플혜택 + 무료배송</p>
                        <p>구성: 다크 머스코바도 시럽 C</p>
                        <p>콜드브루 2000ml</p>
                    </div>
                    <div class="reward-footer">
                        <p>배송비: 무료배송</p>
                        <p>발송 시작일: 2024년 08월 말순 (25~29일) 예정</p>
                        <p>제한 수량: 100개</p>
                    </div>
                </div>
            </div>
            <div class="bottom-section">
              <span><LikeButton /></span>
              <span><FaShareAlt className="share-icon" /></span>
              <button className="funding-button">펀딩하기</button>
            </div>
          </div>
        </div>
      );
    }
    

export default ProjectDetail;
