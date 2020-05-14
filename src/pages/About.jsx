import React from 'react';
import { FormattedMessage } from 'react-intl';

const About = () => {
  return (
    <>
    <div className="container">
      <h1 className="text-center mt-3"><FormattedMessage id="about.title" /></h1>
      <div className="d-flex justify-content-center">
        <iframe src="https://giphy.com/embed/3oEduU2JjgQUGKyNvG" width="680" height="370"></iframe>
      </div>
    </div>
    </>
  );
}
export default About;
