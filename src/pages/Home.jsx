import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

const Home = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center mt-3"><FormattedMessage id="home.title" /></h1>
        <div className="d-flex justify-content-center">
          <iframe src="https://giphy.com/embed/LmNwrBhejkK9EFP504" width="480" height="480"></iframe>
        </div>
      </div>
    </>
  );
}
export default Home;
