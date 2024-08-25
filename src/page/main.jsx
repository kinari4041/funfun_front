import React from "react";

import NewProject from "section/recent"
import WillOpen from "section/willopen"
import Slide from "section/slide";
import AdRecommand from "section/adreco"
import CateRecommand from "section/catereco"
import TrendList from "section/trendlist";
import { useLogin } from "util/LoginProvider";

const Main = () => {
    const { usrNickName, isLoggedIn } = useLogin();

    return (
        <main>
            <div id="section-content">
                <div id="section-content-wrap">
                    <Slide />
                    <CateRecommand />
                    <hr />
                    <AdRecommand />

                    <hr />
                    <section id="section3" className="section-area">
                        <div className="section-title">
                            <p>요즘 뜨고 있는 프로젝트</p>
                            <span>지금 핫한 프로젝트들만 모아봤어요</span>
                        </div>
                        <div className="trend-project">
                            <TrendList item={`오늘 가장 많은 <span className="hashtag">#좋아요</span>를 받은 프로젝트`} dataType="popular" />
                            <hr />
                            <TrendList item={`실시간 <span className="hashtag">#주목받는</span> 프로젝트!`} dataType="view" />
                            {isLoggedIn && 
                                <>
                                    <hr />
                                    <TrendList item={`${usrNickName} 님이 관심있는 <span className="hashtag">#키워드</span>에 대한 프로젝트!`} dataType="normal" />
                                </>
                            }
                        </div>
                    </section>
                    <hr />
                    <WillOpen />
                    <hr />
                    <NewProject />
                </div>
            </div> 
        </main>
    )
}

export default Main;