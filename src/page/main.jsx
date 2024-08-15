import React from "react";

import NewProject from "section/section_newproject"
import WillOpen from "section/section_willopen"
import Slide from "section/section_popular";
import AdRecommand from "section/section_adreco"
import Trend from "section/section_trend"
import CateRecommand from "section/section_catereco"

const Main = () => {
    return (
        <main>
            <div id="section-content">
                <div id="section-content-wrap">
                    <Slide />
                    <CateRecommand />
                    <hr />
                    <AdRecommand />
                    <hr />
                    <Trend />
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