import React from 'react';
import 'css/story.css';

function Post({ profilePic, sellerName, postTime, postImage, postDescription, taggedItemCount, taggedItems }) {
    return (
        <div className="post">
            <div className="post-header">
                <img src={profilePic} alt="프로필 사진" className="profile-pic" />
                <div>
                    <div className="seller-name">{sellerName}</div>
                    <div className="post-time">{postTime}</div>
                </div>
            </div>
            <img src={postImage} alt="게시 이미지" className="post-image" />
            <div className="post-description">
                {postDescription}
            </div>
            <button className="tagged-item-button">
                <div className="tagged-item">
                    태그된 작품 {taggedItemCount}개
                </div>
                <div className="tagged-item-details">
                    {taggedItems.map((item, index) => (
                        <div key={index} className="tagged-item-detail">
                            <img src={item.image} alt={`상품 ${index + 1}`} className="tagged-item-image" />
                            <div className="tagged-item-price">{item.price}</div>
                        </div>
                    ))}
                </div>
            </button>
            <div className="post-footer">
                <button>
                    <img src="https://img.icons8.com/ios/50/happy--v1.png" alt="공감하기" /> 공감하기
                </button>
                <button>
                    <img src="https://img.icons8.com/ios/50/comments--v1.png" alt="댓글쓰기" /> 댓글쓰기
                </button>
            </div>
        </div>
    );
}


function Story() {
    return (
        <section id="search" className="section-area">
            <div className="section-title">
                <p>스토리 - 우리들의 이야기</p>
            </div>
        <div className="posts-container">
            <Post
                profilePic={'https://picsum.photos/400/400?random=1'}
                sellerName="SojoNyang (소주냥)"
                postTime="26분 전"
                postImage={'https://picsum.photos/400/400?random=1'}
                postDescription="소중한 분에게 소중한 나에게 소주를 💕"
                taggedItemCount={1}
                taggedItems={[
                    { image: 'https://picsum.photos/400/400?random=1', price: "₩15,000" },
                ]}
            />
            <Post
                profilePic={'https://picsum.photos/400/400?random=1'}
                sellerName="미라공방"
                postTime="26분 전"
                postImage={'https://picsum.photos/400/400?random=1'}
                postDescription="연탄봉사 갔다왔습니다 💕"
                taggedItemCount={0}
                taggedItems={[
                ]}
            />
            <Post
                profilePic={'https://picsum.photos/400/400?random=1'}
                sellerName="하루아침"
                postTime="26분 전"
                postImage={'https://picsum.photos/400/400?random=1'}
                postDescription="이번달 소식입니다 💕"
                taggedItemCount={2}
                taggedItems={[
                    { image: 'https://picsum.photos/400/400?random=1', price: "₩30,000" },
                    { image: 'https://picsum.photos/400/400?random=1', price: "₩25,000 "}
                ]}
            />
            <Post
                profilePic={'https://picsum.photos/400/400?random=1'}
                sellerName="코코"
                postTime="26분 전"
                postImage={'https://picsum.photos/400/400?random=1'}
                postDescription="뚱냥이거울 제작 현황입니다. 💕"
                taggedItemCount={1}
                taggedItems={[
                    { image: 'https://picsum.photos/400/400?random=1', price: "₩10,000" },
                ]}
            />
        </div>
        </section>
    );
}

export default Story;
