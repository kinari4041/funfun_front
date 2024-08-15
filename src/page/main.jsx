import React from "react";

import NewProject from "section/recent"
import WillOpen from "section/willopen"
import Slide from "section/slide";
import AdRecommand from "section/adreco"
import Trend from "section/trend"
import CateRecommand from "section/catereco"

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