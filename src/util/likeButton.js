import React from "react";
import 'css/projectDetail.css';
import { useState } from "react";

function LikeButton() {
    // 상태 변수 설정
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(1528);
  
    // 하트 버튼 클릭 핸들러
    const handleLike = () => {
      if (liked) {
        setLikeCount(likeCount - 1);
      } else {
        setLikeCount(likeCount + 1);
      }
      setLiked(!liked);  // 클릭할 때마다 상태 변경
    };
  
    return (
      <div className="like-container">
        <button className={`like-button ${liked ? 'liked' : ''}`} onClick={handleLike}>
          <span role="img" aria-label="heart">❤️</span>
          <p className="like-count">{likeCount.toLocaleString()}</p>
        </button>
      </div>
    );
  }
  
  export default LikeButton;