import React from "react";

import New from "../section/section_newproject"
import Ready from "../section/section_willopen"
import Popular from "../page/popular";
import Ads from "../section/section_adreco"
import Trend from "../section/section_trend"
import Subject from "../section/section_catereco"

const Main = () => {
    return (
        <main>
            <div id="section-content">
                <div id="section-content-wrap">
                    <Popular />
                    <Subject />
                    <hr />
                    <Ads />
                    <hr />
                    <Trend />
                    <hr />
                    <Ready />
                    <hr />
                    <New />
                </div>
            </div> 
        </main>
    )
}

export default Main;