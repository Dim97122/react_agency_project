import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import projects from '../data/projects'


const Works = ({ modify }) => {
  return (
    <>
      <div className="container">
        <h1><FormattedMessage id="works.title" /></h1>
        <p><FormattedMessage id="works.description" /></p>
        <div className="d-flex justify-content-around">
          {projects.map((project, key) => (
            <div className="card col-lg-3" key={key}>
              <div className="card-body">
                <div className="card-title">
                  <h3><FormattedMessage id={`${project.client}.title`} /></h3>
                </div>
                <div className="card-text">
                  <p><FormattedMessage id={`${project.client}.description`} /></p>
                </div>
              </div>
              <div className="btn btn-outline-secondary text-white">
                <Link to={`/works/${project.slug}`}>
                  EN SAVOIR PLUS
                </Link>
              </div>
            </div>
          ))};
        </div>
      </div>
    </>
  );
}
export default Works;
