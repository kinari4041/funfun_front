import { Helmet } from 'react-helmet-async';

import Header from '../core/header'

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
