import React from "react";
import { Ad, Subject, Popular, Trend, Ready, New } from "../sections";

const Main = () => {
    return (
        <main>
            <div id="section-content">
                <div id="section-content-wrap">
                    <Popular />
                    <Subject />
                    <hr />
                    <Ad />
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