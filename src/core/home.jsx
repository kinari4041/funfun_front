import Main from "page/main";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <>
            <Helmet>
              <title>펀딩을 재밌게, FUNFUN!</title>
            </Helmet>
            <Header />
            <Main />
            <Footer />
        </>
    );
}

export default Home;