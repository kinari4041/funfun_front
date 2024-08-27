import React from "react";
import DOMPurify from 'dompurify';

const DetailInfoArticle = (props) => {

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

    const data = props.data;

    return (
      <>
        <div className="detail-slider">
          <div className='main' id="project-story" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(data.articleBody)}}></div>
        </div>
      </>
    )
}

export default DetailInfoArticle;