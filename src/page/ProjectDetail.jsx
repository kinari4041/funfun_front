import React, { useState, useEffect } from 'react';
// import 'css/projectDetail.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useLocation, } from 'react-router-dom';
import { FaShareAlt } from 'react-icons/fa';
import { useArticle } from 'util/useArticle';
import { Helmet } from 'react-helmet-async';
import { articleLike, articleCancleLike, getLike } from "util/apiService";

const ProjectDetail = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const articleId = queryParams.get('id');
  const [data, error] = useArticle(articleId);

  // 좋아요 상태 변수 저장
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [likeError, setLikeError] = useState(null);

  // 하트 버튼 클릭 핸들러
  const handleLike = async (e) => {
    try {
      if (liked) {
          await articleCancleLike(articleId)
        } else {
          await articleLike(articleId);
        }
        setLiked(!liked);  // 클릭할 때마다 상태 변경

        const nowLike = await getLike(articleId);
        setLikes(nowLike);

      

    } catch (error) {
        setLikeError(error);
    }
  };

  const likeButton = () => {
    return (
      <div className="like-container">
        <div className="heart-wrap" onClick={handleLike}>
          <div className={`heart-btn ${liked ? 'liked' : ''}`}>
            <svg className="heart heart-icon" viewBox="0 0 32 29.6">
              <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
            </svg>
          </div>
        </div>
      <p className="like-count">{(!likeError) ? likes : 'fun'}</p>
    </div>
    )
  }

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
          const response = await getLike(articleId);
          setLikes(response);
      } catch (err) {
          setLikeError(err);
      }
    };

    fetchData();
}, [articleId]);

  if (error) return <div>데이터를 불러오는중 문제가 발생했습니다.</div>

  return (
    <>
        <Helmet>
          <title>{`FUNFUN - ${data.articleTitle}`}</title>
        </Helmet>
        <div className="detail-container">
          <div className="detail-slider">
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
          <div className="detail-info-panel">
            <div className='info-panel-bar'>
              <h1>{data.projectName}</h1>
              <p>{data.articleTitle}</p>
              <div className="detail-funding-info">
                <p><strong>{data.projectGoal === 0 ? 0 : Math.floor((data.projectCurrent / data.projectGoal) * 100)}%</strong> 달성</p>
                <p><strong>{parseInt(data.projectCurrent).toLocaleString()}</strong> 원 달성</p>
                <p>{data.projectPeople} 명 참여</p>
              </div>
              <div className="detail-bottom-section">
              {likeButton()}
                <FaShareAlt className="detail-share-icon" />
                <button className="detail-funding-button">펀딩하기</button>
            </div>
            
            </div>
            <div className="detail-reward-selection">
                <h1>리워드 선택</h1>
                <p className="detail-duration">진행기간: 7.29 - 8.29</p>
                
                <div className="detail-reward-card">
                    <div className="detail-reward-header">
                        <span className="detail-price">19,000원</span>
                        <span className="detail-remaining">현재 100개 남음!</span>
                    </div>
                    <div className="detail-reward-content">
                        <h2>[슈퍼 얼리버드] 다크 머스코바도 시럽</h2>
                        <p>혜택: 20% 혜택 적용 + 5% 추가혜택 + 무료배송</p>
                        <p>구성: 다크 머스코바도 시럽 A</p>
                        <p>콜드브루 500ml</p>
                    </div>
                    <div className="detail-reward-footer">
                        <p>배송비: 무료배송</p>
                        <p>발송 시작일: 2024년 08월 말순 (25~29일) 예정</p>
                        <p>제한 수량: 100개</p>
                    </div>
                </div>

                <div className="detail-reward-card">
                    <div className="detail-reward-header">
                        <span className="detail-price">28,000원</span>
                        <span className="detail-remaining">현재 100개 남음!</span>
                    </div>
                    <div className="detail-reward-content">
                        <h2>[슈퍼 얼리버드] 다크 머스코바도 시럽</h2>
                        <p>혜택: 20% 혜택 적용 + 5% 추가혜택 + 무료배송</p>
                        <p>구성: 다크 머스코바도 시럽 B</p>
                        <p>콜드브루 1000ml</p>
                    </div>
                    <div className="detail-reward-footer">
                        <p>배송비: 무료배송</p>
                        <p>발송 시작일: 2024년 08월 말순 (25~29일) 예정</p>
                        <p>제한 수량: 100개</p>
                    </div>
                </div>

                <div className="detail-reward-card">
                    <div className="detail-reward-header">
                        <span className="detail-price">46,000원</span>
                        <span className="detail-remaining">현재 50개 남음!</span>
                    </div>
                    <div className="detail-reward-content">
                        <h2>[슈퍼 얼리버드] 다크 머스코바도 시럽</h2>
                        <p>혜택: 20% 혜택 적용 + 5% 추가혜택 + 10% 커플혜택 + 무료배송</p>
                        <p>구성: 다크 머스코바도 시럽 C</p>
                        <p>콜드브루 2000ml</p>
                    </div>
                    <div className="detail-reward-footer">
                        <p>배송비: 무료배송</p>
                        <p>발송 시작일: 2024년 08월 말순 (25~29일) 예정</p>
                        <p>제한 수량: 100개</p>
                    </div>
                </div>
            </div>
            <div className="detail-bottom-section">
              {likeButton()}
              <span><FaShareAlt className="detail-share-icon" /></span>
              <button className="detail-funding-button">펀딩하기</button>
            </div>
          </div>
        </div>
        </>
      );
    }
    

export default ProjectDetail;
